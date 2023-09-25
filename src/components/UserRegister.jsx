import React from "react";

const UserRegister = () => {
  return (
    <div>
      <h1 id="form-padding">Sign Up</h1>
      <form className="registerForm">
        <div className="form-group">
          <label>Your Username</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="customer_username"
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
            name="customer_password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="first_name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="last_name"
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
