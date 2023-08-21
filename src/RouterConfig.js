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

function RouterConfig({ variable, setVariable , loggedIn, setLoggedIn, staff, setStaff, admin, setAdmin, active, setActive}){
    return (
        <Routes>
          <Route index element={<Landing/>}></Route>
          <Route path="home" element={loggedIn? <Home  staff={staff} setStaff={setStaff} admin={admin} setAdmin={setAdmin} active={active} setActive={setActive}/> : <Landing/>}></Route>
          <Route path="login" element={<Login variable={variable} setVariable={setVariable} loggedIn= {loggedIn} setLoggedIn={setLoggedIn}  staff={staff} setStaff={setStaff} admin={admin} setAdmin={setAdmin} active={active} setActive={setActive}/>}></Route>
          <Route path="register" element={<Register active={active} setActive={setActive}/>}></Route>
          <Route path="report" element={<AuthGuard auth={loggedIn}><Report active={active} setActive={setActive}/></AuthGuard>}></Route>
          <Route path="status" element={<AuthGuard auth={loggedIn}><Status active={active} setActive={setActive}/></AuthGuard>}></Route>
          <Route path="schedule" element={<AuthGuard auth={loggedIn}><Schedule staff={staff} active={active} setActive={setActive}/></AuthGuard>}></Route>
          <Route path="createschedule" element={<AuthGuard auth={staff}><CreateSchedule active={active} setActive={setActive}/></AuthGuard>}></Route>
        </Routes>
    );
}

export default RouterConfig;