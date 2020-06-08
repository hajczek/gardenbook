import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";
import DisplayInfo from "../../common/DisplayInfo";

const AddMaterialForm = () => {
  const { materials, addMaterial, users } = useContext(GlobalContext);

  const [materialName, setMaterialName] = useState("");
  const [materialPhoto, setMaterialPhoto] = useState("");
  const [materialQuant, setMaterialQuant] = useState(0);
  const [materialUnit, setMaterialUnit] = useState("");
  const [materialPrice, setMaterialPrice] = useState(0);
  const [addedDate] = useState(addedDateFunction());
  const [errorInfo, setErrorInfo] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const addedMaterial = () => {
    // Display info for user about added material to list
    setUserInfo("Dodano materiał do spisu.");
    // Clear info about error
    setErrorInfo("");
    // Clear all fields of form
    setMaterialName("");
    setMaterialPhoto("");
    setMaterialQuant(0);
    setMaterialUnit("");
    setMaterialPrice(0);
  };

  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  function onSubmit(e) {
    const newMaterial = {
      userId,
      materialName,
      materialPhoto,
      materialQuant,
      materialUnit,
      materialPrice,
      addedDate,
    };

    // Check if input field for name is empty
    materialName === ""
      ? // If no, set info about error
        setErrorInfo("Wpisz nazwę dodawanego materiału.")
      : materials.some(
          (material) =>
            (material.materialName ===
              document.getElementById("material-name").value) ===
            true
        )
      ? setErrorInfo("Ten materiał jest już na liście.")
      : // If material is not on a list it in database
        addedMaterial();

    addMaterial(newMaterial);

    e.preventDefault();
  }
  return (
    <>
      <span className="neededFields">Pola oznaczone * są wymagane.</span>
      <DisplayErrorInfo info={errorInfo} />
      <DisplayInfo info={userInfo} />
      <form id="add-material" action="" onSubmit={onSubmit}>
        <label htmlFor="material-name">
          <span>Nazwa materiału *</span>
          <input
            type="text"
            name="material-name"
            id="material-name"
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
          />
        </label>
        <label htmlFor="unit">
          <span>Jednostka</span>
          <select
            name="material-unit"
            id="material-unit"
            value={materialUnit}
            onChange={(e) => setMaterialUnit(e.target.value)}
          >
            <option value="wybierz">Wybierz</option>
            <option value="kg">kg</option>
            <option value="litr">litr</option>
          </select>
        </label>
        <label htmlFor="material-quant">
          <span>Ilość</span>
          <input
            type="number"
            name="material-quant"
            id="material-quant"
            min="0"
            value={materialQuant}
            onChange={(e) => setMaterialQuant(e.target.value)}
          />
        </label>
        <label htmlFor="material-pricer">
          <span>Cena jedn. [zł]</span>
          <input
            type="number"
            name="material-price"
            id="material-price"
            min="0"
            step="0.01"
            value={materialPrice}
            onChange={(e) => setMaterialPrice(e.target.value)}
          />
        </label>
        <label htmlFor="material-photo" className="labelForInputFile">
          Dodaj link do zdjęcia materiału
          <input
            type="text"
            name="material-photo"
            id="material-photo"
            value={materialPhoto}
            onChange={(e) => setMaterialPhoto(e.target.value)}
          />
          {/* Dodaj zdjęcie materiału
          <input
            type="file"
            name="material-photo"
            value={materialPhoto}
            className="inputFile"
            onChange={(e) => setMaterialPhoto(e.target.value)}
            accept="image/jpeg,image/gif,image/jpg,image/png"
          /> 
          <span>Wybierz plik</span> */}
        </label>
        <button id="add-material-btn">Dodaj</button>
      </form>
    </>
  );
};

export default AddMaterialForm;
