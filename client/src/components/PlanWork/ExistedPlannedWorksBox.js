import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import { useIntl } from "react-intl";
import translate from "../../i18n/translate";

const ExistedPlannedWorksBox = () => {
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
    <div className="existed-box">
      <h2>{translate("planned-term")}</h2>
      <ol>
        {works
          .sort((a, b) => new Date(a.workTerm) - new Date(b.workTerm))
          .filter(
            (plannedWork) =>
              plannedWork.userId === userId &&
              plannedWork.workTerm >= addedDateFunction()
          )
          .map((plannedWork) => (
            <li key={plannedWork.id}>
              {plannedWork.workName}:{" "}
              <NavLink
                to="/zarzadzaj-pracami"
                title={intl.formatMessage({ id: "manage-jobs" })}
                exact={true}
                activeClassName="is-active"
                id="works"
                className="greenText"
              >
                {plannedWork.workTerm}, {plannedWork.workAlert} &raquo;
              </NavLink>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default ExistedPlannedWorksBox;
