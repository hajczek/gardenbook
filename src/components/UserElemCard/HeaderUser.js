import React from "react";
import logo from "../../assets/img/gardenbook-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCheck,
  faDesktop,
  faUser,
  faQuestion,
  faHistory,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const HeaderUser = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="gardenbook" id="logo" />
      </div>
      <nav>
        <a href="#">
          <FontAwesomeIcon icon={faBell} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faCheck} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faDesktop} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faQuestion} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faHistory} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </a>
      </nav>
    </header>
  );
};

export default HeaderUser;
