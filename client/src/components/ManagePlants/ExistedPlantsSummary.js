import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ExistedPlantsSummary = () => {
  const { plants } = useContext(GlobalContext);

  function countNumOfPlants() {
    let numOfPlants = 0;
    for (let i = 0; i < plants.length; i++) {
      numOfPlants += plants[i].plantQuant;
    }
    return numOfPlants;
  }

  function countValueOfAllPlants() {
    let valueOfAllPlants = 0;
    for (let i = 0; i < plants.length; i++) {
      valueOfAllPlants += plants[i].plantQuant * plants[i].plantPrice;
    }
    return valueOfAllPlants.toFixed(2);
  }

  return (
    <div className="summaryBox">
      <h3>RAZEM:</h3> Gatunków: {plants.length} | Sztuk: {countNumOfPlants()} |
      Wartość: {countValueOfAllPlants()}
    </div>
  );
};

export default ExistedPlantsSummary;
