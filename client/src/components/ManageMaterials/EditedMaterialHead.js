import React from "react";
import translate from "../../i18n/translate";

const EditedMaterialHead = () => {
  return (
    <>
      <tr>
        <td colSpan="10">
          <h3>{translate("edit-material")}</h3>
        </td>
      </tr>
      <tr>
        <th className="longTd">{translate("material-name")}</th>
        <th className="longTd">{translate("photo-term")}</th>
        <th>{translate("quantity-term")}</th>
        <th>{translate("unit-term")}</th>
        <th>
          {translate("unit-price")} [{translate("currency-sign")}]
        </th>
        <th></th>
      </tr>
    </>
  );
};

export default EditedMaterialHead;
