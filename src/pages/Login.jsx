import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FetchRequest, FetchRequestToken } from "../utils/FetchRequest";
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
  const [error, setError] = useState("");

  useEffect(() => {
    setActive("Login");
    async function checkToken() {
      const url = "http://localhost:5000/nonstaffusers/login/token";

      const sessionToken = Cookies.get("token");
      console.log(sessionToken);

      if (sessionToken != null) {
        try {
          const response = await FetchRequestToken(url, "POST", sessionToken);

          if (response.auth) {
            setUser(response.user);
            setLoggedIn(true);
            setAdmin(response.admin);
            navigate("/home");
          }
          console.log(response);

        } catch (error) {
          if (error.status === 404) {
            console.log('Resource not found')
          } else if (error.status >= 500) {
            console.log('Server error, try again later')
          } else {
            console.log('Request failed:', error.message)
          }
        }
      }
    }
    checkToken();
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { username, password };
    const url = `http://localhost:3000/${staff ? "staffusers" : "nonstaffusers"
      }/login`;

    try {
      const response = await FetchRequest(url, "POST", data);

      console.log(response);
      if (response.auth) {
        setUser(username);
        setLoggedIn(true);
        setAdmin(response.admin);
        Cookies.set("token", response.token, { expires: 1 });
        navigate("/home");
      } else if (response.inactive) {
        console.log("inactive");
        setError("Account is inactive");
      } else {
        console.log("failed");
        setError("Incorrect Credentials");
      }
    } catch (error) {
      if (error.status === 404) {
          console.log('Resource not found')
          setError("Incorrect Credentials");
        } else if (error.status >= 500) {
          console.log('Server error, try again later')
          setError("Server error, try again later");
        } else {
          console.log('Request failed:', error.message)
          setError("Request failed, please try again later");
        }
    }
      
  };

  return (
    <div className="mt-5">
      <span className="text-danger mb-1">{error}</span>
      <form className="justify-center content-center" onSubmit={handleSubmit}>
        <div className="mb-3 form-floating text-body">
          <input
            type="text"
            className="text-input"
            id="username"
            name="username"
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
            name="password"
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
            name="userType"
            checked={staff}
            onChange={handleStaffCheck}
          />
          <div
            className="relative w-11 h-6 bg-slate-950  peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sky-600 rounded-full peer-checked:after:translate-x-full 
    rtl:peer-checked:after:translate-x-full peer-checked:after:border-sky-100 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-slate-950 
    after:border-sky-600 after:border after:rounded-full after:h-5 after:w-5 peer-checked:after:bg-sky-600 after:transition-all after:duration-150 after:ease-linear"
          ></div>
          <span className="mx-2">Staff Member</span>
        </label>
        <div className="flex justify-center">
          <button type="submit" className="button button-sky">
            Login
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
