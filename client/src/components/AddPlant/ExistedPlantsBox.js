import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const ExistedPlantsBox = () => {
  const { plants, getPlants, users } = useContext(GlobalContext);

  useEffect(() => {
    getPlants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  return (
    <div className="existed-box">
      <h2>ISTNIEJĄCE ROŚLINY</h2>
      <ol>
        {plants
          .filter((plant) => plant.userId === userId)
          .map((plant) => (
            <li key={plant._id}>
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
