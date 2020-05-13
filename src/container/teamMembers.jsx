import React from "react";
import EmployeeCard from "../components/employeeCard";
import Header from "../components/header";
import "./teamMembers.style.css";
const TeamMembers = (props) => {
  console.log(props);
  let { employees } = { ...props.location.state };
  let { logo } = { ...props.location.state };
  return (
    <div className="team-heading">
      <Header logo={logo} />
      <h1> Our Team </h1>
      <div className="team-members">
        {employees.map((e) => (
          <EmployeeCard employee={e} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
