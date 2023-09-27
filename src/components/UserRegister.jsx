import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { APIURL } from "../assets/api";

const UserRegister = () => {
  const registerUser = async (registerData) => {
    try {
      const response = await axios.post(`${APIURL}/users/register`, {
        user: registerData,
      });
      toast.success("You have registered successfully, please log in");
      // console.log(response.data);
      console.log(registerData);
      console.log("Token:", response.data.data.token);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data
          : "Something went wrong";
      toast.error(errorMessage);
      console.error(error);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const registerData = Object.fromEntries(data.entries());

    await registerUser(registerData);
  };

  return (
    <div>
      <h1 id="form-padding">Sign Up</h1>
      <form className="registerForm" onSubmit={submit}>
        <div className="form-group">
          <label>Your Username</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Username"
            name="username"
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegister;
