import React from "react";
import { NavLink } from "react-router-dom";
import ExistedPlantsList from "./ExistedPlantsList";

const ManagePlantsCard = () => {
  return (
    <div className="user-content">
      <div className="content">
        <div className="top-box">
          <h2>Zarządzaj roślinami</h2>
          <NavLink
            to="/dodaj-rosline"
            exact={true}
            activeClassName="is-active"
            id="add-plant-link"
            className="plus-link"
          >
            + Dodaj roślinę
          </NavLink>
        </div>
        <ExistedPlantsList />
      </div>
    </div>
  );
};

export default ManagePlantsCard;
