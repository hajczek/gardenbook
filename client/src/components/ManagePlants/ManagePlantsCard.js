import React from "react";
import { NavLink } from "react-router-dom";
import SearchExistedPlant from "./SearchExistedPlant";
import ExistedPlantsList from "./ExistedPlantsList";

const ManagePlantsCard = () => {
  return (
    <div className="contentUser">
      <div className="content">
        <div className="top-box">
          <h2>Zarządzaj roślinami</h2>
          <SearchExistedPlant />
        </div>
        <NavLink
          to="/dodaj-rosline"
          exact={true}
          activeClassName="is-active"
          id="add-plant-link"
          className="plus-link"
        >
          + Dodaj roślinę
        </NavLink>
        <p>
          Zmień nazwę, zdjęcie, ilość, nawóz, dawkę, częstotliwość nawożenia i
          podlewania lub usuń wybrane rośliny.
        </p>
        <ExistedPlantsList />
      </div>
    </div>
  );
};

export default ManagePlantsCard;
