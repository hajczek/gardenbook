import React from "react";
import AddPlantForm from "./AddPlantForm";
import ExistedPlantsBox from "./ExistedPlantsBox";

const AddPlantCard = () => {
  return (
    <div className="user-content">
      <div className="contentUserFormBox">
        <div className="contentUserForm">
          <h2>Dodaj roślinę</h2>
          <AddPlantForm />
        </div>
        <ExistedPlantsBox />
      </div>
    </div>
  );
};

export default AddPlantCard;
