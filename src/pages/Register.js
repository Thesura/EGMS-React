import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FetchRequest from "../FetchRequest";

function Register(){
    
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeat, setRepeat] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
  
    const handleUsername = (event) => {
      setUsername(event.target.value);
    }
  
    const handlePassword = (event) => {
      setPassword(event.target.value);
    }

    const handleRepeat = (event) => {
      setRepeat(event.target.value);
    }

    const handlePhone = (event) => {
        setPhone(event.target.value);
      }
    
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }


  
    const handleSubmit = (event) => {
      event.preventDefault();

      if(password === repeat){
        // alert(`Name: ${username}, Pass: ${password}, repeat: ${repeat}, phone: ${phone}, email: ${email}`);
        let data = {username: username, password: password, email: email, phone: phone};
        let url = 'http://localhost:5000/nonstaffusers';

        let response = FetchRequest(url, 'POST', data);
        
        console.log(response);

        alert('Please login with your created account');

        navigate("/login");
      }else{
        alert(`Password and repeat password does not match. Password: ${password}, Repeat Password: ${repeat}`);
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
          <div className="mb-3 form-floating text-body">
            <input type="password" className="form-control" id="repeatPassword" placeholder="Repeat Password" onChange={handleRepeat} required/>
            <label htmlFor="repeatPassword">Repeat Password</label>
          </div>
          <div className="mb-3 form-floating text-body">
            <input type="tel" className="form-control" id="phone" placeholder="Phone" onChange={handlePhone} />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="mb-3 form-floating text-body">
            <input type="email" className="form-control" id="email" placeholder="Email" onChange={handleEmail} required/>
            <label htmlFor="email">Email</label>
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

export default Register;