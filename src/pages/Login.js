import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FetchRequest from "../FetchRequest";
import { Link } from "react-router-dom";
import "./Login.css";

function Login({ variable, setVariable, loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [staff, setStaff] = useState(false);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleStaffCheck = (event) => {
    setStaff(!staff);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (staff) {
      alert("staff");
    } else {
      console.log(username);
      let data = { username: username, password: password };
      let url = "http://localhost:5000/nonstaffusers/login";

      let response = FetchRequest(url, "POST", data);

      response.then((value) => {
        if (value.auth) {
          setVariable(username);
          setLoggedIn(true);
          navigate("/home");
        } else {
          console.log("failed");
          alert("Incorrect Credentials");
        }
      });
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3 form-floating text-body">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            onChange={handleUsername}
            required
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="mb-3 form-floating text-body">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={handlePassword}
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="mb-3 form-check form-switch">
          <input
            type="checkbox"
            role="switch"
            className="form-check-input"
            id="userType"
            checked={staff}
            onChange={handleStaffCheck}
          />
          <label htmlFor="userType" className="form-label">
            Staff Member
          </label>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      <div className="mt-5">
        <p className="mb-1">Don't have an account?</p>
        <Link className="link-info text-decoration-none " to="/register">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
