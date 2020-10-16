import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { NavLink } from "react-router-dom";
import { maxDateFormatted } from "./AlertsFunction";
import CountAlerts from "./CountAlerts";
import daysToAlert from "./CountDaysToAlert";
import addedDateFunction from "../../common/AddedDateFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useIntl } from "react-intl";
import translate from "../../i18n/translate";

const AlertsBox = () => {
  const { works, getWorks, users } = useContext(GlobalContext);
  const intl = useIntl();

  useEffect(() => {
    getWorks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  return (
    <div id="alerts">
      <h2>
        <FontAwesomeIcon icon={faBell} /> {translate("actual-alerts")}{" "}
        <CountAlerts /> !!!
      </h2>
      <ol id="alerts-list">
        {works
          .sort((a, b) => new Date(a.workTerm) - new Date(b.workTerm))
          .filter(
            (plannedWork) =>
              plannedWork.userId === userId &&
              plannedWork.workTerm >= addedDateFunction() &&
              plannedWork.workTerm <= maxDateFormatted
          )
          .map((alert) => {
            return (
              <li key={alert.id}>
                '{alert.workName}'{" "}
                <span class="thin-span">
                  {translate("in-term")} {daysToAlert(alert.workTerm)}{" "}
                  {translate("days-term")}:{" "}
                </span>
                <NavLink
                  to="/zarzadzaj-pracami"
                  title={intl.formatMessage({ id: "manage-jobs" })}
                  exact={true}
                  className={
                    alert.workTerm === addedDateFunction() ? "redAlert" : null
                  }
                >
                  {daysToAlert(alert.workTerm) > 1
                    ? ` ${intl.formatMessage({ id: "in-term" })} ${daysToAlert(
                        alert.workTerm
                      )} ${intl.formatMessage({
                        id: "days-term",
                      })} ${intl.formatMessage({ id: "at-term" })} ${
                        alert.workAlert
                      } `
                    : daysToAlert(alert.workTerm) === 1
                    ? ` ${intl.formatMessage({
                        id: "tomorrow-term",
                      })} ${intl.formatMessage({ id: "at-term" })} ${
                        alert.workAlert
                      } `
                    : daysToAlert(alert.workTerm) === 0
                    ? ` ${intl.formatMessage({
                        id: "today-term",
                      })} ${intl.formatMessage({ id: "at-term" })} ${
                        alert.workAlert
                      } `
                    : null}
                  &raquo;
                </NavLink>
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default AlertsBox;
