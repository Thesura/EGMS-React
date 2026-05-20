import { Navigate } from "react-router-dom";

function AuthGuard({auth, children}) {
    if(!auth){
        alert("Please Login with required access rights to access this resource.");
        return <Navigate to="/home"/>
    }else
        return children;
}

export default AuthGuard;