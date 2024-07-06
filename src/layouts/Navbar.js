import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ActiveContext, AuthContext } from "../App";

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
  ] = useContext(AuthContext);

  const [active, setActive] = useContext(ActiveContext);

  const [toggled, setToggled] = useState(false);

  const [theme, setTheme] = useState(false);

  const navToggle = () => {
    setToggled(!toggled);
  };

  useEffect(() => {
    if (loggedIn && staff) setTheme(true);

    if (theme) {
      document.body.classList.remove("bg-sky-950");
      document.body.classList.add("bg-emerald-950");
    } else {
      document.body.classList.remove("bg-emerald-950");
      document.body.classList.add("bg-sky-950");
    }
  }, [theme, loggedIn, staff]);

  const navigate = useNavigate();

  const handleLog = (event) => {
    if (loggedIn) {
      localStorage.removeItem("token");
      setAdmin(0);
      setStaff(false);
      setLoggedIn(false);
      setUser("");
      setActive("");
      setTheme(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    // <>
    //   <nav
    //     className={`navbar fixed-top navbar-expand-lg navbar-dark bg-${theme}`}
    //   >
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div
    //       className="collapse navbar-collapse row"
    //       id="navbarSupportedContent"
    //     >
    //       <ul className="ms-3 navbar-nav me-auto col">
    //         <li
    //           key={"home"}
    //           className="nav-item"
    //           style={loggedIn ? { display: "list-item" } : { display: "none" }}
    //         >
    //           {
    //             <Link className="nav-link active" to="/home">
    //               Home
    //             </Link>
    //           }
    //         </li>
    //         <li
    //           key={"status"}
    //           className="nav-item"
    //           style={loggedIn ? { display: "list-item" } : { display: "none" }}
    //         >
    //           {
    //             <Link className="nav-link active" to="/status">
    //               Status
    //             </Link>
    //           }
    //         </li>
    //         <li
    //           key={"report"}
    //           className="nav-item"
    //           style={loggedIn ? { display: "list-item" } : { display: "none" }}
    //         >
    //           {
    //             <Link className="nav-link active" to="/report">
    //               Report
    //             </Link>
    //           }
    //         </li>
    //         <li
    //           key={"schedule"}
    //           className="nav-item"
    //           style={loggedIn ? { display: "list-item" } : { display: "none" }}
    //         >
    //           {
    //             <Link className="nav-link active" to="/schedule">
    //               Schedule
    //             </Link>
    //           }
    //         </li>
    //         {/* <li className="nav-item dropdown">
    //                         <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                             Dropdown
    //                         </a>
    //                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                             <a className="dropdown-item" href="#">Action</a>
    //                             <a className="dropdown-item" href="#">Another action</a>
    //                             <div className="dropdown-divider"></div>
    //                             <a className="dropdown-item" href="#">Something else here</a>
    //                         </div>
    //                     </li> */}
    //       </ul>

    //       <div className="d-flex justify-content-center col">
    //         <h1>{active}</h1>
    //       </div>

    //       <div className="my-2 ms-auto me-3 d-flex flex-row justify-content-end col">
    //         <a className="navbar-brand me-5">{user}</a>
    //         <button className="btn btn-outline-light" onClick={handleLog}>
    //           {loggedIn ? "Logout" : "Login"}
    //         </button>
    //       </div>
    //     </div>
    //   </nav>
    // </>
    <>
      <div
        className={`fixed top-0 w-screen h-16 flex flex-row ${
          theme ? "bg-emerald-900" : "bg-sky-900"
        } text-gray-300 shadow-lg grid grid-cols-3`}
      >
        <div className="nav-items">
          <div style={loggedIn ? { display: "flex" } : { display: "none" }}>
            <p
              className={`nav-item ${
                theme ? "nav-item-emerald" : "nav-item-sky"
              } flex scale-100 w-auto sm:scale-0 sm:w-0 sm:p-0 transition-all duration-150 ease-linear`}
              onClick={navToggle}
            >
              Menu
            </p>
            <p
              className={`nav-item ${
                theme ? "nav-item-emerald" : "nav-item-sky"
              } flex scale-0 w-0 sm:scale-100 sm:w-auto transition-all duration-150 ease-linear`}
            >
              {
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              }
            </p>
            <p
              className={`nav-item ${
                theme ? "nav-item-emerald" : "nav-item-sky"
              } flex scale-0 w-0 sm:scale-100 sm:w-auto transition-all duration-150 ease-linear`}
            >
              {
                <Link className="nav-link active" to="/status">
                  Status
                </Link>
              }
            </p>
            <p
              className={`nav-item ${
                theme ? "nav-item-emerald" : "nav-item-sky"
              } flex scale-0 w-0 sm:scale-100 sm:w-auto transition-all duration-150 ease-linear`}
            >
              {
                <Link className="nav-link active" to="/report">
                  Report
                </Link>
              }
            </p>
            <p
              className={`nav-item ${
                theme ? "nav-item-emerald" : "nav-item-sky"
              } flex scale-0 w-0 sm:scale-100 sm:w-auto transition-all duration-150 ease-linear`}
            >
              {
                <Link className="nav-link active" to="/schedule">
                  Schedule
                </Link>
              }
            </p>
          </div>
        </div>
        <div
          className={`nav-current ${
            theme ? "nav-current-emerald" : "nav-current-sky"
          } scale-0 md:scale-100 md:w-100 transition-all duration-150 ease-linear`}
        >
          <p className="text-center">{active}</p>
        </div>
        <div className="nav-user me-3">
          <p
            className={`nav-item ${
              theme ? "nav-item-emerald" : "nav-item-sky"
            } h-full`}
            style={loggedIn ? { display: "flex" } : { display: "none" }}
          >
            <Link className="nav-link active" to="/home">
              {user}
            </Link>
          </p>
          <button
            className={`nav-item ${
              theme ? "nav-item-emerald" : "nav-item-sky"
            } h-full`}
            style={
              active === "Login" ? { display: "none" } : { display: "flex" }
            }
            onClick={handleLog}
          >
            {loggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
      <div
        className={`${
          toggled
            ? "scale-100 transition-all duration-150 ease-linear"
            : "scale-0"
        } fixed sm:hidden top-16 w-auto ${
          theme ? "bg-emerald-950" : "bg-sky-950"
        } text-gray-300 shadow-lg`}
      >
        <div className="nav-list">
          <p
            className={`nav-list-item ${
              theme ? "nav-list-item-emerald" : "nav-list-item-sky"
            }`}
          >
            {
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            }
          </p>
          <p
            className={`nav-list-item ${
              theme ? "nav-list-item-emerald" : "nav-list-item-sky"
            }`}
          >
            {
              <Link className="nav-link active" to="/status">
                Status
              </Link>
            }
          </p>
          <p
            className={`nav-list-item ${
              theme ? "nav-list-item-emerald" : "nav-list-item-sky"
            }`}
          >
            {
              <Link className="nav-link active" to="/report">
                Report
              </Link>
            }
          </p>
          <p
            className={`nav-list-item ${
              theme ? "nav-list-item-emerald" : "nav-list-item-sky"
            }`}
          >
            {
              <Link className="nav-link active" to="/schedule">
                Schedule
              </Link>
            }
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
