import { Link } from "react-router-dom";

function Navbar({ variable, setVariable, loggedIn, setLoggedIn }) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand ms-3" href="#">{variable}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {<Link className="nav-link" to="/home">Home</Link>}
                        </li>
                        <li className="nav-item" style={loggedIn ? { display: "list-item" } : { display: "none" }}>
                            {<Link className="nav-link" to="/status">Status</Link>}
                        </li>
                        <li className="nav-item" style={loggedIn ? { display: "list-item" } : { display: "none" }}>
                            {<Link className="nav-link" to="/report">Report</Link>} 
                        </li>
                        <li className="nav-item" style={loggedIn ? { display: "list-item" } : { display: "none" }}>
                            {<Link className="nav-link" to="/schedule">Schedule</Link>}
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form row my-2 my-lg-0 ms-auto me-2 justify-content-right">
                        <div className="col"><input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /></div>
                        <div className="col-auto"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></div>
                    </form>
                </div>
            </nav>
        </>
    );

}

export default Navbar;