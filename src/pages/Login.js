import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FetchRequest from "../FetchRequest";
import "./Login.css";

function Login({ variable, setVariable, loggedIn, setLoggedIn }) {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [staff, setStaff] = useState(false);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleStaffCheck = (event) => {
    setStaff(!staff);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setVariable(username);
    setLoggedIn(true);
    // alert(`Name: ${username}, Pass: ${password}, Staff: ${staff}, Context: ${variable}`);
    // navigate("/home");

    if(staff){
      alert("staff");
    }else{
        console.log(username);
        let data = {username: username, password: password};
        let url = 'http://localhost:5000/nonstaffusers/login';

        let response = FetchRequest(url, 'POST', data);
        
        response.then(value => {
          if(value.auth){
            navigate("/home");
          }else{
           console.log('failed');
           alert("Incorrect Credentials")
          }
        });
    }
  }

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3 form-floating text-body">
          <input type="text" className="form-control" id="username" placeholder="Username" onChange={handleUsername} required/>
          <label htmlFor="username">Username</label>
        </div>
        <div className="mb-3 form-floating text-body">
          <input type="password" className="form-control" id="password" placeholder="Password" onChange={handlePassword} required/>
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
    </div>
  );
}

export default Login;
