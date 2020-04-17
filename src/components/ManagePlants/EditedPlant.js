import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
// Function for get id of edited plant
import { getPlantId } from "./ExistedPlantsList";

const EditedPlant = () => {
  const { plants } = useContext(GlobalContext);
  const { addPlant } = useContext(GlobalContext);

  const [plantName, setPlantName] = useState("");
  const [plantPhoto, setPlantPhoto] = useState("");
  const [plantQuant, setPlantQuant] = useState(0);
  const [plantPrice, setPlantPrice] = useState(0);
  const [plantFertilizer, setPlantFertilizer] = useState("");
  const [plantFertilizerDose, setPlantFertilizerDose] = useState(0);
  const [plantFertilizerFreq, setPlantFertilizerFreq] = useState(0);
  const [plantWateringFreq, setPlantWateringFreq] = useState(0);
  const [addedDate] = useState(addedDateFunction());

  /* Needed functionality: 
  1. onChangePlant() - to change data from edited plant in database
  */

  function onSubmit(e) {
    console.log(plantName);
    console.log(plantPhoto);
    console.log(plantQuant);
    console.log(plantPrice);
    console.log(plantFertilizer);
    console.log(plantFertilizerDose);
    console.log(plantFertilizerFreq);
    console.log(plantWateringFreq);
    console.log(addedDate);

    const newPlant = {
      id: Math.floor(Math.random() * 100000000),
      plantName,
      plantQuant,
      plantPhoto,
      plantWateringFreq,
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
    <div className="content">
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <th>Lp.</th>
              <th>Nazwa</th>
              <th>Zdjęcie</th>
              <th>
                Ilość
                <br />
                [szt.]
              </th>
              <th>
                Cena jedn.
                <br />
                [zł.]
              </th>
              <th>Nawóz</th>
              <th>
                Dawka
                <br />
                [ml lub gr]
              </th>
              <th colSpan="2">
                Częstotliwość
                <br /> nawożenia / podlewania
                <br />
                [na rok] / [na tydz.]
              </th>
            </tr>
            {plants
              .filter((plant) => plant.id === getPlantId())
              .map((editedPlant) => {
                return (
                  <tr key={editedPlant.id}>
                    <td>{editedPlant.id}</td>
                    <td>
                      <input
                        type="string"
                        id="plant-name"
                        name="plant-name"
                        value={editedPlant.plantName}
                        onChange={(e) => setPlantName(e.target.value)}
                        size="15"
                      />
                    </td>
                    <td>
                      <img
                        src={editedPlant.plantPhoto}
                        id="plant-photoe"
                        alt={editedPlant.plantName}
                        style={{ maxHeight: 100 }}
                      />
                      <input
                        type="file"
                        name="plant-photo"
                        id="plant-photo"
                        filename={editedPlant.plantPhoto}
                        onChange={(e) => setPlantPhoto(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="plant-quant"
                        name="plant-quant"
                        value={editedPlant.plantQuant}
                        onChange={(e) => setPlantQuant(e.target.value)}
                        size="3"
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="plant-price"
                        name="plant-price"
                        value={editedPlant.plantPrice}
                        onChange={(e) => setPlantPrice(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="string"
                        id="plant-fertilizer"
                        name="plant-fertilizer"
                        value={editedPlant.plantFetilizer}
                        onChange={(e) => setPlantFertilizer(e.target.value)}
                        size="15"
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="plant-fertilizer-dose"
                        name="plant-fertilizer-dose"
                        value={editedPlant.plantFetilizerDose}
                        onChange={(e) => setPlantFertilizerDose(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="plant-fertilizer-freq"
                        name="plant-fertilizer-freq"
                        value={editedPlant.plantFetilizerFreq}
                        onChange={(e) => setPlantFertilizerFreq(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="plant-watering-freq"
                        name="plant-watering-freq"
                        value={editedPlant.plantWateringFreq}
                        onChange={(e) => setPlantWateringFreq(e.target.value)}
                      />
                    </td>
                    <td>
                      <button id="changes-plants-btn">Zapisz</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default EditedPlant;
