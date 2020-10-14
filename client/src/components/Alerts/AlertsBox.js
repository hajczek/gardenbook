import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { NavLink } from 'react-router-dom';
import { maxDateFormatted } from './AlertsFunction';
import CountAlerts from './CountAlerts';
import daysToAlert from './CountDaysToAlert';
import addedDateFunction from '../../common/AddedDateFunction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import translate from '../../i18n/translate';

const AlertsBox = () => {
  const { works, getWorks, users } = useContext(GlobalContext);

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
        <FontAwesomeIcon icon={faBell} /> {translate('actual-alerts')}{' '}
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
                '{alert.workName}'{' '}
                <span class="thin-span">
                  {translate('in-term')} {daysToAlert(alert.workTerm)}{' '}
                  {translate('days-term')}:{' '}
                </span>
                <NavLink
                  to="/zarzadzaj-pracami"
                  title="Zarządzaj pracami"
                  exact={true}
                  className={
                    alert.workTerm === addedDateFunction() ? 'redAlert' : null
                  }
                >
                  {alert.workTerm} {translate('at-term')} {alert.workAlert}{' '}
                  {/* {daysToAlert(alert.workTerm) > 1
                    ? ` za ${daysToAlert(alert.workTerm)} dni o ${
                        alert.workAlert
                      } `
                    : daysToAlert(alert.workTerm) === 1
                    ? ` jutro o ${alert.workAlert} `
                    : daysToAlert(alert.workTerm) === 0
                    ? ` dzisiaj o ${alert.workAlert} `
                    : null} */}
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
