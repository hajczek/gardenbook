import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ExistedPlantsBox = () => {
  const { plants } = useContext(GlobalContext);

  return (
    <div className="existed-box">
      <h2>ISTNIEJĄCE ROŚLINY</h2>
      <ol>
        {plants.map((plant) => (
          <li key={plant.id}>
            <a href="#">
              {plant.plantName}
              <span className="quantity">{plant.plantQuant}</span> szt. &raquo;
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExistedPlantsBox;
