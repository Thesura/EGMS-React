import { Link } from "react-router-dom";

function Navbar({ variable, setVariable, loggedIn, setLoggedIn }) {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="ms-3 navbar-nav">
            <li className="nav-item active">
              {
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              }
            </li>
            <li
              className="nav-item"
              style={loggedIn ? { display: "list-item" } : { display: "none" }}
            >
              {
                <Link className="nav-link active" to="/status">
                  Status
                </Link>
              }
            </li>
            <li
              className="nav-item"
              style={loggedIn ? { display: "list-item" } : { display: "none" }}
            >
              {
                <Link className="nav-link active" to="/report">
                  Report
                </Link>
              }
            </li>
            <li
              className="nav-item"
              style={loggedIn ? { display: "list-item" } : { display: "none" }}
            >
              {
                <Link className="nav-link active" to="/schedule">
                  Schedule
                </Link>
              }
            </li>
            {/* <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}
          </ul>
          <div className="my-2 ms-auto me-2 d-flex flex-row">
            <a className="navbar-brand">
              {variable}
            </a>
            <button className="btn btn-outline-light">
              {loggedIn? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
