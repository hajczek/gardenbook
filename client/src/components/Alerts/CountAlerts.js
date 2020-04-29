import React, { useContext, Fragment } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { maxDateFormatted } from "./AlertsFunction";
import addedDateFunction from "../../common/AddedDateFunction";

export const CountAlerts = () => {
  const { plannedWorks } = useContext(GlobalContext);

  console.log(addedDateFunction() < maxDateFormatted);

  // Filter dates which needs alert
  let alertDates = plannedWorks.filter(
    (plannedWork) =>
      plannedWork.workTerm >= addedDateFunction() &&
      plannedWork.workTerm <= maxDateFormatted
  );

  return (
    <Fragment>
      <span>{alertDates.length}</span>
    </Fragment>
  );
};
export default CountAlerts;
