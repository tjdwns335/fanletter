import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi, jsonApi } from 'api';
import defaultUser from "assets/defaultuser.jpg"
import { toast } from 'react-toastify';

const initialState = {
  isLogin: !!localStorage.getItem("accessToken"),
  avatar: localStorage.getItem("avatar"),
  nickname: localStorage.getItem("nickname"),
  userId: localStorage.getItem("userId"),
  isLoading: false,
  isError: false,
  error: null,
}

export const __changeProfile = createAsyncThunk(
  "changeProfile",
  async (formData, thunkAPI) => {
    try {
      const { data } = await authApi.patch("/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
      const { nickname, avatar } = data;
      const userId = localStorage.getItem("userId");
      const { data: myLetter } = await jsonApi.get(`/letters?userId=${userId}`);
      for (let letter of myLetter) {
        await jsonApi.patch(`/letters/${letter.id}`, { nickname, avatar });
      }
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const __login = createAsyncThunk(
  "login",
  async ({ id, password }, thunkAPI) => {
    try {
      const { data } = await authApi.post("/login?expiresIn=10m", {
        id, password
      });
      const { accessToken, avatar, nickname, userId } = data;
      if (data.success) {
        toast.success("로그인 성공");
        return { accessToken, avatar, nickname, userId };
      }
    } catch (error) {
      toast.error(error.response.data.message);
      thunkAPI.rejectWithValue(error);
    }
  })

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { accessToken, avatar, nickname, userId } = action.payload;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("userId", userId);
      state.isLogin = true;
      state.avatar = avatar || defaultUser;
      state.nickname = nickname;
      state.userId = userId;
    },
    logout: (state, action) => {
      state.isLogin = false;
      localStorage.clear();
    }
  },
  extraReducers: (builder) => {
    builder.addCase(__login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__login.fulfilled, (state, action) => {
      const { accessToken, avatar, nickname, userId } = action.payload;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("userId", userId);
      state.isLogin = true;
      state.avatar = avatar || defaultUser;
      state.nickname = nickname;
      state.userId = userId;
      state.isLoading = false;
    });
    builder.addCase(__login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    builder.addCase(__changeProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__changeProfile.fulfilled, (state, action) => {
      const { avatar, nickname } = action.payload;
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("nickname", nickname);
      if (avatar) {
        localStorage.setItem("avatar", avatar);
        state.avatar = avatar
      }
      if (nickname) {
        localStorage.setItem("nickname", nickname);
        state.nickname = nickname;
      }
      state.isLoading = false;
      toast.success("프로필 변경 완료");
    });
    builder.addCase(__changeProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;