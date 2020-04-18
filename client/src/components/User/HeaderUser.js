import React from "react";
import CountAlerts from "../Alerts/CountAlerts";
import logo from "../../assets/img/gardenbook-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCheck,
  faDesktop,
  faUser,
  faQuestion,
  faHistory,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const HeaderUser = () => {
  return (
    <header>
      <div className="logo">
        <a href="./">
          <img src={logo} alt="gardenbook" id="logo" />
        </a>
      </div>
      <nav>
        <a href="#" title="Alerty">
          <CountAlerts />
          <FontAwesomeIcon icon={faBell} />
        </a>
        <a href="#" title="Zestawienie prac">
          <FontAwesomeIcon icon={faCheck} />
        </a>
        <a href="#" title="Portal społeczności">
          <FontAwesomeIcon icon={faDesktop} />
        </a>
        <a href="#" title="Konto użytkownika">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="#" title="Pomoc">
          <FontAwesomeIcon icon={faQuestion} />
        </a>
        <a href="#" title="Historia">
          <FontAwesomeIcon icon={faHistory} />
        </a>
        <a href="#" title="Wyloguj">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </a>
      </nav>
    </header>
  );
};

export default HeaderUser;
