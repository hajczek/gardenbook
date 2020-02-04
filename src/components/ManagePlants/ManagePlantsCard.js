import React from "react";
import HeaderUser from "../UserElemCard/HeaderUser";
import LeftMenuUser from "../UserElemCard/LeftMenuUser";
import ExistedPlantsList from "./ExistedPlantsList";
import Footer from "../Footer";

const ManagePlantsCard = () => {
  return (
    <div class="container">
      <HeaderUser />
      <LeftMenuUser />
      <div className="content">
        <h2>Zarządzaj roślinami</h2>
        <span className="plus-link" id="add-plant-link">
          + Dodaj roślinę
        </span>
        <p>
          Zmień nazwę, zdjęcie, ilość, nawóz, dawkę, częstotliwość nawożenia i
          podlewania lub usuń wybrane rośliny.
        </p>
        <ExistedPlantsList />
      </div>
      <Footer />
    </div>
  );
};

export default ManagePlantsCard;
