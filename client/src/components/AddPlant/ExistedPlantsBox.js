import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const ExistedPlantsBox = () => {
  const { plants } = useContext(GlobalContext);

  return (
    <div className="existed-box">
      <h2>ISTNIEJĄCE ROŚLINY</h2>
      <ol>
        {plants.map((plant) => (
          <li key={plant.id}>
            <NavLink
              to="/zarzadzaj-roslinami"
              title="Zarządzaj roslinami"
              exact={true}
              activeClassName="is-active"
              id="plants"
              className="greenText"
            >
              {plant.plantName}: {plant.plantQuant} szt. &raquo;
            </NavLink>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExistedPlantsBox;
