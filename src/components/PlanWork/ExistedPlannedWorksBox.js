import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ExistedPlannedWorksBox = () => {
  const { plannedWorks } = useContext(GlobalContext);
  return (
    <div className="existed-box">
      <ol>
        {plannedWorks.map((plannedWork) => (
          <li key={plannedWork.id}>
            <a href="#">
              {plannedWork.workName} {plannedWork.workTerm} &raquo;
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExistedPlannedWorksBox;
