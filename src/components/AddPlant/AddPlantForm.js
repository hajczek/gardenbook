import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

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
      <label htmlFor="plant-name">Nazwa rośliny</label>
      <input
        type="text"
        name="plant-name"
        id="plant-name"
        value={plantName}
        onChange={(e) => setPlantName(e.target.value)}
      />
      <label htmlFor="plant-quant">Ilość szt.</label>
      <input
        type="number"
        name="plant-quant"
        id="plant-quant"
        value={plantQuant}
        onChange={(e) => setPlantQuant(e.target.value)}
      />

      <label htmlFor="plant-photo">Zdjęcie rośliny</label>
      <input
        type="file"
        name="plant-photo"
        id="plant-photo"
        filename={plantPhoto}
        onChange={(e) => setPlantPhoto(e.target.value)}
        placeholder="Wybierz plik ze zdjęciem"
      />
      <FontAwesomeIcon icon={faDownload} />
      <label htmlFor="plant-watering-freq">
        Częstotoliwość podlewania [co ile dni]:
      </label>
      <input
        type="number"
        name="plant-watering-freq"
        id="plant-watering-freq"
        min="0"
        value={plantWateringFreq}
        onChange={(e) => setPlantWateringFreq(e.target.value)}
      />
      <label htmlFor="plant-fetilizer">Rodzaj nawozu</label>
      <input
        type="text"
        name="plant-fetilizer"
        id="plant-fetilizer"
        value={plantFetilizer}
        onChange={(e) => setPlantFetilizer(e.target.value)}
      />

      <label htmlFor="plant-fetilizer-freq">
        Częstotoliwość nawożenia [ile razy w roku]:
      </label>
      <input
        type="number"
        name="plant-fetilizer-freq"
        id="plant-fetilizer-freq"
        min="0"
        value={plantFetilizerFreq}
        onChange={(e) => setPlantFetilizerFreq(e.target.value)}
      />
      <label htmlFor="plant-price">Cena jednej rośliny [zł]</label>
      <input
        type="number"
        name="plant-price"
        id="plant-price"
        min="0"
        value={plantPrice}
        onChange={(e) => setPlantPrice(e.target.value)}
      />

      <label htmlFor="plant-fertilizer-dose">
        Zalecana dawka nawozu [gr lub ml]
      </label>
      <input
        type="number"
        name="plant-fertilizer-dose"
        id="plant-fertilizer-dose"
        min="0"
        value={plantFetilizerDose}
        onChange={(e) => setPlantFetilizerDose(e.target.value)}
      />
      <button id="add-plant-btn">Zapisz</button>
    </form>
  );
};

export default AddPlantForm;
