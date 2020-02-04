import React from "react";
import HeaderUser from "../HeaderUser";
import LeftMenuUser from "../LeftMenuUser";
import AlertsBox from "./AlertsBox";
import PlannedWorksBox from "./PlannedWorksBox";
import Footer from "../Footer";

const AlertsCard = () => {
  return (
    <div class="container">
      <HeaderUser />
      <LeftMenuUser />
      <AlertsBox />
      <PlannedWorksBox />
      <Footer />
    </div>
  );
};

export default AlertsCard;
