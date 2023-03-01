import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FetchRequest from "../FetchRequest";
import { Link } from "react-router-dom";


function CreateSchedule(){
    
    const navigate = useNavigate();

    const [area, setArea] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [reason, setReason] = useState("");
  
    const handleArea = (event) => {
      setArea(event.target.value);
    }
  
    const handleStart = (event) => {
      setStart(event.target.value);
    }

    const handleEnd = (event) => {
      setEnd(event.target.value);
    }

    const handleReason = (event) => {
        setReason(event.target.value);
      }


  
    const handleSubmit = (event) => {
      event.preventDefault();

        // alert(`Name: ${username}, Pass: ${password}, repeat: ${repeat}, phone: ${phone}, email: ${email}`);
        let data = {area: area, start: start.replace("T", " "), end: end.replace("T", " "), reason: reason};
        let url = 'http://localhost:5000/schedule';

        let response = FetchRequest(url, 'POST', data);
        
        console.log(response);

        alert('Planned Interruption entry created.');

        // navigate("/login");
     
      
    }
  
    return (
      <div className="mt-5">
        <form>
          <div className="mb-3 form-floating text-body">
            <input type="text" className="form-control" id="area" placeholder="Area" onChange={handleArea} required/>
            <label htmlFor="username">Area</label>
          </div>
          <div className="mb-3 form-floating text-body">
            <input type="datetime-local" className="form-control" id="start" placeholder="Start Date-Time" onChange={handleStart} required/>
            <label htmlFor="password">Start Date-Time</label>
          </div>
          <div className="mb-3 form-floating text-body">
            <input type="datetime-local" className="form-control" id="end" placeholder="End Date-Time" onChange={handleEnd} required/>
            <label htmlFor="repeatPassword">End Date-Time</label>
          </div>
          <div className="mb-3 form-floating text-body">
            <input type="tel" className="form-control" id="reason" placeholder="Reason" onChange={handleReason} />
            <label htmlFor="phone">Reason</label>
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

export default CreateSchedule;