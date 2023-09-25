import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import Home from "./Homepage";
import AllPosts from "./AllPosts";
import UserRegister from "./UserRegister";
import UserLogin from "./UserLogin";

const PagesContainer = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </div>
  );
};

export default PagesContainer;
