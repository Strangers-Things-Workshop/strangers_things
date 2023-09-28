import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { APIURL } from "../assets/api";

const UserLogin = () => {
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const loginData = Object.fromEntries(data);

    try {
      const response = await axios.post(`${APIURL}/users/login`, {
        user: loginData,
      });
      let d = new Date();
      d.setTime(d.getTime() + 59 * 60 * 1000);
      Cookies.set("loggedIn", response.data.data.token, { expires: d });

      toast.success("Successfully signed in!");

      // console.log(Cookies.get("loggedIn"));

      navigate("/");
      window.location.reload();
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data
          : "Login failed: Invalid username or password";
      toast.error(errorMessage);
      console.error(error);
    }
  };

  return (
    <div>
      <h3 id="form-padding">User Login</h3>
      <form onSubmit={login} className="registerForm">
        <div className="form-group">
          <label>Your Username</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Your Username"
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
            name="password"
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
