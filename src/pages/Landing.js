import { Link } from "react-router-dom";
import styled from "styled-components";
import Breakpoints from "../utils/Breakpoints";

const Container = styled.div`
  padding: 5rem;
  width: 30%;

  ${Breakpoints(
    "width",
    "%",
    [{ 1400: 35 }, { 1200: 40 }, { 992: 55 }, { 768: 70 }, { 576: 80 }],
    "max-width"
  )}

  ${Breakpoints("width", "%", [{ 1400: 30 }], "min-width")}
`;

function Landing() {
  return (
    <Container className="justify-center align-center">
      <div className="">
        <Link className="button button-sky" to="/login">
          Login
        </Link>
        <Link className="button button-sky" to="/register">
          Register
        </Link>
      </div>
    </Container>
  );
}

export default Landing;
