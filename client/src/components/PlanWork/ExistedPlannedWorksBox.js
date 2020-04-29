import React, { useContext } from "react";
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
              <span className="greenText">
                {plannedWork.workTerm}, {plannedWork.workAlert} &raquo;
              </span>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default ExistedPlannedWorksBox;
