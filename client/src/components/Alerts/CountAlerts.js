import React, { useContext, Fragment, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { maxDateFormatted } from "./AlertsFunction";
import addedDateFunction from "../../common/AddedDateFunction";
import GetUserLoggedId from "../../common/GetUserLoggedId";

export const CountAlerts = () => {
  const { works, getWorks } = useContext(GlobalContext);

  useEffect(() => {
    getWorks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filter dates which needs alert
  let alertDates = works.filter(
    (plannedWork) =>
      plannedWork.userId === GetUserLoggedId() &&
      plannedWork.workTerm >= addedDateFunction() &&
      plannedWork.workTerm <= maxDateFormatted
  );

  return (
    <Fragment>
      <span className={alertDates.length > 0 ? "greenAlert" : ""}>
        {alertDates.length}
      </span>
    </Fragment>
  );
};
export default CountAlerts;
