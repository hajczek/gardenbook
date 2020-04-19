import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ExistedMaterialsBox = () => {
  const { materials } = useContext(GlobalContext);

  return (
    <div className="existed-box">
      <h2>ISTNIEJĄCE MATERIAŁY</h2>
      <ol>
        {materials.map((material) => (
          <li key={material.id}>
            {material.materialName}{" "}
            <span className="quantity">{material.materialQuant}</span>
            <span className="unit">{material.materialUnit}</span> &raquo;
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExistedMaterialsBox;
