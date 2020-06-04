import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { userId } from "../../common/GetUserLoggedId";

const ExistedMaterialsSummary = () => {
  const { materials } = useContext(GlobalContext);

  /**
   * Returns value of all materials
   *
   * @return {number} represents value of all materials
   */
  function countValueOfAllMaterials() {
    let valueOfAllMaterials = 0;
    for (let i = 0; i < materials.length; i++) {
      if (materials[i].userId === userId) {
        valueOfAllMaterials +=
          materials[i].materialQuant * materials[i].materialPrice;
      }
    }
    return valueOfAllMaterials.toFixed(2);
  }

  /**
   * Returns number of all materials
   *
   * @return {number} represents all materials
   */
  function countNumOfMaterials() {
    let numOfMaterials = 0;
    for (let i = 0; i < materials.length; i++) {
      if (materials[i].userId === userId) {
        numOfMaterials += 1;
      }
    }
    return numOfMaterials;
  }

  return (
    <div className="summaryBox">
      <h3>RAZEM:</h3>
      <span>Il. materiałów: {countNumOfMaterials()} |</span>
      <span>Wartość: {countValueOfAllMaterials()} zł</span>
    </div>
  );
};

export default ExistedMaterialsSummary;
