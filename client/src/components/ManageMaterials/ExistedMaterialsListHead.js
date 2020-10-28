import React from "react";
import translate from "../../i18n/translate";

const ExistedMaterialsListHead = () => {
  return (
    <>
      <tr>
        <td colSpan="6">
          <h3>Lista materiałów</h3>
        </td>
      </tr>
      <tr>
        <th className="shortTd">{translate("lp-term")}</th>
        <th className="longTd">{translate("material-name")}</th>
        <th className="longTd">{translate("photo-term")}</th>
        <th className="longTd">{translate("quantity-term")}</th>
        <th>{translate("unit-term")}</th>
        <th className="longTd">
          {translate("unit-price")} [{translate("currency-sign")}]
        </th>
        <th className="longTd">
          {translate("value-term")} [{translate("currency-sign")}]
        </th>
        <th>{translate("edit-term")}</th>
        <th>{translate("delete-term")}</th>
      </tr>
    </>
  );
};

export default ExistedMaterialsListHead;
