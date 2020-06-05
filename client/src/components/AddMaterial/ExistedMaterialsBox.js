import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const ExistedMaterialsBox = () => {
  const { materials, getMaterials, users } = useContext(GlobalContext);

  useEffect(() => {
    getMaterials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  return (
    <div className="existed-box">
      <h2>ISTNIEJĄCE MATERIAŁY</h2>
      <ol>
        {materials
          .filter((material) => material.userId === userId)
          .map((material) => (
            <li key={material._id}>
              <NavLink
                to="/zarzadzaj-materialami"
                title="Zarządzaj materiałami"
                exact={true}
                activeClassName="is-active"
                id="materials"
                className="greenText"
              >
                {material.materialName}: {material.materialQuant}{" "}
                {material.materialUnit} &raquo;
              </NavLink>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default ExistedMaterialsBox;
