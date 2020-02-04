import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const AddPlantForm = () => {
  return (
    <form id="add-plant" action="">
      <label htmlFor="name">Nazwa rośliny</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="plant-number">Ilość szt.</label>
      <input type="number" name="plant-number" />
      <label htmlFor="plant-photo">Zdjęcie rośliny</label>
      <input
        type="file"
        name="plant-photo"
        placeholder="Wybierz plik ze zdjęciem"
      />
      <FontAwesomeIcon icon={faDownload} />
      <label htmlFor="watering-frequency">
        Częstotoliwość podlewania [co ile dni]:
      </label>
      <input
        type="number"
        name="watering-frequency"
        id="watering-frequency"
        min="0"
        placeholder="0"
      />
      <label htmlFor="fertilizer">Rodzaj nawozu</label>
      <input type="text" name="fertilizer" id="fertilizer" />
      <label htmlFor="fertilizer-frequency">
        Częstotoliwość nawożenia [ile razy w roku]:
      </label>
      <input
        type="number"
        name="fertilizer-frequency"
        id="fertilizer-frequency"
        min="0"
        placeholder="0"
      />
      <label htmlFor="plant-pricer">Cena jedn. [zł]</label>
      <input
        type="number"
        name="plant-price"
        id="plant-price"
        min="0"
        placeholder="0.00"
      />
      <label htmlFor="fertilizer-dose">Zalecana dawka nawozu</label>
      <input
        type="number"
        name="fertilizer-dose"
        id="fertilizer-dose"
        min="0"
        placeholder="0"
      />
      <button id="add-plant-btn">Zapisz</button>
    </form>
  );
};

export default AddPlantForm;
