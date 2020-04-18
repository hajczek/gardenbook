import React, { useContext, Fragment } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { maxDateFormatted } from "./AlertsFunction";

export const CountAlerts = () => {
  const { plannedWorks } = useContext(GlobalContext);

  // Filter dates which need alert
  let alertDates = plannedWorks.filter(
    (plannedWork) => plannedWork.workTerm <= maxDateFormatted
  );

  return (
    <Fragment>
      <span>{alertDates.length}</span>
    </Fragment>
  );
};
export default CountAlerts;
