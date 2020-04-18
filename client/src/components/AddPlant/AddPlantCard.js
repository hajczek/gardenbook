import React from "react";
import AddPlantForm from "./AddPlantForm";
import ExistedPlantsBox from "./ExistedPlantsBox";

const AddPlantCard = () => {
  return (
    <div className="contentUser">
      <div className="content">
        <h2>Dodaj roślinę</h2>
        <AddPlantForm />
        <ExistedPlantsBox />
      </div>
    </div>
  );
};

export default AddPlantCard;
