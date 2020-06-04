import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { userId } from "../../common/GetUserLoggedId";

const ExistedMaterialsBox = () => {
  const { materials, getMaterials } = useContext(GlobalContext);

  useEffect(() => {
    getMaterials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
