import "../App.css";
import { Link } from "react-router-dom";

function Home(){
    return (
        <div className="container">
            <h1>Welcome!</h1>
            <Link to="/status" className="btn btn-primary mt-5">Status</Link>
            <Link to="/report" className="btn btn-primary mt-5">Report</Link>
            <Link to="/schedule" className="btn btn-primary mt-5">Schedule</Link>
        </div>
    );
}

export default Home;