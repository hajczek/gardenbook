import React from "react";
import { NavLink } from "react-router-dom";
import ExistedMaterialsList from "./ExistedMaterialsList";
import translate from "../../i18n/translate";

const ManageMaterialsCard = () => {
  return (
    <div className="user-content">
      <div className="content">
        <div className="top-box">
          <h2>{translate("manage-materials")}</h2>
          <NavLink
            to="/dodaj-material"
            exact={true}
            className="plus-link"
            activeClassName="is-active"
            id="add-material-link"
          >
            + {translate("add-material")}
          </NavLink>
        </div>
        <ExistedMaterialsList />
      </div>
    </div>
  );
};

export default ManageMaterialsCard;
