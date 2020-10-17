import React from "react";
import translate from "../../i18n/translate";
import AddMaterialForm from "./AddMaterialForm";
import ExistedMaterialsBox from "./ExistedMaterialsBox";

const AddMaterialCard = () => {
  return (
    <div className="user-content">
      <div className="contentUserFormBox">
        <div className="contentUserForm">
          <h2>{translate("add-material")}</h2>
          <AddMaterialForm />
        </div>
        <ExistedMaterialsBox />
      </div>
    </div>
  );
};

export default AddMaterialCard;
