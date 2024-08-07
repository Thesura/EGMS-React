import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FetchRequest from "../utils/FetchRequest";
import { ActiveContext } from "../App";

function Register() {
  const [active, setActive] = useContext(ActiveContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setActive("Register");
  }, []);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeat = (event) => {
    setRepeat(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === repeat) {
      // alert(`Name: ${username}, Pass: ${password}, repeat: ${repeat}, phone: ${phone}, email: ${email}`);
      const data = { username, password, email, phone };
      const url = "http://localhost:5000/nonstaffusers";

      const response = FetchRequest(url, "POST", data);

      console.log(response);

      alert("Please login with your created account");

      navigate("/login");
    } else {
      alert(
        `Password and repeat password does not match. Password: ${password}, Repeat Password: ${repeat}`
      );
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
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
        <div className="mb-3 text-body">
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
        <div className="mb-3 text-body">
          <input
            type="password"
            className="text-input"
            id="repeatPassword"
            placeholder="Repeat Password"
            onChange={handleRepeat}
            required
          />
          {/* <label htmlFor="repeatPassword">Repeat Password</label> */}
        </div>
        <div className="mb-3 text-body">
          <input
            type="tel"
            className="text-input"
            id="phone"
            placeholder="Phone"
            onChange={handlePhone}
          />
          {/* <label htmlFor="phone">Phone</label> */}
        </div>
        <div className="mb-3 text-body">
          <input
            type="email"
            className="text-input"
            id="email"
            placeholder="Email"
            onChange={handleEmail}
            required
          />
          {/* <label htmlFor="email">Email</label> */}
        </div>
        <div className="flex justify-center">
          <button className="button button-sky" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      <div className="">
        <p className="">Already have an account?</p>
        <Link className="text-sky-300 text-decoration-none " to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
