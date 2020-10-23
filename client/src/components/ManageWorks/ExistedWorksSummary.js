import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import translate from "../../i18n/translate";

const ExistedWorksSummary = () => {
  const { works, users } = useContext(GlobalContext);

  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  /**
   * Returns number of done work
   *
   * @return {number} represents number of done work
   */
  function countNumOfDoneWork() {
    let numOfDoneWork = 0;
    for (let i = 0; i < works.length; i++) {
      if (works[i].userId === userId && works[i].workDone === true)
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
        works[i].userId === userId &&
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
      <h3>{translate("all-works")}:</h3>{" "}
      <span>
        {translate("not-completed")}: {countNumOfNotDoneWork()} |{" "}
      </span>
      <span>
        {translate("completed-term")}: {countNumOfDoneWork()} |{" "}
      </span>
      <span>
        {translate("to-complete")}: {countNumOfPlannedWork()}{" "}
      </span>
    </div>
  );
};

export default ExistedWorksSummary;
