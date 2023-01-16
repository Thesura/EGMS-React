import "./App.css";
import RouterConfig from "./RouterConfig";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./layouts/Navbar";
// export const VarContext = React.createContext(null);

function App() {
  const [variable, setVariable] = useState("Variable");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
        {/* <VarContext.Provider value={{variable, setVar}}> */}        
          <Router>
            <Navbar variable={variable} setVariable={setVariable} loggedIn= {loggedIn} setLoggedIn={setLoggedIn}/>
            <div className="container">
              <h1>{variable}</h1>
              <h1>{loggedIn ? "true" : "false"}</h1>
              <RouterConfig  variable={variable} setVariable={setVariable} loggedIn= {loggedIn} setLoggedIn={setLoggedIn}/>
            </div>
          </Router>
        {/* </VarContext.Provider> */}
    </>
  );
}

export default App;
