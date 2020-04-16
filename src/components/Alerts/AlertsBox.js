import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { maxDateFormatted } from "./AlertsFunction";
import CountAlerts from "./CountAlerts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const AlertsBox = () => {
  const { plannedWorks } = useContext(GlobalContext);
  return (
    <div id="alerts">
      <h2>
        <FontAwesomeIcon icon={faBell} />
        <CountAlerts /> ALERTY!!!
      </h2>
      <ul id="alerts-list">
        {plannedWorks
          .filter((plannedWork) => plannedWork.workTerm <= maxDateFormatted)
          .map((alert) => {
            return (
              <li key={alert.id}>
                {alert.workName} <span>za 2 dni &raquo;</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AlertsBox;
