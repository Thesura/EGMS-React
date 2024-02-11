import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchRequest from "../utils/FetchRequest";
import { ActiveContext, AuthContext } from "../App";

function Schedule() {
  const [user, setUser, loggedIn, setLoggedIn, staff, setStaff, admin, setAdmin] = useContext(AuthContext);
  const [active, setActive] = useContext(ActiveContext);

  const [schedules, setSchedules] = useState();

  useEffect(() => {
    setActive("Schedule");

    const url = "http://localhost:5000/schedule";

    const response = FetchRequest(url, "GET");

    response.then((value) => {
      setSchedules(value.schedules);
      console.log(value.schedules[0]);
      // setID(value.schedules[0].id);
      // setArea(value.schedules[0].area);
      // setStart(value.schedules[0].start);
      // setEnd(value.schedules[0].end);
      // setReason(value.schedules[0].reason);

      // setTableBody(
      // <tr>
      // <td>{area}</td>
      // <td>{start}</td>
      // <td>{end}</td>
      // <td>{reason}</td>
      // </tr>
      // )
    });
  }, []);

  return (
    <div>
      <h1>Schedule</h1>
      <table className="table table-bordered text-light">
        <thead>
          <tr>
            <th scope="col">Area</th>
            <th scope="col">Start</th>
            <th scope="col">End</th>
            <th scope="col">Reason</th>
          </tr>
        </thead>
        <tbody>
          {schedules &&
            schedules.map((schedule) => {
              return (
                <tr>
                  <td>{schedule.area}</td>
                  <td>{schedule.start.replace("T", " ")}</td>
                  <td>{schedule.end.replace("T", " ")}</td>
                  <td>{schedule.reason}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div style={staff ? { display: "Flex" } : { display: "none" }}>
        <Link
          to="/createschedule"
          className="btn btn-outline-light btn-lg mt-auto"
        >
          Create Schedule
        </Link>
      </div>
    </div>
  );
}

export default Schedule;
