import React from "react";
import HeaderUser from "../UserElemCard/HeaderUser";
import LeftMenuUser from "../UserElemCard/LeftMenuUser";
import ExistedMaterialsList from "./ExistedMaterialsList";
import Footer from "../Footer";

const ManageMaterialsCard = () => {
  return (
    <div class="container">
      <HeaderUser />
      <LeftMenuUser />
      <div className="content">
        <h2>Zarządzaj materiałami</h2>
        <span className="plus-link" id="add-material-link">
          + Dodaj materiał
        </span>
        <p>Zmień nazwę, ilość, cenę, wartość lub usuń wybrane materiały.</p>
        <ExistedMaterialsList />
      </div>
      <Footer />
    </div>
  );
};

export default ManageMaterialsCard;
