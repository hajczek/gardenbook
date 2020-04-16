import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

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
    <form id="add-plant" action="" onSubmit={onSubmit}>
      <label htmlFor="material-name">Nazwa materiału</label>
      <input
        type="text"
        name="material-name"
        id="material-name"
        value={materialName}
        onChange={(e) => setMaterialName(e.target.value)}
      />
      <label htmlFor="material-photo" id="material-photo">
        Zdjęcie materiału
      </label>
      <input
        type="file"
        name="material-photo"
        value={materialPhoto}
        onChange={(e) => setMaterialPhoto(e.target.value)}
        placeholder="Wybierz plik ze zdjęciem"
      />
      <FontAwesomeIcon icon={faDownload} />

      <label htmlFor="material-quant">Ilość</label>
      <input
        type="number"
        name="material-quant"
        id="material-quant"
        min="0"
        value={materialQuant}
        onChange={(e) => setMaterialQuant(e.target.value)}
      />

      <label htmlFor="unit">Jednostka</label>
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

      <label htmlFor="material-pricer">Cena jedn. [zł]</label>
      <input
        type="number"
        name="material-price"
        id="material-price"
        min="0"
        value={materialPrice}
        onChange={(e) => setMaterialPrice(e.target.value)}
      />
      <button id="add-material-btn">Dodaj</button>
    </form>
  );
};

export default AddMaterialForm;
