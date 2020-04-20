import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ExistedPlannedWorksBox = () => {
  const { plannedWorks } = useContext(GlobalContext);
  return (
    <div className="existed-box">
      <h2>Zaplanowane</h2>
      <ol>
        {plannedWorks.map((plannedWork) => (
          <li key={plannedWork.id}>
            {plannedWork.workName}:{" "}
            <span className="greenText">{plannedWork.workTerm} &raquo;</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExistedPlannedWorksBox;
