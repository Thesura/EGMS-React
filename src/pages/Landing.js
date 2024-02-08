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
    <Container className="border border-3 border-primary rounded d-flex align-items-center flex-column align-self-center my-auto">
      <h1 className="pb-5">Welcome!</h1>
      <div className="d-grid g-col-6">
        <Link className="btn btn-primary btn-lg px-5" to="/login">
          Login
        </Link>
        <Link className="mt-4 btn btn-primary btn-lg px-5" to="/register">
          Register
        </Link>
      </div>
    </Container>
  );
}

export default Landing;
