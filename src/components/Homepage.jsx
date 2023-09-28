import React from "react";
import AllPosts from "./AllPosts";
import Search from "./Search";

const Home = () => {
  return (
    <div className="content-wrapper">
      <h2>Welcome to Stranger's Things</h2>

      <div>
        <AllPosts />
      </div>
    </div>
  );
};

export default Home;
