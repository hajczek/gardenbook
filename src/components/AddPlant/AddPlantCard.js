import React from "react";
import HeaderUser from "../User/HeaderUser";
import LeftMenuUser from "../User/LeftMenuUser";
import AddPlantForm from "./AddPlantForm";
import ExistedPlantsBox from "./ExistedPlantsBox";
import Footer from "../Page/Footer";

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
