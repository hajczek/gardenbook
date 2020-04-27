import React from "react";
import { NavLink } from "react-router-dom";
import ExistedMaterialsList from "./ExistedMaterialsList";

const ManageMaterialsCard = () => {
  return (
    <div className="contentUser">
      <div className="content">
        <div className="top-box">
          <h2>Zarządzaj materiałami</h2>
        </div>
        <NavLink
          to="/dodaj-material"
          exact={true}
          className="plus-link"
          activeClassName="is-active"
          id="add-material-link"
        >
          + Dodaj materiał
        </NavLink>
        <p>Zmień nazwę, ilość, cenę, wartość lub usuń wybrane materiały.</p>
        <ExistedMaterialsList />
      </div>
    </div>
  );
};

export default ManageMaterialsCard;
