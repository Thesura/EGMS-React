import Login from "./pages/Login";
import Landing from "./pages/Landing";
import { Navigate } from "react-router-dom";

function AuthGuard({auth, children}) {
    if(!auth){
        alert("Please Login to access this resource.");
        return <Navigate to="/"/>
    }else
        return children;
}

export default AuthGuard;