import React from "react";
import SearchExistedPlant from "./SearchExistedPlant";
import ExistedPlantsList from "./ExistedPlantsList";

const ManagePlantsCard = () => {
  return (
    <div className="contentUser">
      <div className="content">
        <h2>Zarządzaj roślinami</h2>
        <SearchExistedPlant />
        <span className="plus-link" id="add-plant-link">
          + Dodaj roślinę
        </span>
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
