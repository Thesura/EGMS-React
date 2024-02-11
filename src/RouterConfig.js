import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Report from "./pages/Report";
import Status from "./pages/Status";
import Schedule from "./pages/Schedule";
import AuthGuard from "./utils/AuthGuard";
import CreateSchedule from "./pages/CreateSchedule";
import { useContext } from "react";
import { AuthContext } from "./App";
import UserManagement from "./pages/UserManagement";

function RouterConfig(){

  const [user, setUser, loggedIn, setLoggedIn, staff, setStaff, admin, setAdmin] = useContext(AuthContext)

    return (
        <Routes>
          <Route index element={<Landing/>}></Route>
          <Route path="home" element={loggedIn? <Home/> : <Landing/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="report" element={<AuthGuard auth={loggedIn}><Report/></AuthGuard>}></Route>
          <Route path="status" element={<AuthGuard auth={loggedIn}><Status/></AuthGuard>}></Route>
          <Route path="schedule" element={<AuthGuard auth={loggedIn}><Schedule/></AuthGuard>}></Route>
          <Route path="createschedule" element={<AuthGuard auth={staff}><CreateSchedule/></AuthGuard>}></Route>
          <Route path="user" element={<UserManagement/>}></Route>
        </Routes>
    );
}

export default RouterConfig;