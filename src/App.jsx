import "./styles/App.css";
import RouterConfig from "./RouterConfig";
import { BrowserRouter as Router } from "react-router-dom";
import React, { createContext, useState } from "react";
import Navbar from "./layouts/Navbar";
import ErrorBoundary from "./utils/ErrorBoundary";

export const AuthContext = createContext();
export const ActiveContext = createContext();

function App() {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [staff, setStaff] = useState(false);
  const [admin, setAdmin] = useState(0);
  const [active, setActive] = useState("Welcome");


  return (
    <>     
          <Router className="items-center justify-center w-screen h-screen">
            <AuthContext.Provider value={[user, setUser, loggedIn, setLoggedIn, staff, setStaff, admin, setAdmin]}>
              <ActiveContext.Provider value={[active, setActive]}>
              <Navbar/>
              <ErrorBoundary>
                <div className="container self-center items-center justify-center">
                  <RouterConfig/>
                </div>
              </ErrorBoundary> 
              </ActiveContext.Provider>
            </AuthContext.Provider>
          </Router>
    </>
  );
}

export default App;
