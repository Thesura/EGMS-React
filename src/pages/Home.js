import "../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Breakpoints from "../utils/Breakpoints";
import { useContext, useEffect } from "react";
import { ActiveContext, AuthContext } from "../App";

const Container = styled.div``;

const Card = styled.div`
  ${Breakpoints("width", "%", [{ 992: 100 }], "min-width")}
`;

function Home() {
  const [user, setUser, loggedIn, setLoggedIn, staff, setStaff, admin, setAdmin] = useContext(AuthContext);
  const [active, setActive] = useContext(ActiveContext);

  useEffect(() => {
    setActive("Home");
  }, []);

  if (staff) {
    return (
      <Container className="d-flex flex-column flex-lg-row overflow-auto">
        <Card className="card text-bg-success mt-3 mx-5">
          <div className="card-header">
            <h5 className="card-title">Status</h5>
          </div>
          <div className="card-body d-flex flex-column my-3">
            <p className="card-text">
              View the status of electricity availability of each area.
            </p>
            <Link to="/status" className="btn btn-outline-light btn-lg mt-auto">
              Status
            </Link>
          </div>
        </Card>

        <Card className="card text-bg-success mt-3 mx-5">
          <div className="card-header">
            <h5 className="card-title">Outage Reports</h5>
          </div>
          <div className="card-body d-flex flex-column my-3">
            <p className="card-text">View current power outage Reports.</p>
            <Link to="/report" className="btn btn-outline-light btn-lg mt-auto">
              Report
            </Link>
          </div>
        </Card>

        <Card className="card text-bg-success mt-3 mx-5">
          <div className="card-header">
            <h5 className="card-title">Create Schedule</h5>
          </div>
          <div className="card-body d-flex flex-column my-3">
            <p className="card-text">
              Create planned power interruption shcedule entries.
            </p>
            <Link
              to="/schedule"
              className="btn btn-outline-light btn-lg mt-auto"
            >
              Schedule
            </Link>
          </div>
        </Card>

        <Card
          className={`card text-bg-success mt-3 mx-5 ${!admin ? "d-none" : ""}`}
        >
          <div className="card-header">
            <h5 className="card-title">User Management</h5>
          </div>
          <div className="card-body d-flex flex-column my-3">
            <p className="card-text">
              Manage current users and create new users.
            </p>
            <Link to="/report" className="btn btn-outline-light btn-lg mt-auto">
              Manage
            </Link>
          </div>
        </Card>
      </Container>
    );
  } else {
    return (
      <Container className="flex flex-col lg:flex-row h-5/6 lg:h-2/5 ">
        <Card className="menu-card menu-card-sky mt-3 mx-5">
          <div className="menu-card-header menu-card-header-sky">
            <p className="menu-card-title">Status</p>
          </div>
          <div className="flex flex-col h-3/4">
            <p className="menu-card-text">
              View the status of electricity availability of each area.
            </p>
            <Link to="/status" className="button button-sky mx-5 lg:mb-4 h-1/3">
              Status
            </Link>
          </div>
        </Card>

        <Card className="menu-card menu-card-sky mt-3 mx-5">
          <div className="menu-card-header menu-card-header-sky">
            <h5 className="menu-card-title">Report</h5>
          </div>
          <div className="flex flex-col h-3/4">
            <p className="menu-card-text">Report a power outage.</p>
            <Link to="/report" className="button button-sky mx-5 lg:mb-4 h-1/3">
              Report
            </Link>
          </div>
        </Card>

        <Card className="menu-card menu-card-sky mt-3 mx-5">
          <div className="menu-card-header menu-card-header-sky">
            <h5 className="menu-card-title">Schedule</h5>
          </div>
          <div className="flex flex-col h-3/4">
            <p className="menu-card-text">View the planned power interruptions.</p>
            <Link
              to="/schedule"
              className="button button-sky mx-5 lg:mb-4 h-1/3"
            >
              Schedule
            </Link>
          </div>
        </Card>
      </Container>
    );
  }
}

export default Home;
