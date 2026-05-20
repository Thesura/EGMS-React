import "../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Breakpoints from "../utils/Breakpoints";
import { useContext, useEffect } from "react";
import { ActiveContext, AuthContext } from "../App";
import { MenuCard, StaffMenuCard } from "../layouts/MenuCard";

const Container = styled.div``;

const Card = styled.div`
  ${Breakpoints("width", "%", [{ 992: 100 }], "min-width")}
`;

function Home() {
  const [user, setUser, loggedIn, setLoggedIn, staff, setStaff, admin, setAdmin] = useContext(AuthContext);
  const [active, setActive] = useContext(ActiveContext);

  useEffect(() => {
    setActive("Home");
  }, []);

  if (staff) {
    return (
      <Container className="flex flex-col lg:flex-row h-5/6 lg:h-1/2">
        <StaffMenuCard cardTitle = {"Status"} cardText = {"View the status of electricity availability of each area."} link = {"/status"} linkText = {"Status"} />
        <StaffMenuCard cardTitle = {"Outage Reports"} cardText = {"View current power outage Reports."} link = {"/report"} linkText = {"Reports"} />
        <StaffMenuCard cardTitle = {"Create Schedule"} cardText = {"Create planned power interruption shcedule entries."} link = {"/schedule"} linkText = {"Schedule"} />
        <StaffMenuCard cardTitle = {"User Management"} cardText = {"Manage current users and create new users."} link = {"/usermanagement"} linkText = {"Manage"} />
      </Container>
    );
  } else {
    return (
      <Container className="flex flex-col lg:flex-row h-5/6 lg:h-1/2">
        <MenuCard cardTitle = {"Status"} cardText = {"View the status of electricity availability of each area."} link = {"/status"} linkText = {"Status"} />
        <MenuCard cardTitle = {"Report"} cardText = {"Report a power outage."} link = {"/report"} linkText = {"Report"} />
        <MenuCard cardTitle = {"Schedule"} cardText = {"View the planned power interruptions."} link = {"/schedule"} linkText = {"Schedule"} />
      </Container>
    );
  }
}

export default Home;
