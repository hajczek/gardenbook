import React from "react";
import translate from "../../i18n/translate";

const EditedWorkHead = () => {
  return (
    <>
      <tr>
        <td colSpan="10">
          <h3>{translate("edit-task")}</h3>
        </td>
      </tr>
      <tr>
        <th className="longTd">{translate("title-term")}</th>
        <th>Termin</th>
        <th>Alarm</th>
        <th align="center">Status</th>
        <th>
          {translate("work-time")}
          <br />[ {translate("hours-quant")} ]
        </th>
        <th>
          {translate("value-term")}
          <br />[{translate("currency-sign")}]
        </th>
        <th className="longTd">{translate("material-term")}</th>
        <th>{translate("add-info")}</th>
        <th></th>
      </tr>
    </>
  );
};

export default EditedWorkHead;
