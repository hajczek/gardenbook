import React from "react";
import translate from "../../i18n/translate";

const ExistedWorksListHead = () => {
  return (
    <>
      <tr>
        <td colSpan="10">
          <h3>{translate("tasks-list")}</h3>
        </td>
      </tr>
      <tr>
        <th className="shortTd">{translate("lp-term")}</th>
        <th className="longTd">{translate("title-term")}</th>
        <th className="longTd">{translate("term-term")}</th>
        <th>{translate("alert-term")}</th>
        <th>{translate("status-term")}</th>
        <th className="longTd">
          {translate("work-time")}
          <br />[{translate("hours-quant")}]
        </th>
        <th className="longTd">
          {translate("value-term")}
          <br />[{translate("currency-sign")}]
        </th>
        <th className="longTd">{translate("material-term")}</th>
        <th className="longTd">{translate("add-info")}</th>
        <th>{translate("edit-term")}</th>
        <th>{translate("delete-term")}</th>
      </tr>
    </>
  );
};

export default ExistedWorksListHead;
