import React from "react";
import HeaderUser from "../User/HeaderUser";
import LeftMenuUser from "../User/LeftMenuUser";
import AddMaterialForm from "./AddMaterialForm";
import ExistedMaterialsBox from "./ExistedMaterialsBox";
import Footer from "../Page/Footer";

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
