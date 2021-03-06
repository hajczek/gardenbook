import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import translate from "../../i18n/translate";

const ExistedMaterialsSummary = () => {
  const { materials, users } = useContext(GlobalContext);

  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

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
      <h3>{translate("all-term")}:</h3>
      <span>
        {translate("quant-mat")}: {countNumOfMaterials()} |
      </span>
      <span>
        {translate("value-term")}: {countValueOfAllMaterials()}{" "}
        {translate("currency-sign")}
      </span>
    </div>
  );
};

export default ExistedMaterialsSummary;
