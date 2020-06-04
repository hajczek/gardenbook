import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import GetUserLoggedId from "../../common/GetUserLoggedId";

const ExistedPlantsSummary = () => {
  const { plants } = useContext(GlobalContext);

  /**
   * Returns number of plants
   *
   * @return {number} represents all plants
   */
  function countNumOfPlants() {
    let numOfPlants = 0;
    for (let i = 0; i < plants.length; i++) {
      if (plants[i].userId === GetUserLoggedId()) {
        numOfPlants += plants[i].plantQuant;
      }
    }
    return numOfPlants;
  }

  /**
   * Returns value of all plants
   *
   * @return {number} represents value of all plants
   */
  function countValueOfAllPlants() {
    let valueOfAllPlants = 0;
    for (let i = 0; i < plants.length; i++) {
      if (plants[i].userId === GetUserLoggedId()) {
        valueOfAllPlants += plants[i].plantQuant * plants[i].plantPrice;
      }
    }
    return valueOfAllPlants.toFixed(2);
  }

  /**
   * Returns number of type of all plants
   *
   * @return {number} represents number of type of all plants
   */
  function countNumOfTypePlants() {
    let numOfTypePlants = 0;
    for (let i = 0; i < plants.length; i++) {
      if (plants[i].userId === GetUserLoggedId()) {
        numOfTypePlants += 1;
      }
    }
    return numOfTypePlants;
  }

  return (
    <div className="summaryBox">
      <h3>RAZEM:</h3> <span>Gatunków: {countNumOfTypePlants()} |</span>
      <span>Sztuk: {countNumOfPlants()} |</span>
      <span>Wartość: {countValueOfAllPlants()}</span>
    </div>
  );
};

export default ExistedPlantsSummary;
