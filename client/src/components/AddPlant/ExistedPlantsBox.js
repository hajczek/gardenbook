import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { userId } from "../../common/GetUserLoggedId";

const ExistedPlantsBox = () => {
  const { plants, getPlants } = useContext(GlobalContext);

  useEffect(() => {
    getPlants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="existed-box">
      <h2>ISTNIEJĄCE ROŚLINY</h2>
      <ol>
        {plants
          .filter((plant) => plant.userId === userId)
          .map((plant) => (
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
