import { useContext, useEffect } from "react";
import { AuthContext } from "../App";

function Outages() {
  const [variable, setVariable, loggedIn, setLoggedIn, staff, setStaff, admin, setAdmin, active, setActive] = useContext(AuthContext);

  useEffect(() => {
    setActive("Outages");
  }, []);

  return (
    <div>
      <h1>Outages</h1>
    </div>
  );
}

export default Outages;
