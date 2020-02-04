import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const AddMaterialForm = () => {
  return (
    <form id="add-plant" action="">
      <label htmlFor="name">Nazwa materiału</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="material-photo" id="material-photo">
        Zdjęcie materiału
      </label>
      <input
        type="file"
        name="material-photo"
        placeholder="Wybierz plik ze zdjęciem"
      />
      <FontAwesomeIcon icon={faDownload} />
      <label htmlFor="material-number">Ilość</label>
      <input
        type="number"
        name="material-number"
        id="material-number"
        min="0"
        placeholder="0"
      />

      <label htmlFor="unit">Jednostka</label>
      <select name="unit" id="unit">
        <option value="wybierz">Wybierz</option>
        <option value="gr">kg</option>
        <option value="ml">l</option>
      </select>

      <label htmlFor="plant-pricer">Cena jedn. [zł]</label>
      <input
        type="number"
        name="material-price"
        id="material-price"
        min="0"
        placeholder="0.00"
      />
      <button id="add-material-btn">Zapisz</button>
    </form>
  );
};

export default AddMaterialForm;
