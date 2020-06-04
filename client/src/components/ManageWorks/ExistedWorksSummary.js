import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import GetUserLoggedId from "../../common/GetUserLoggedId";

const ExistedWorksSummary = () => {
  const { works } = useContext(GlobalContext);

  /**
   * Returns number of done work
   *
   * @return {number} represents number of done work
   */
  function countNumOfDoneWork() {
    let numOfDoneWork = 0;
    for (let i = 0; i < works.length; i++) {
      if (works[i].userId === GetUserLoggedId() && works[i].workDone === true)
        numOfDoneWork += 1;
    }
    return numOfDoneWork;
  }

  /**
   * Returns number of planned work
   *
   * @return {number} represents number of planned work
   */
  function countNumOfPlannedWork() {
    let numOfPlannedWork = 0;
    for (let i = 0; i < works.length; i++) {
      if (
        works[i].userId === GetUserLoggedId() &&
        new Date(works[i].workTerm) > new Date()
      ) {
        numOfPlannedWork += 1;
      }
    }
    return numOfPlannedWork;
  }

  /**
   * Returns number of not done work
   *
   * @return {number} represents number of not done work
   */
  function countNumOfNotDoneWork() {
    let numOfNotDonedWork = 0;
    for (let i = 0; i < works.length; i++) {
      if (
        works[i].userId === GetUserLoggedId() &&
        new Date(works[i].workTerm) < new Date() &&
        works[i].workDone === false
      )
        numOfNotDonedWork += 1;
    }
    return numOfNotDonedWork;
  }

  return (
    <div className="summaryBox">
      <h3>RAZEM PRAC:</h3>{" "}
      <span>Niewykonanych: {countNumOfNotDoneWork()} | </span>
      <span>Wykonanych: {countNumOfDoneWork()} | </span>
      <span>Do wykonania: {countNumOfPlannedWork()} </span>
    </div>
  );
};

export default ExistedWorksSummary;
