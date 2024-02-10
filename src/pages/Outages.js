import { useContext, useEffect } from "react";
import { ActiveContext } from "../App";

function Outages() {
  const [active, setActive] = useContext(ActiveContext);

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
