import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import { useState } from "react";
import Profile from "pages/Profile";
import Login from "pages/Login";

const Router = () => {
  const [login, setLogin] = useState(true);
  return (
    <BrowserRouter>
      <Routes >
        {login ?
          <>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </> : <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>}

      </Routes>
    </BrowserRouter>
  )
}

export default Router;