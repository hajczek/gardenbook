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

const LeftMenuUser = () => {
  function closeLeftMenu(e) {
    document.getElementById("left-menu").style.display = "none";
    document.querySelector(".displayMenu").style.display = "flex";

    e.preventDefault();
  }

  return (
    <nav id="left-menu">
      <div id="left-menu-first">
        <FontAwesomeIcon
          className="closeMenu"
          icon={faTimes}
          fixedWidth
          title="Zamknij"
          onClick={closeLeftMenu}
        />
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
      <div id="left-menu-second">
        <NavLink
          to="/dodaj-rosline"
          title="Dodaj roślinę"
          exact={true}
          activeClassName="is-active"
          id="add-plant"
          className="addBtn"
        >
          +
        </NavLink>
        <NavLink
          to="/dodaj-material"
          title="Dodaj materiał"
          exact={true}
          activeClassName="is-active"
          id="add-material"
          className="addBtn"
        >
          +
        </NavLink>
        <NavLink
          to="/zaplanuj-prace"
          title="Zaplanuj pracę"
          exact={true}
          activeClassName="is-active"
          id="add-work"
          className="addBtn"
        >
          +
        </NavLink>
      </div>
    </nav>
  );
};

export default LeftMenuUser;
