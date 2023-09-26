import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  const login = Cookies.get("loggedIn");
    setIsLoggedIn(!!login);
  }, []);

  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      {isLoggedIn ? (
        <>
          {/* <Link to="/posts/:id">Update Post</Link> */}
          <Link to="/logout">Logout</Link>
        </>
      ) : (
        <>
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default Header;
