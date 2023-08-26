import { useEffect } from "react";

function Outages({ active, setActive }) {
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
