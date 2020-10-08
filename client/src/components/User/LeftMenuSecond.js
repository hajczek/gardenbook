import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import translate from "../../i18n/translate";

const LeftMenuSecond = () => {
  return (
    <div id="left-menu-second">
      <NavLink
        to="/zaplanuj-prace"
        exact={true}
        activeClassName="is-active"
        id="add-work"
        className="addBtn"
      >
        <div>
          <FontAwesomeIcon icon={faPlus} fixedWidth />
          <span>{translate("add-job")}</span>
        </div>
      </NavLink>
      <NavLink
        to="/dodaj-rosline"
        exact={true}
        activeClassName="is-active"
        id="add-plant"
        className="addBtn"
      >
        <div>
          <FontAwesomeIcon icon={faPlus} fixedWidth />
          <span>{translate("add-plant")}</span>
        </div>
      </NavLink>
      <NavLink
        to="/dodaj-material"
        exact={true}
        activeClassName="is-active"
        id="add-material"
        className="addBtn"
      >
        <div>
          <FontAwesomeIcon icon={faPlus} fixedWidth />
          <span>{translate("add-material")}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default LeftMenuSecond;
