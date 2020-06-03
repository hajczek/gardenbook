import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { maxDateFormatted } from "./AlertsFunction";
import CountAlerts from "./CountAlerts";
import daysToAlert from "./CountDaysToAlert";
import addedDateFunction from "../../common/AddedDateFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const AlertsBox = () => {
  const { works, getWorks, users } = useContext(GlobalContext);

  useEffect(() => {
    getWorks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  return (
    <div id="alerts">
      <h2>
        <FontAwesomeIcon icon={faBell} /> Aktualne alerty: <CountAlerts /> !!!
      </h2>
      <ol id="alerts-list">
        {works
          .reverse()
          .filter(
            (plannedWork) =>
              plannedWork.userId === userId &&
              plannedWork.workTerm >= addedDateFunction() &&
              plannedWork.workTerm <= maxDateFormatted
          )
          .map((alert) => {
            return (
              <li key={alert.id}>
                {alert.workName}:
                <span
                  className={
                    alert.workTerm === addedDateFunction() ? "redAlert" : null
                  }
                >
                  {daysToAlert(alert.workTerm) > 1
                    ? ` za ${daysToAlert(alert.workTerm)} dni o ${
                        alert.workAlert
                      } `
                    : daysToAlert(alert.workTerm) === 1
                    ? ` jutro o ${alert.workAlert} `
                    : daysToAlert(alert.workTerm) === 0
                    ? ` dzisiaj o ${alert.workAlert} `
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
