import React from "react";
import "./company.style.css";
import { withRouter } from "react-router-dom";
const Company = (props) => {
  console.log(props);
  return (
    <div className="company-tab" onClick={() => props.onClick(props)}>
      <img className="company-logo" src={props.company.logo} alt="logo" />
      <h1>{props.company.name}</h1>
    </div>
  );
};

export default withRouter(Company);
