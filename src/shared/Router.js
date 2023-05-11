import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import Main from "../pages/Main";
import Mypage from "../pages/Mypage";
import Play from "../pages/Play";
import Result from "../pages/Result";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import WorldCupCreate from "../pages/WorldCupCreate";
import WorldCupUpdate from "pages/WorldCupUpdate";

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/play" element={<Play />} />
          <Route path="/result" element={<Result />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/worldcupcreate" element={<WorldCupCreate />} />
          <Route path="/worldcupupdate/:id" element={<WorldCupUpdate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
