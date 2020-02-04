import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpa,
  faPen,
  faCalendarAlt,
  faMap,
  faChartLine,
  faEye
} from "@fortawesome/free-solid-svg-icons";

const LeftMenuUser = () => {
  return (
    <nav>
      <div className="dobuleBtn">
        <a id="plants" href="#">
          <FontAwesomeIcon icon={faSpa} />
        </a>
        <a class="addBtn" href="#" id="add-plant">
          +
        </a>
      </div>
      <div id="materials" className="dobuleBtn">
        <a href="#">
          <FontAwesomeIcon icon={faPen} />
        </a>
        <a class="addBtn" href="#" uid="add-material">
          +
        </a>
      </div>
      <div id="works" className="dobuleBtn">
        <a href="#">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </a>
        <a class="addBtn" href="#" id="add-work">
          +
        </a>
      </div>
      <a id="plan" href="#">
        <FontAwesomeIcon icon={faMap} />
      </a>
      <a id="statistic" href="#">
        <FontAwesomeIcon icon={faChartLine} />
      </a>
      <a id="search" href="#">
        <FontAwesomeIcon icon={faEye} />
      </a>
    </nav>
  );
};

export default LeftMenuUser;
