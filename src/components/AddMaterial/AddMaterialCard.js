import React from "react";
import HeaderUser from "../UserElemCard/HeaderUser";
import LeftMenuUser from "../UserElemCard/LeftMenuUser";
import AddMaterialForm from "./AddMaterialForm";
import ExistedMaterialsBox from "./ExistedMaterialsBox";
import Footer from "../Footer";

const AddMaterialCard = () => {
  return (
    <div className="contentUser">
      <HeaderUser />
      <LeftMenuUser />
      <div className="content">
        <h2>Dodaj materiał</h2>
        <AddMaterialForm />
        <ExistedMaterialsBox />
      </div>
      <Footer />
    </div>
  );
};

export default AddMaterialCard;
