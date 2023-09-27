import React from "react";
import { FaSearch } from "react-icons/fa";
import AllPosts from "./AllPosts";

const Home = () => {
  return (
    <div className="content-wrapper">
      <h2>Welcome to Stranger's Things</h2>
      <div>
        <form className="search-form">
          <input
            type="text"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <button type="submit">
            <FaSearch />
          </button>{" "}
          {/* Using search icon as button content */}
        </form>
      </div>

      <di>
        <AllPosts />
      </di>
    </div>
  );
};

export default Home;
