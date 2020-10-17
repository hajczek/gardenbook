import React from "react";
import AddPlantForm from "./AddPlantForm";
import ExistedPlantsBox from "./ExistedPlantsBox";
import translate from "../../i18n/translate";

const AddPlantCard = () => {
  return (
    <div className="user-content">
      <div className="contentUserFormBox">
        <div className="contentUserForm">
          <h2>{translate("add-plant")}</h2>
          <AddPlantForm />
        </div>
        <ExistedPlantsBox />
      </div>
    </div>
  );
};

export default AddPlantCard;
