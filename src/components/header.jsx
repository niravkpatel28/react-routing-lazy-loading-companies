import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.style.css";
const Header = (props) => (
  <header className="header-navigation">
    <nav>
      <img src={props.logo} alt="logo" className="header-logo" />
      <Link to="/"> Home </Link>
      <Link to="/raw"> Raw </Link>
      <Link to="/surfboard"> Surfboard </Link>
      <Link to="/contentstack"> Contentstack </Link>
      {/* <Link
        to={{
          pathname: `${props.match.url}/employeelist`,
        }}
      >
        {" "}
        Employee List{" "}
      </Link> */}
    </nav>
  </header>
);

export default withRouter(Header);
