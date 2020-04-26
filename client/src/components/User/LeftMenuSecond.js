import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const LeftMenuSecond = () => {
  return (
    <div id="left-menu-second">
      <NavLink
        to="/zaplanuj-prace"
        title="Zaplanuj pracę"
        exact={true}
        activeClassName="is-active"
        id="add-work"
        className="addBtn"
      >
        <FontAwesomeIcon icon={faPlus} fixedWidth />
      </NavLink>
      <NavLink
        to="/dodaj-rosline"
        title="Dodaj roślinę"
        exact={true}
        activeClassName="is-active"
        id="add-plant"
        className="addBtn"
      >
        <FontAwesomeIcon icon={faPlus} fixedWidth />
      </NavLink>
      <NavLink
        to="/dodaj-material"
        title="Dodaj materiał"
        exact={true}
        activeClassName="is-active"
        id="add-material"
        className="addBtn"
      >
        <FontAwesomeIcon icon={faPlus} fixedWidth />
      </NavLink>
    </div>
  );
};

export default LeftMenuSecond;
