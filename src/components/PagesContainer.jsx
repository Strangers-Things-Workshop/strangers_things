import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import Home from "./Homepage";
import AllPosts from "./AllPosts";
import UserRegister from "./UserRegister";
import UserLogin from "./UserLogin";
import UserLogout from "./UserLogout";
import UpdatePost from "./UpdatePost";
import NewPost from "./NewPost";
import UserProfile from "./userProfile";
import SinglePost from "./SinglePost";

const PagesContainer = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/update-post/:id" element={<UpdatePost />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/logout" element={<UserLogout />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </div>
  );
};

export default PagesContainer;
