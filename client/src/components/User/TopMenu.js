import React from "react";
import { NavLink } from "react-router-dom";
import CountAlerts from "../Alerts/CountAlerts";
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

const TopMenu = () => {
  return (
    <nav>
      <NavLink to="/" title="Alerty" exact={true} activeClassName="is-active">
        <CountAlerts />
        <FontAwesomeIcon icon={faBell} />
      </NavLink>
      {/* <a href="#" title="Zestawienie prac">
          <FontAwesomeIcon icon={faCheck} />
        </a> */}

      {/* Link to social network for users */}
      {/* <NavLink
        to="/wall"
        title="Portal społecznościowy gardenBook"
        exact={true}
        activeClassName="is-active"
      >
        <FontAwesomeIcon icon={faDesktop} />
      </NavLink> */}
      <NavLink
        to="/konto"
        title="Konto"
        exact={true}
        activeClassName="is-active"
      >
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <NavLink
        to="/pomoc"
        title="Pomoc"
        exact={true}
        activeClassName="is-active"
      >
        <FontAwesomeIcon icon={faQuestion} />
      </NavLink>
      {/* <a href="#" title="Historia">
          <FontAwesomeIcon icon={faHistory} />
        </a> */}
      <a href="#" title="Wyloguj">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </a>
    </nav>
  );
};

export default TopMenu;
