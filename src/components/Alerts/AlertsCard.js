import React from "react";
import AlertsBox from "./AlertsBox";
import PlannedWorksBox from "./PlannedWorksBox";
import Footer from "../Page/Footer";

const AlertsCard = () => {
  return (
    <div className="contentUser">
      <AlertsBox />
      <PlannedWorksBox />
      <Footer />
    </div>
  );
};

export default AlertsCard;
