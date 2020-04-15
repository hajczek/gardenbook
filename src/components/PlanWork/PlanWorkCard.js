import React from "react";
import PlanWorkForm from "./PlanWorkForm";
import ExistedPlannedWorksBox from "./ExistedPlannedWorksBox";

const PlanWorkCard = () => {
  return (
    <div className="contentUser">
      <div className="content">
        <h2>Zaplanuj pracę</h2>
        <PlanWorkForm />
        <ExistedPlannedWorksBox />
      </div>
    </div>
  );
};

export default PlanWorkCard;
