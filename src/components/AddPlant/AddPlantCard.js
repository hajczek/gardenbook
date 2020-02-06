import React from "react";
import HeaderUser from "../UserElemCard/HeaderUser";
import LeftMenuUser from "../UserElemCard/LeftMenuUser";
import AddPlantForm from "./AddPlantForm";
import ExistedPlantsBox from "./ExistedPlantsBox";
import Footer from "../Footer";

const AddPlantCard = () => {
  return (
    <div className="contentUser">
      <HeaderUser />
      <LeftMenuUser />
      <div className="content">
        <h2>Dodaj roślinę</h2>
        <AddPlantForm />
        <ExistedPlantsBox />
      </div>
      <Footer />
    </div>
  );
};

export default AddPlantCard;
