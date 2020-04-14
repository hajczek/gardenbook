import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const AlertsBox = () => {
  /* Needed functions:
    1. displayAlerts() - function displays alerts about planned works which must be done in 3 days.
       Function check which planned works has maximum 3 days to finish and displays list of these works.
       On list must be displays a links to card with details about these works. 
       Function count how many works like this is on list and set number of alerts near on a bell icon at menu and on title of Box.
  */
  return (
    <div id="alerts">
      <FontAwesomeIcon icon={faBell} />
      <h2>2 ALERTY!!!</h2>
      <ul id="alerts-list">
        <li>
          Nawożenie: <span>za 3 dni &raquo;</span>
        </li>
        <li>
          Nawożenie: <span>za 3 dni &raquo;</span>
        </li>
      </ul>
    </div>
  );
};

export default AlertsBox;
