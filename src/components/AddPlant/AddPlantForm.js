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
  const [plantWateringFrag, setPlantWateringFrag] = useState(0);
  const [plantFertilizer, setPlantFertilizer] = useState("");
  const [plantFertilizerFreq, setPlantFertilizerFreq] = useState(0);
  const [plantPrice, setPlantPrice] = useState(0);
  const [plantFertilizerDose, setPlantFertilizerDose] = useState(0);
  const [addedDate] = useState(addedDateFunction());

  function onSubmit(e) {
    const newPlant = {
      id: Math.floor(Math.random() * 100000000),
      plantName,
      plantQuant,
      plantPhoto,
      plantWateringFrag,
      plantFertilizer,
      plantFertilizerFreq,
      plantPrice,
      plantFertilizerDose,
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
      <label htmlFor="plant-watering-frequency">
        Częstotoliwość podlewania [co ile dni]:
      </label>
      <input
        type="number"
        name="plant-watering-frequency"
        id="plant-watering-frequency"
        min="0"
        value={plantWateringFrag}
        onChange={(e) => setPlantWateringFrag(e.target.value)}
      />
      <label htmlFor="plant-fertilizer">Rodzaj nawozu</label>
      <input
        type="text"
        name="plant-fertilizer"
        id="plant-fertilizer"
        value={plantFertilizer}
        onChange={(e) => setPlantFertilizer(e.target.value)}
      />

      <label htmlFor="plant-fertilizer-frequency">
        Częstotoliwość nawożenia [ile razy w roku]:
      </label>
      <input
        type="number"
        name="plant-fertilizer-frequency"
        id="plant-fertilizer-frequency"
        min="0"
        value={plantFertilizerFreq}
        onChange={(e) => setPlantFertilizerFreq(e.target.value)}
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
        value={plantFertilizerDose}
        onChange={(e) => setPlantFertilizerDose(e.target.value)}
      />
      <button id="add-plant-btn">Zapisz</button>
    </form>
  );
};

export default AddPlantForm;
