import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";

const ExistedPlannedWorksBox = () => {
  const { works, getWorks } = useContext(GlobalContext);

  useEffect(() => {
    getWorks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(works, addedDateFunction());

  return (
    <div className="existed-box">
      <h2>Zaplanowane</h2>
      <ol>
        {works
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
