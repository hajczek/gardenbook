import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";

const AddPlantForm = () => {
  const { addPlant } = useContext(GlobalContext);

  const [plantName, setPlantName] = useState("");
  const [plantQuant, setPlantQuant] = useState(0);
  const [plantPhoto, setPlantPhoto] = useState("");
  const [plantWateringFreq, setPlantWateringFreq] = useState(0);
  const [plantFetilizer, setPlantFetilizer] = useState("");
  const [plantFetilizerFreq, setPlantFetilizerFreq] = useState(0);
  const [plantPrice, setPlantPrice] = useState(0);
  const [plantFetilizerDose, setPlantFetilizerDose] = useState(0);
  const [addedDate] = useState(addedDateFunction());

  function onSubmit(e) {
    const newPlant = {
      id: Math.floor(Math.random() * 100000000),
      plantName,
      plantQuant,
      plantPhoto,
      plantWateringFreq,
      plantFetilizer,
      plantFetilizerFreq,
      plantPrice,
      plantFetilizerDose,
      addedDate,
    };

    addPlant(newPlant);
    console.log(newPlant);

    e.preventDefault();
  }

  return (
    <form id="add-plant" action="" onSubmit={onSubmit}>
      <label htmlFor="plant-name">
        <span>Nazwa rośliny</span>
        <input
          type="text"
          name="plant-name"
          id="plant-name"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
        />
      </label>
      <label htmlFor="plant-quant">
        <span>Ilość szt.</span>
        <input
          type="number"
          name="plant-quant"
          id="plant-quant"
          value={plantQuant}
          onChange={(e) => setPlantQuant(e.target.value)}
        />
      </label>
      <label htmlFor="plant-photo" className="labelForInputFile">
        Dodaj zdjęcie rośliny
        <input
          type="file"
          name="plant-photo"
          id="plant-photo"
          className="inputFile"
          filename={plantPhoto}
          onChange={(e) => setPlantPhoto(e.target.value)}
          accept="image/jpeg,image/gif,image/jpg,image/png"
        />
        <span>Wybierz plik</span>
      </label>

      <label htmlFor="plant-price">
        <span>Cena jednej rośliny [zł]</span>
        <input
          type="number"
          name="plant-price"
          id="plant-price"
          min="0"
          value={plantPrice}
          onChange={(e) => setPlantPrice(e.target.value)}
        />
      </label>
      <label htmlFor="plant-watering-freq">
        <span>Częstotoliwość podlewania [co ile dni]:</span>
        <input
          type="number"
          name="plant-watering-freq"
          id="plant-watering-freq"
          min="0"
          value={plantWateringFreq}
          onChange={(e) => setPlantWateringFreq(e.target.value)}
        />
      </label>
      <label htmlFor="plant-fetilizer">
        <span>Nawóz</span>
        <input
          type="text"
          name="plant-fetilizer"
          id="plant-fetilizer"
          value={plantFetilizer}
          onChange={(e) => setPlantFetilizer(e.target.value)}
        />
      </label>
      <label htmlFor="plant-fetilizer-freq">
        <span>Częstotoliwość nawożenia [na rok]:</span>
        <input
          type="number"
          name="plant-fetilizer-freq"
          id="plant-fetilizer-freq"
          min="0"
          value={plantFetilizerFreq}
          onChange={(e) => setPlantFetilizerFreq(e.target.value)}
        />
      </label>

      <label htmlFor="plant-fertilizer-dose">
        <span>Zalecana dawka nawozu [gr lub ml]</span>
        <input
          type="number"
          name="plant-fertilizer-dose"
          id="plant-fertilizer-dose"
          min="0"
          value={plantFetilizerDose}
          onChange={(e) => setPlantFetilizerDose(e.target.value)}
        />
      </label>
      <button id="add-plant-btn">Zapisz</button>
    </form>
  );
};

export default AddPlantForm;
