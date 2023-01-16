import Login from "./pages/Login";
import { Navigate } from "react-router-dom";

function AuthGuard({auth, children}) {
    alert(auth?"true":"false");
    if(!auth){
        return <Navigate to="/login"/>
    }else
        return children;
}

export default AuthGuard;