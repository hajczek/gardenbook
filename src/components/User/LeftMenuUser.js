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
          <FontAwesomeIcon icon={faSpa} fixedWidth />
        </a>
        <a id="materials" href="#" className="menuLeftBtn">
          <FontAwesomeIcon icon={faPen} fixedWidth />
        </a>
        <a id="works" href="#" className="menuLeftBtn">
          <FontAwesomeIcon icon={faCalendarAlt} fixedWidth />
        </a>
        <a id="plan" href="#" className="menuLeftBtn notActive">
          <FontAwesomeIcon icon={faMap} fixedWidth />
        </a>
        <a id="statistic" href="#" className="menuLeftBtn notActive">
          <FontAwesomeIcon icon={faChartLine} fixedWidth />
        </a>
        <a id="search" href="#" className="menuLeftBtn notActive">
          <FontAwesomeIcon icon={faEye} fixedWidth />
        </a>
      </div>
      <div id="left-menu-second">
        <a className="addBtn" href="#" id="add-plant">
          +
        </a>
        <a className="addBtn" href="#" uid="add-material">
          +
        </a>
        <a className="addBtn" href="#" id="add-work">
          +
        </a>
      </div>
    </nav>
  );
};

export default LeftMenuUser;
