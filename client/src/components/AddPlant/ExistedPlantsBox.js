import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { useIntl } from "react-intl";
import translate from "../../i18n/translate";

const ExistedPlantsBox = () => {
  const { plants, getPlants, users } = useContext(GlobalContext);
  const intl = useIntl();

  useEffect(() => {
    getPlants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  return (
    <div className="existed-box">
      <h2>{translate("existed-plants")}</h2>
      <ol>
        {plants
          .filter((plant) => plant.userId === userId)
          .map((plant) => (
            <li key={plant._id}>
              <NavLink
                to="/zarzadzaj-roslinami"
                title={intl.formatMessage({ id: "manage-plants" })}
                exact={true}
                activeClassName="is-active"
                id="plants"
                className="greenText"
              >
                {plant.plantName}: {plant.plantQuant} {translate("pcs-term")}{" "}
                &raquo;
              </NavLink>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default ExistedPlantsBox;
