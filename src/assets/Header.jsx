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
      <div className="brand">Stranger's Thing</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>


        {isLoggedIn ? (
          <>
            <Link to="/newpost">Creat Post</Link>
            {/* <Link to="/update-post/:id">Update Post</Link> */}
            <Link to="/profile">Profile</Link>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
