import React from "react";
import { NavLink } from "react-router-dom";
import ExistedWorksList from "./ExistedWorksList";
import translate from "../../i18n/translate";

const ManageWorksCard = () => {
  return (
    <div className="user-content">
      <div className="content">
        <div className="top-box">
          <h2>{translate("manage-jobs")}</h2>
          <NavLink
            to="/zaplanuj-prace"
            exact={true}
            activeClassName="is-active"
            id="plan-work-link"
            className="plus-link"
          >
            + {translate("plan-work")}
          </NavLink>
        </div>
        <ExistedWorksList />
      </div>
    </div>
  );
};

export default ManageWorksCard;
