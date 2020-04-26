import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { maxDateFormatted } from "./AlertsFunction";
import CountAlerts from "./CountAlerts";
import daysToAlert from "./CountDaysToAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const AlertsBox = () => {
  const { plannedWorks } = useContext(GlobalContext);

  return (
    <div id="alerts">
      <h2>
        <FontAwesomeIcon icon={faBell} /> Aktualne alerty: <CountAlerts /> !!!
      </h2>
      <ol id="alerts-list">
        {plannedWorks
          .reverse()
          .filter((plannedWork) => plannedWork.workTerm <= maxDateFormatted)
          .map((alert) => {
            return (
              <li key={alert.id}>
                {alert.workName}:
                <span>
                  {daysToAlert(alert.workTerm) > 1
                    ? ` za ${daysToAlert(alert.workTerm)} dni `
                    : daysToAlert(alert.workTerm) === 1
                    ? ` za ${daysToAlert(alert.workTerm)} dzień `
                    : daysToAlert(alert.workTerm) === 0
                    ? ` jutro `
                    : null}
                  &raquo;
                </span>
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default AlertsBox;
