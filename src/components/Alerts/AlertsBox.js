import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const AlertsBox = () => {
  return (
    <div id="alerts">
      <FontAwesomeIcon icon={faBell} />
      <h2>2 ALERTY!!!</h2>
      <ul id="alerts-list">
        <li>
          Nawożenie: <span>za 3 dni</span> &raquo;
        </li>
        <li>
          Nawożenie: <span>za 3 dni</span> &raquo;
        </li>
      </ul>
    </div>
  );
};

export default AlertsBox;
