import React from "react";
import ExistedMaterialsList from "./ExistedMaterialsList";

const ManageMaterialsCard = () => {
  return (
    <div className="contentUser">
      <div className="content">
        <h2>Zarządzaj materiałami</h2>
        <span className="plus-link" id="add-material-link">
          + Dodaj materiał
        </span>
        <p>Zmień nazwę, ilość, cenę, wartość lub usuń wybrane materiały.</p>
        <ExistedMaterialsList />
      </div>
    </div>
  );
};

export default ManageMaterialsCard;
