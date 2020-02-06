import React from "react";
import HeaderUser from "../UserElemCard/HeaderUser";
import LeftMenuUser from "../UserElemCard/LeftMenuUser";
import PlanWorkForm from "./PlanWorkForm";
import PlannedWorksWithAlertsBox from "./PlannedWorksWithAlertsBox";
import Footer from "../Footer";

const PlanWorkCard = () => {
  return (
    <div className="contentUser">
      <HeaderUser />
      <LeftMenuUser />
      <div className="content">
        <h2>Zaplanuj pracę</h2>
        <PlanWorkForm />
        <PlannedWorksWithAlertsBox />
        <Footer />
      </div>
    </div>
  );
};

export default PlanWorkCard;
