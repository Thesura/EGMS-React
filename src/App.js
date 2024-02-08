import "./App.css";
import RouterConfig from "./RouterConfig";
import { BrowserRouter as Router } from "react-router-dom";
import React, { createContext, useState } from "react";
import Navbar from "./layouts/Navbar";
import ErrorBoundary from "./utils/ErrorBoundary";

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState("");
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
            <AuthContext.Provider value={[user, setUser, loggedIn, setLoggedIn, staff, setStaff, admin, setAdmin, active, setActive]}>
              <Navbar/>
              <ErrorBoundary>
                <div className="container d-flex align-self-stretch" style={containerStyles}>
                  <RouterConfig/>
                </div>
              </ErrorBoundary> 
            </AuthContext.Provider>
          </Router>
    </>
  );
}

export default App;
