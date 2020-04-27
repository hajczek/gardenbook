import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";

const AddMaterialForm = () => {
  const [materialName, setMaterialName] = useState("");
  const [materialPhoto, setMaterialPhoto] = useState("");
  const [materialQuant, setMaterialQuant] = useState(0);
  const [materialUnit, setMaterialUnit] = useState("");
  const [materialPrice, setMaterialPrice] = useState(0);
  const [addedDate] = useState(addedDateFunction());

  const { addMaterial } = useContext(GlobalContext);

  function onSubmit(e) {
    const newMaterial = {
      id: Math.floor(Math.random() * 100000000),
      materialName,
      materialPhoto,
      materialQuant,
      materialUnit,
      materialPrice,
      addedDate,
    };

    addMaterial(newMaterial);
    console.log(newMaterial);

    e.preventDefault();
  }
  return (
    <form id="add-material" action="" onSubmit={onSubmit}>
      <label htmlFor="material-name">
        <span>Nazwa materiału</span>
        <input
          type="text"
          name="material-name"
          id="material-name"
          value={materialName}
          onChange={(e) => setMaterialName(e.target.value)}
        />
      </label>
      <label htmlFor="material-photo" className="labelForInputFile">
        Dodaj zdjęcie materiału
        <input
          type="file"
          name="material-photo"
          value={materialPhoto}
          className="inputFile"
          onChange={(e) => setMaterialPhoto(e.target.value)}
          accept="image/jpeg,image/gif,image/jpg,image/png"
        />
        <span>Wybierz plik</span>
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
      <label htmlFor="material-pricer">
        <span>Cena jedn. [zł]</span>
        <input
          type="number"
          name="material-price"
          id="material-price"
          min="0"
          value={materialPrice}
          onChange={(e) => setMaterialPrice(e.target.value)}
        />
      </label>
      <button id="add-material-btn">Dodaj</button>
    </form>
  );
};

export default AddMaterialForm;
