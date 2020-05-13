import React from "react";
import "./employeeCard.style.css";
const EmployeeCard = (props) => {
  return (
    <div onClick={props.onClick} className="employee-card">
      <h4>
        {props.employee.firstName} {props.employee.lastName}
      </h4>
      <img src={props.employee.imageUrl} alt="profie" />
    </div>
  );
};

export default EmployeeCard;
