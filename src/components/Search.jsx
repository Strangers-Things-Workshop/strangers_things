import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
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
  );
};

export default Search;
