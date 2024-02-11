import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

function Navbar() {
  const [
    user, 
    setUser, 
    loggedIn,
    setLoggedIn,
    staff,
    setStaff,
    admin,
    setAdmin,
    active,
    setActive
  ] = useContext(AuthContext);

  const theme = staff && loggedIn ? "success" : "primary";
  const navigate = useNavigate();

  const handleLog = (event) => {
    if (loggedIn) {
      localStorage.removeItem("token");
      setAdmin(0);
      setStaff(false);
      setLoggedIn(false);
      setUser("");
      setActive("");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-dark bg-${theme}`}
      >
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
        <div
          className="collapse navbar-collapse row"
          id="navbarSupportedContent"
        >
          <ul className="ms-3 navbar-nav me-auto col">
            <li
              key={"home"}
              className="nav-item"
              style={loggedIn ? { display: "list-item" } : { display: "none" }}
            >
              {
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              }
            </li>
            <li
              key={"status"}
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
              key={"report"}
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
              key={"schedule"}
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

          <div className="d-flex justify-content-center col">
            <h1>{active}</h1>
          </div>

          <div className="my-2 ms-auto me-3 d-flex flex-row justify-content-end col">
            <a className="navbar-brand me-5">{user}</a>
            <button className="btn btn-outline-light" onClick={handleLog}>
              {loggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
