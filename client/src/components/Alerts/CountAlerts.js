import React, { useContext, Fragment } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { maxDateFormatted } from "./AlertsFunction";
import addedDateFunction from "../../common/AddedDateFunction";

export const CountAlerts = () => {
  const { works, users } = useContext(GlobalContext);

  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  // Filter dates which needs alert
  let alertDates = works.filter(
    (plannedWork) =>
      plannedWork.userId === userId &&
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
