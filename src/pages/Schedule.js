import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchRequest from "../FetchRequest";

function Schedule({staff}){

    const [id, setID] = useState("");
    const [area, setArea] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [reason, setReason] = useState("");
    const [schedules, setSchedules] = useState();
    const[tableBody, setTableBody] = useState("");

    useEffect(() => {
        let url = 'http://localhost:5000/schedule';

        let response = FetchRequest(url, 'GET');

        response.then((value) => {
            // setSchedules(value.schedules);
            console.log(value.schedules[0]);
            setID(value.schedules[0].id);
            setArea(value.schedules[0].area);
            setStart(value.schedules[0].start);
            setEnd(value.schedules[0].end);
            setReason(value.schedules[0].reason);

// setTableBody(
// <tr>
// <td>{area}</td>
// <td>{start}</td>
// <td>{end}</td>
// <td>{reason}</td>
// </tr>
// )
        });



    }, [schedules]);
    
    return(
        <div>
            <h1>Schedules</h1>
            <table class="table table-bordered text-light">
  <thead>
    <tr>
      <th scope="col">Area</th>
      <th scope="col">Start</th>
      <th scope="col">End</th>
      <th scope="col">Reason</th>
    </tr>
  </thead>
  <tbody>
    {tableBody}
  </tbody>
</table>
            <div style={staff ? { display: "Flex" } : { display: "none" }}>
            <Link to="/createschedule" className="btn btn-outline-light btn-lg mt-auto">
              Create Schedule
            </Link>
            </div>
            
        </div>
    );

}

export default Schedule;