import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FetchRequest from "../utils/FetchRequest";
import { ActiveContext, AuthContext } from "../App";
import Cookies from "js-cookie"

function Login() {
  const [
    user,
    setUser,
    loggedIn,
    setLoggedIn,
    staff,
    setStaff,
    admin,
    setAdmin,
  ] = useContext(AuthContext);
  const [active, setActive] = useContext(ActiveContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setActive("Login");

    const url = "http://localhost:5000/nonstaffusers/login/token";

    const sessionToken = Cookies.get("token");
    console.log(sessionToken);

    if (sessionToken != null) {
      const data = { token: sessionToken };

      const response = FetchRequest(url, "POST", data);

      response.then((value) => {
        if (value.auth) {
          setUser(value.user);
          setLoggedIn(true);
          setAdmin(value.admin);
          navigate("/home");
        }
        console.log(value);
      });
    }
  }, []);

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

    console.log(username);
    const data = { username, password };
    const url = `http://localhost:5000/${staff ? "staffusers" : "nonstaffusers"
      }/login`;

    const response = FetchRequest(url, "POST", data);

    response.then((value) => {
      console.log(value);
      if (value.auth) {
        setUser(username);
        setLoggedIn(true);
        setAdmin(value.admin);
        Cookies.set("token", value.token, { expires: 1 });
        navigate("/home");
      } else if (value.inactive) {
        console.log("inactive");
        alert("User account is Inactive");
      } else {
        console.log("failed");
        alert("Incorrect Credentials");
      }
    });
  };

  return (
    <div className="mt-5">
      <form className="justify-center content-center" onSubmit={handleSubmit}>
        <div className="mb-3 form-floating text-body">
          <input
            type="text"
            className="text-input"
            id="username"
            placeholder="Username"
            onChange={handleUsername}
            required
          />
          {/* <label htmlFor="username">Username</label> */}
        </div>
        <div className="mb-3 form-floating text-body">
          <input
            type="password"
            className="text-input"
            id="password"
            placeholder="Password"
            onChange={handlePassword}
            required
          />
          {/* <label htmlFor="password">Password</label> */}
        </div>
        <label className="flex justify-center">
          <input
            type="checkbox"
            className="sr-only peer"
            id="userType"
            checked={staff}
            onChange={handleStaffCheck}
          />
          <div
            className="relative w-11 h-6 bg-slate-950  peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sky-600 rounded-full peer-checked:after:translate-x-full 
    rtl:peer-checked:after:translate-x-full peer-checked:after:border-sky-100 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-slate-950 
    after:border-sky-600 after:border after:rounded-full after:h-5 after:w-5 peer-checked:after:bg-sky-600 after:transition-all after:duration-150 after:ease-linear"
          ></div>
          <pan className="mx-2">Staff Member</pan>
        </label>
        <div className="flex justify-center">
          <button type="submit" className="button button-sky">
            Submit
          </button>
        </div>
      </form>
      <div className="mt-3">
        <p className="mb-1">Don't have an account?</p>
        <Link className="no-underline text-sky-300" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
