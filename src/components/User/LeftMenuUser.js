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
    <nav>
      <div className="dobuleBtn">
        <a id="plants" href="#" className="menuLeftBtn">
          <FontAwesomeIcon icon={faSpa} />
        </a>
        <a className="addBtn" href="#" id="add-plant">
          +
        </a>
      </div>
      <div className="dobuleBtn">
        <a id="materials" href="#" className="menuLeftBtn">
          <FontAwesomeIcon icon={faPen} />
        </a>
        <a className="addBtn" href="#" uid="add-material">
          +
        </a>
      </div>
      <div className="dobuleBtn">
        <a id="works" href="#">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </a>
        <a className="addBtn" href="#" id="add-work">
          +
        </a>
      </div>
      <a id="plan" href="#" className="menuLeftBtn notActive">
        <FontAwesomeIcon icon={faMap} />
      </a>
      <a id="statistic" href="#" className="menuLeftBtn notActive">
        <FontAwesomeIcon icon={faChartLine} />
      </a>
      <a id="search" href="#" className="menuLeftBtn notActive">
        <FontAwesomeIcon icon={faEye} />
      </a>
    </nav>
  );
};

export default LeftMenuUser;
