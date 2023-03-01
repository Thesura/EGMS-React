import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Report from "./pages/Report";
import Status from "./pages/Status";
import Schedule from "./pages/Schedule";
import AuthGuard from "./AuthGuard";
import CreateSchedule from "./pages/CreateSchedule";

function RouterConfig({ variable, setVariable , loggedIn, setLoggedIn, staff, setStaff, admin, setAdmin}){
    return (
        <Routes>
          <Route index element={<Landing/>}></Route>
          <Route path="home" element={loggedIn? <Home  staff={staff} setStaff={setStaff} admin={admin} setAdmin={setAdmin}/> : <Landing/>}></Route>
          <Route path="login" element={<Login variable={variable} setVariable={setVariable} loggedIn= {loggedIn} setLoggedIn={setLoggedIn}  staff={staff} setStaff={setStaff} admin={admin} setAdmin={setAdmin}/>}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="report" element={<AuthGuard auth={loggedIn}><Report/></AuthGuard>}></Route>
          <Route path="status" element={<AuthGuard auth={loggedIn}><Status/></AuthGuard>}></Route>
          <Route path="schedule" element={<AuthGuard auth={loggedIn}><Schedule staff={staff}/></AuthGuard>}></Route>
          <Route path="createschedule" element={<AuthGuard auth={staff}><CreateSchedule/></AuthGuard>}></Route>
        </Routes>
    );
}

export default RouterConfig;