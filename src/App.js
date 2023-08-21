import "./App.css";
import RouterConfig from "./RouterConfig";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./layouts/Navbar";
import ErrorBoundary from "./utils/ErrorBoundary";
// export const VarContext = React.createContext(null);

function App() {
  const [variable, setVariable] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [staff, setStaff] = useState(false);
  const [admin, setAdmin] = useState(0);
  const [active, setActive] = useState("");

  const containerStyles = {
    "paddingTop" : "5rem"
  }

  return (
    <>     
          <Router>
            <Navbar variable={variable} setVariable={setVariable} loggedIn= {loggedIn} setLoggedIn={setLoggedIn} staff={staff} setStaff={setStaff} admin={admin} setAdmin={setAdmin} active={active} setActive={setActive}/>
            <ErrorBoundary>
            <div className="container d-flex align-self-stretch" style={containerStyles}>
              <RouterConfig  variable={variable} setVariable={setVariable} loggedIn= {loggedIn} setLoggedIn={setLoggedIn} staff={staff} setStaff={setStaff} admin={admin} setAdmin={setAdmin} active={active} setActive={setActive}/>
            </div>
            </ErrorBoundary>
          </Router>
    </>
  );
}

export default App;
