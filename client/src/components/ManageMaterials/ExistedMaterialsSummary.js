import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ExistedMaterialsSummary = () => {
  const { materials } = useContext(GlobalContext);

  function countValueOfAllMaterials() {
    let valueOfAllMaterials = 0;
    for (let i = 0; i < materials.length; i++) {
      valueOfAllMaterials +=
        materials[i].materialQuant * materials[i].materialPrice;
    }
    return valueOfAllMaterials.toFixed(2);
  }

  return (
    <div className="summaryBox">
      <h3>RAZEM:</h3> Il. materiałów: {materials.length} | Wartość:{" "}
      {countValueOfAllMaterials()} zł
    </div>
  );
};

export default ExistedMaterialsSummary;
