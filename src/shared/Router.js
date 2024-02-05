import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import fakeData from 'fakeData.json';
import { useState } from "react";

const Router = () => {
  const [letters, setLetters] = useState(fakeData);
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home letters={letters} setLetters={setLetters} />} />
        <Route path="/detail/:id" element={<Detail letters={letters} setLetters={setLetters} />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;