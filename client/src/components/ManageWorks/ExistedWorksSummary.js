import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ExistedWorksSummary = () => {
  const { plannedWorks } = useContext(GlobalContext);

  function countNumOfDoneWork() {
    let numOfDoneWork = 0;
    for (let i = 0; i < plannedWorks.length; i++) {
      if (plannedWorks[i].workDone === true) numOfDoneWork += 1;
    }
    return numOfDoneWork;
  }

  function countNumOfPlannedWork() {
    let numOfPlannedWork = 0;
    for (let i = 0; i < plannedWorks.length; i++) {
      if (new Date(plannedWorks[i].workTerm) > new Date())
        numOfPlannedWork += 1;
    }
    return numOfPlannedWork;
  }

  function countNumOfNotDoneWork() {
    let numOfNotDonedWork = 0;
    for (let i = 0; i < plannedWorks.length; i++) {
      if (
        new Date(plannedWorks[i].workTerm) < new Date() &&
        plannedWorks[i].workDone === false
      )
        numOfNotDonedWork += 1;
    }
    return numOfNotDonedWork;
  }

  return (
    <div className="summaryBox">
      <h3>RAZEM PRAC:</h3> Zaplanowanych: {plannedWorks.length} | Niewykonanych:{" "}
      {countNumOfNotDoneWork()} | Wykonanych: {countNumOfDoneWork()} | Do
      wykonania: {countNumOfPlannedWork()}
    </div>
  );
};

export default ExistedWorksSummary;
