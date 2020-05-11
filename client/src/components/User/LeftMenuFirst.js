import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        title="Zamknij"
        onClick={closeLeftMenu}
      />
      <NavLink
        to="/zarzadzaj-pracami"
        title="Zarządzaj pracami"
        exact={true}
        activeClassName="is-active"
        id="works"
        className="menuLeftBtn"
      >
        <FontAwesomeIcon
          icon={faCalendarAlt}
          fixedWidth
          title="Zarządzaj pracami"
        />
      </NavLink>
      <NavLink
        to="/zarzadzaj-roslinami"
        title="Zarządzaj roslinami"
        exact={true}
        activeClassName="is-active"
        id="plants"
        className="menuLeftBtn"
      >
        <FontAwesomeIcon icon={faSpa} fixedWidth title="Rośliny" />
      </NavLink>
      <NavLink
        to="/zarzadzaj-materialami"
        title="Zarządzaj materiałami"
        exact={true}
        activeClassName="is-active"
        id="materials"
        className="menuLeftBtn"
      >
        <FontAwesomeIcon icon={faPen} fixedWidth title="Materiały" />
      </NavLink>

      {/* <a id="plan" href="#" className="menuLeftBtn notActive">
          <FontAwesomeIcon icon={faMap} fixedWidth title="Plan ogrodu" />
        </a>
        <a id="statistic" href="#" className="menuLeftBtn notActive">
          <FontAwesomeIcon icon={faChartLine} fixedWidth title="Statystyki" />
        </a>
        <a id="search" href="#" className="menuLeftBtn notActive">
          <FontAwesomeIcon icon={faEye} fixedWidth title="Znajdź wykonawcę" />
        </a> */}
    </div>
  );
};

export default LeftMenuFirst;
