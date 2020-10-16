import React from "react";
import PlanWorkForm from "./PlanWorkForm";
import ExistedPlannedWorksBox from "./ExistedPlannedWorksBox";
import translate from "../../i18n/translate";

const PlanWorkCard = () => {
  return (
    <div className="user-content">
      <div className="contentUserFormBox">
        <div className="contentUserForm">
          <h2>{translate("plan-work")}</h2>
          <PlanWorkForm />
        </div>
        <ExistedPlannedWorksBox />
      </div>
    </div>
  );
};

export default PlanWorkCard;
