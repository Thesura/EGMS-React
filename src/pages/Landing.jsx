import { Link } from "react-router-dom";
import styled from "styled-components";
import Breakpoints from "../utils/Breakpoints";
import { useEffect, useContext } from "react";
import { AuthContext } from "../App";
import Cookies from "js-cookie";
import { FetchRequestToken } from "../utils/FetchRequest";
import { useNavigate } from "react-router-dom";

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
  const [
    user,
    setUser,
    loggedIn,
    setLoggedIn,
    staff,
    setStaff,
    admin,
    setAdmin,
  ] = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    

    async function checkToken() {
      const url = "http://localhost:5000/nonstaffusers/login/token";

      const sessionToken = Cookies.get("token");
      console.log(sessionToken);
      if (sessionToken != null) {
        try {
          const response = await FetchRequestToken(url, "POST", sessionToken);

          if (response.auth) {
            setUser(response.user);
            setLoggedIn(true);
            setAdmin(response.admin);
            navigate("/home");
          }
          console.log(response);

        } catch (error) {
          if (error.status === 404) {
            console.log('Resource not found')
          } else if (error.status >= 500) {
            console.log('Server error, try again later')
          } else {
            console.log('Request failed:', error.message)
          }
        }
      }
    }
    checkToken();
  }, [])

  return (
    <Container className="items-center justify-center">
      <div className="">
        <Link className="link-button link-button-sky" to="/login">
          Login
        </Link>
        <Link className="link-button link-button-sky" to="/register">
          Register
        </Link>
      </div>
    </Container>
  );
}

export default Landing;
