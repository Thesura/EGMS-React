import { Link } from "react-router-dom";


function Landing(){

const Styles = {
    "width":"100%",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "textAlign": "center",
    "justifyContent": "center",
    "padding": "20px"
  }

    return(
        <div style={Styles}>
            <Link className="btn btn-primary" to="/login">Login</Link>
            <Link className="mt-4 btn btn-primary" to= "/register">Register</Link>
        </div>
    );

}

export default Landing;