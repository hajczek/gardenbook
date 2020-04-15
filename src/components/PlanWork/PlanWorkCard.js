import React from "react";
import HeaderUser from "../UserElemCard/HeaderUser";
import LeftMenuUser from "../UserElemCard/LeftMenuUser";
import PlanWorkForm from "./PlanWorkForm";
import ExistedPlannedWorksBox from "./ExistedPlannedWorksBox";
import Footer from "../Page/Footer";

const PlanWorkCard = () => {
  return (
    <div className="contentUser">
      <HeaderUser />
      <LeftMenuUser />
      <div className="content">
        <h2>Zaplanuj pracę</h2>
        <PlanWorkForm />
        <ExistedPlannedWorksBox />
        <Footer />
      </div>
    </div>
  );
};

export default PlanWorkCard;
