import React from "react";
import AlertsBox from "./AlertsBox";
import ExistedPlannedWorksBox from "../PlanWork/ExistedPlannedWorksBox";

const AlertsCard = () => {
  return (
    <div className="contentUser">
      <AlertsBox />
      <ExistedPlannedWorksBox />
    </div>
  );
};

export default AlertsCard;
