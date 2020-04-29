import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";

const ExistedPlannedWorksBox = () => {
  const { plannedWorks } = useContext(GlobalContext);
  return (
    <div className="existed-box">
      <h2>Zaplanowane</h2>
      <ol>
        {plannedWorks
          .filter((plannedWork) => plannedWork.workTerm >= addedDateFunction())
          .map((plannedWork) => (
            <li key={plannedWork.id}>
              {plannedWork.workName}:{" "}
              <NavLink
                to="/zarzadzaj-pracami"
                title="Zarządzaj pracami"
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
