import styled from "styled-components";
import Breakpoints from "../utils/Breakpoints";
import { Link } from "react-router-dom";



const Card = styled.div`
  ${Breakpoints("width", "%", [{ 992: 100 }], "min-width")}
`;

export function MenuCard({cardTitle, cardText, link, linkText}) {

    return(
        <Card className="menu-card menu-card-sky mt-3 mx-5">
          <div className="menu-card-header menu-card-header-sky">
            <p className="menu-card-title">{cardTitle}</p>
          </div>
          <div className="flex flex-col h-3/4">
            <p className="menu-card-text">
              {cardText}
            </p>
            <Link to={link} className="button button-sky mx-5 h-1/3 lg:mb-10 lg:h-1/4">
              {linkText}
            </Link>
          </div>
        </Card>
    )
}

export function StaffMenuCard({cardTitle, cardText, link, linkText}) {

    return(
        <Card className="menu-card menu-card-emerald mt-3 mx-5">
          <div className="menu-card-header menu-card-header-emerald">
            <p className="menu-card-title">{cardTitle}</p>
          </div>
          <div className="flex flex-col h-3/4">
            <p className="menu-card-text">
              {cardText}
            </p>
            <Link to={link} className="button button-emerald mx-5 h-1/3 lg:mb-10 lg:h-1/4">
              {linkText}
            </Link>
          </div>
        </Card>
    )
}