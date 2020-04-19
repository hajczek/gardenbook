import React from "react";
import PlanWorkForm from "./PlanWorkForm";
import ExistedPlannedWorksBox from "./ExistedPlannedWorksBox";

const PlanWorkCard = () => {
  return (
    <div className="contentUser">
      <div className="contentUserFormBox">
        <div className="contentUserForm">
          <h2>Zaplanuj pracę</h2>
          <PlanWorkForm />
        </div>
        <ExistedPlannedWorksBox />
      </div>
    </div>
  );
};

export default PlanWorkCard;
