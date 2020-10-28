import React from "react";
import translate from "../../i18n/translate";

const EditedPlantHead = () => {
  return (
    <>
      <tr>
        <td colSpan="10">
          <h3>{translate("edit-plant")}</h3>
        </td>
      </tr>
      <tr>
        <th>{translate("plant-name")}</th>
        <th className="longTd">{translate("photo-term")}</th>
        <th>
          {translate("quantity-term")}
          <br />[{translate("pcs-term")}]
        </th>
        <th>
          {translate("unit-price")}
          <br />
          {translate("currency-sign")}
        </th>
        <th>{translate("fertilizer-term")}</th>
        <th>
          {translate("fert-dose")}
          <br />[{translate("fert-unit")}]
        </th>
        <th colSpan="2" className="longTd">
          {translate("freq-term")}
          <br /> {translate("fertil-water")}
          <br />[{translate("per-year")}] / [{translate("per-week")}]
        </th>
        <th></th>
      </tr>
    </>
  );
};

export default EditedPlantHead;
