import "./App.css";
import RouterConfig from "./RouterConfig";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./layouts/Navbar";
// export const VarContext = React.createContext(null);

function App() {
  const [variable, setVariable] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const containerStyles = {
    "padding-top" : "5rem"
  }

  return (
    <>       
          <Router>
            <Navbar variable={variable} setVariable={setVariable} loggedIn= {loggedIn} setLoggedIn={setLoggedIn}/>
            <div className="container d-flex align-self-stretch" style={containerStyles}>
              <RouterConfig  variable={variable} setVariable={setVariable} loggedIn= {loggedIn} setLoggedIn={setLoggedIn}/>
            </div>
          </Router>
    </>
  );
}

export default App;
