import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpa,
  faPen,
  faCalendarAlt,
  faMap,
  faChartLine,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const LeftMenuUser = () => {
  return (
    <nav id="left-menu">
      <div id="left-menu-first">
        <a id="plants" href="#" className="menuLeftBtn">
          <FontAwesomeIcon icon={faSpa} fixedWidth title="Rośliny" />
        </a>
        <a id="materials" href="#" className="menuLeftBtn">
          <FontAwesomeIcon icon={faPen} fixedWidth title="Materiały" />
        </a>
        <a id="works" href="#" className="menuLeftBtn">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            fixedWidth
            title="Zaplanowane prace"
          />
        </a>
        <a id="plan" href="#" className="menuLeftBtn notActive">
          <FontAwesomeIcon icon={faMap} fixedWidth title="Plan ogrodu" />
        </a>
        <a id="statistic" href="#" className="menuLeftBtn notActive">
          <FontAwesomeIcon icon={faChartLine} fixedWidth title="Statystyki" />
        </a>
        <a id="search" href="#" className="menuLeftBtn notActive">
          <FontAwesomeIcon icon={faEye} fixedWidth title="Znajdź wykonawcę" />
        </a>
      </div>
      <div id="left-menu-second">
        <a className="addBtn" href="#" id="add-plant" title="Dodaj roślinę">
          +
        </a>
        <a
          className="addBtn"
          href="#"
          uid="add-material"
          title="Dodaj materiał"
        >
          +
        </a>
        <a className="addBtn" href="#" id="add-work" title="Zaplanuj pracę">
          +
        </a>
      </div>
    </nav>
  );
};

export default LeftMenuUser;
