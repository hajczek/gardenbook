import React from "react";
import AddMaterialForm from "./AddMaterialForm";
import ExistedMaterialsBox from "./ExistedMaterialsBox";

const AddMaterialCard = () => {
  return (
    <div className="contentUser">
      <div className="contentUserFormBox">
        <div class="contentUserForm">
          <h2>Dodaj materiał</h2>
          <AddMaterialForm />
        </div>
        <ExistedMaterialsBox />
      </div>
    </div>
  );
};

export default AddMaterialCard;
