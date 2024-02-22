import axios from "axios"
import { toast } from "react-toastify";
import { logout } from "testRedux/modules/authSlice";

let store;
import("testRedux/config/configStore").then(module => {
  store = module.default();
});

export const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  headers: {
    "Content-Type": "application/json"
  }
});

export const jsonApi = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json"
  }
});

authApi.interceptors.request.use(
  async function (config) {
    // 헤더에 토큰 넣기
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

authApi.interceptors.response.use(
  async function (response) {
    return response;
  },
  function (error) {
    toast.error(error.response.data.message);
    if (error.response.data.message === "토큰이 만료되었습니다. 다시 로그인 해주세요.") {
      // 로그아웃 처리
      store.dispatch(logout());
      return;
    }
    return Promise.reject(error);
  }
)

jsonApi.interceptors.request.use(
  async function (config) {
    const { data } = await authApi.get("/user");
    if (data.success) return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);