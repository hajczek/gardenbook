import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ExistedPlantsSummary = () => {
  const { plants, users } = useContext(GlobalContext);

  const userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  function countNumOfPlants() {
    let numOfPlants = 0;
    for (let i = 0; i < plants.length; i++) {
      if (plants[i].userId === userId) {
        numOfPlants += plants[i].plantQuant;
      }
    }
    return numOfPlants;
  }

  function countValueOfAllPlants() {
    let valueOfAllPlants = 0;
    for (let i = 0; i < plants.length; i++) {
      if (plants[i].userId === userId) {
        valueOfAllPlants += plants[i].plantQuant * plants[i].plantPrice;
      }
    }
    return valueOfAllPlants.toFixed(2);
  }

  function countNumOfTypePlants() {
    let numOfTypePlants = 0;
    for (let i = 0; i < plants.length; i++) {
      if (plants[i].userId === userId) {
        numOfTypePlants += 1;
      }
    }
    return numOfTypePlants;
  }

  return (
    <div className="summaryBox">
      <h3>RAZEM:</h3> Gatunków: {countNumOfTypePlants()} | Sztuk:{" "}
      {countNumOfPlants()} | Wartość: {countValueOfAllPlants()}
    </div>
  );
};

export default ExistedPlantsSummary;
