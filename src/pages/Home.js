import "../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Breakpoints from "../utils/Breakpoints";


const Container = styled.div`
    ${'' /* ${Breakpoints("padding-top", "rem", [ {510: 13} ], "max-width")} */}
`

function Home() {
  return (
    <Container className="d-flex flex-column flex-lg-row overflow-auto">

      <div class="card text-bg-primary mt-3 mx-5">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/status" className="btn btn-outline-light btn-lg mt-5">
            Status
          </Link>
        </div>
      </div>

      <div class="card text-bg-primary mt-3 mx-5">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/report" className="btn btn-outline-light btn-lg mt-5">
            Report
          </Link>
        </div>
      </div>

      <div class="card text-bg-primary mt-3 mx-5">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/schedule" className="btn btn-outline-light btn-lg mt-5">
            Schedule
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Home;
