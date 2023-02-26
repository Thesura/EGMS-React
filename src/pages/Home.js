import "../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Breakpoints from "../utils/Breakpoints";

const Container = styled.div`
  ${Breakpoints("widht", "%", [{ 992: 100 }], "min-width")}
`;

function Home(staff, setStaff, admin, setAdmin) {
  if (staff) {
    return (
      <Container className="d-flex flex-column flex-lg-row overflow-auto">
        <div className="card text-bg-primary mt-3 mx-5">
          <div className="card-header">
            <h5 className="card-title">Status</h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              View the status of electricity availability of each area.
            </p>
            <Link to="/status" className="btn btn-outline-light btn-lg mt-5">
              Status
            </Link>
          </div>
        </div>

        <div className="card text-bg-primary mt-3 mx-5">
          <div className="card-header">
            <h5 className="card-title">Outage Reports</h5>
          </div>
          <div className="card-body">
            <p className="card-text">View current power outage Reports.</p>
            <Link to="/report" className="btn btn-outline-light btn-lg mt-5">
              Report
            </Link>
          </div>
        </div>

        <div className="card text-bg-primary mt-3 mx-5">
          <div className="card-header">
            <h5 className="card-title">Create Schedule</h5>
          </div>
          <div className="card-body">
            <p className="card-text">Create planned power interruption shcedule entries.</p>
            <Link to="/schedule" className="btn btn-outline-light btn-lg mt-5">
              Schedule
            </Link>
          </div>
        </div>

        <div className={`card text-bg-primary mt-3 mx-5 ${!admin ? "d-none" : ""}`}>
          <div className="card-header">
            <h5 className="card-title">User Management</h5>
          </div>
          <div className="card-body">
            <p className="card-text">Manage current users and create new users.</p>
            <Link to="/report" className="btn btn-outline-light btn-lg mt-5">
              Report
            </Link>
          </div>
        </div>
      </Container>
    );
  } else {
    return (
      <Container className="d-flex flex-column flex-lg-row overflow-auto">
        <div className="card text-bg-primary mt-3 mx-5">
          <div className="card-header">
            <h5 className="card-title">Status</h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              View the status of electricity availability of each area.
            </p>
            <Link to="/status" className="btn btn-outline-light btn-lg mt-5">
              Status
            </Link>
          </div>
        </div>

        <div className="card text-bg-primary mt-3 mx-5">
          <div className="card-header">
            <h5 className="card-title">Report</h5>
          </div>
          <div className="card-body">
            <p className="card-text">Report a power outage.</p>
            <Link to="/report" className="btn btn-outline-light btn-lg mt-5">
              Report
            </Link>
          </div>
        </div>

        <div className="card text-bg-primary mt-3 mx-5" >
          <div className="card-header">
            <h5 className="card-title">Schedule</h5>
          </div>
          <div className="card-body">
            <p className="card-text">View the planned power interruptions.</p>
            <Link to="/schedule" className="btn btn-outline-light btn-lg mt-5">
              Schedule
            </Link>
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
