import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import translate from "../../i18n/translate";
import {
  faSpa,
  faPen,
  faCalendarAlt,
  faMap,
  faChartLine,
  faEye,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const LeftMenuFirst = (props) => {
  function closeLeftMenu(e) {
    document.getElementById("left-menu").style.display = "none";
    document.querySelector(".displayMenu").style.display = "flex";

    e.preventDefault();
  }

  return (
    <div id="left-menu-first">
      <FontAwesomeIcon
        className="closeMenu"
        icon={faTimes}
        fixedWidth
        onClick={closeLeftMenu}
      />
      <NavLink
        to="/zarzadzaj-pracami"
        exact={true}
        activeClassName="is-active"
        id="works"
        className="menuLeftBtn"
      >
        <FontAwesomeIcon icon={faCalendarAlt} fixedWidth />
        <span>{translate("manage-jobs")}</span>
      </NavLink>
      <NavLink
        to="/zarzadzaj-roslinami"
        exact={true}
        activeClassName="is-active"
        id="plants"
        className="menuLeftBtn"
      >
        <FontAwesomeIcon icon={faSpa} fixedWidth />
        <span>{translate("manage-plants")}</span>
      </NavLink>
      <NavLink
        to="/zarzadzaj-materialami"
        exact={true}
        activeClassName="is-active"
        id="materials"
        className="menuLeftBtn"
      >
        <FontAwesomeIcon icon={faPen} fixedWidth />
        <span>{translate("manage-materials")}</span>
      </NavLink>

      <a id="plan" href="#" className="menuLeftBtn notActive">
        <FontAwesomeIcon icon={faMap} fixedWidth />
        <span>{translate("garden-plan")}</span>
      </a>
      <a id="statistic" href="#" className="menuLeftBtn notActive">
        <FontAwesomeIcon icon={faChartLine} fixedWidth />
        <span>{translate("statistic-term")}</span>
      </a>
      <a id="search" href="#" className="menuLeftBtn notActive">
        <FontAwesomeIcon icon={faEye} fixedWidth />
        <span>{translate("find-contractor")}</span>
      </a>
    </div>
  );
};

export default LeftMenuFirst;
