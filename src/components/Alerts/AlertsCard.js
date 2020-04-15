import React from "react";
import AlertsBox from "./AlertsBox";
import ExistedPlannedWorksBox from "../PlanWork/ExistedPlannedWorksBox";
import Footer from "../Page/Footer";

const AlertsCard = () => {
  return (
    <div className="contentUser">
      <AlertsBox />
      <ExistedPlannedWorksBox />
      <Footer />
    </div>
  );
};

export default AlertsCard;
