import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ExistedWorksSummary = () => {
  const { works, users } = useContext(GlobalContext);

  const userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  function countNumOfDoneWork() {
    let numOfDoneWork = 0;
    for (let i = 0; i < works.length; i++) {
      if (works[i].userId === userId && works[i].workDone === true)
        numOfDoneWork += 1;
    }
    return numOfDoneWork;
  }

  function countNumOfPlannedWork() {
    let numOfPlannedWork = 0;
    for (let i = 0; i < works.length; i++) {
      if (
        works[i].userId === userId &&
        new Date(works[i].workTerm) > new Date()
      ) {
        numOfPlannedWork += 1;
      }
    }
    return numOfPlannedWork;
  }

  function countNumOfNotDoneWork() {
    let numOfNotDonedWork = 0;
    for (let i = 0; i < works.length; i++) {
      if (
        works[i].userId === userId &&
        new Date(works[i].workTerm) < new Date() &&
        works[i].workDone === false
      )
        numOfNotDonedWork += 1;
    }
    return numOfNotDonedWork;
  }

  return (
    <div className="summaryBox">
      <h3>RAZEM PRAC:</h3> Niewykonanych: {countNumOfNotDoneWork()} |
      Wykonanych: {countNumOfDoneWork()} | Do wykonania:{" "}
      {countNumOfPlannedWork()}
    </div>
  );
};

export default ExistedWorksSummary;
