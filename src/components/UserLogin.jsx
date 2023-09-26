import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const registerData = Object.fromEntries(data);

    try {
      const response = await axios.post(
        "http://localhost:5050/user/login",
        registerData
      );
      let d = new Date();
      d.setTime(d.getTime() + 59 * 60 * 1000);
      Cookies.set("loggedIn", response.data, { expires: d });

      toast.success("Successfully signed in!");

      // console.log(Cookies.get("loggedIn"));

      navigate("/posts");
      location.reload();
    } catch (e) {
      // console.log(response.data);
      console.log(e);

      // login failed message
      toast.error("Login failed: Invalid username or password");
    }
  };

  return (
    <div>
      <h2 id="form-padding">User Login</h2>
      <form onSubmit={login} className="registerForm">
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Your email"
            name="username"
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="user_password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-5">
          Submit
        </button>
      </form>

      <div className="has-account">
        <p>
          No Account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
