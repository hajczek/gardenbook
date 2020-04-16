import React from "react";
import SearchExistedMaterial from "./SearchExistedMaterial";
import ExistedMaterialsList from "./ExistedMaterialsList";

const ManageMaterialsCard = () => {
  return (
    <div className="contentUser">
      <div className="content">
        <div className="top-box">
          <h2>Zarządzaj materiałami</h2>
          <SearchExistedMaterial />
        </div>
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
