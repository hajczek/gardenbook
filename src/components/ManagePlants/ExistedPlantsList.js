import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ExistedPlantsList = () => {
  const [plantName, setPlantName] = useState("Floks biały");
  const [plantPhoto, setPlantPhoto] = useState(
    "https://www.futuregardens.pl/uploads/fotosik/images8/2687/7b1028f302362bcb.jpg"
  );
  const [plantQuant, setPlantQuant] = useState(20);
  const [plantPrice, setPlantPrice] = useState(5);
  const [plantFertilizer, setPlantFertilizer] = useState("Azofoska");
  const [plantFertilizerDoze, setPlantFertilizerDoze] = useState(5);
  const [plantFertilizerFreq, setPlantFertilizerFreq] = useState(3);
  const [plantWateringFreq, setPlantWateringFreq] = useState(1);

  /* Needed functionality: 
  1. onSubmit() - set data from form to database
  2. plantValue() - Count plants value with use quantity and price of price
  3. deletePlant() - Delete all position from table and from database
  4. for plant name, photo, quantity, price, fertilizer, fertilizer doze, frequence and watering frequence we need take data from database to display in table
  */

  function onSubmit(e) {
    console.log(plantName);
    console.log(plantPhoto);
    console.log(plantQuant);
    console.log(plantPrice);
    console.log(plantFertilizer);
    console.log(plantFertilizerDoze);
    console.log(plantFertilizerFreq);
    console.log(plantWateringFreq);

    e.preventDefault();
  }

  // Count plants value with use quantity and price of price
  function plantValue() {
    return plantQuant * plantPrice;
  }

  // Delete all position from table and from database
  function deletePlant(e) {
    console.log("Delete");
    e.preventDefault();
  }

  return (
    <div className="content">
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <td colSpan="11">
                <h3>Lista roślin</h3>
              </td>
            </tr>
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
              <th>
                Wartość
                <br />
                [zł]
              </th>
              <th>Nawóz</th>
              <th>
                Dawka
                <br />
                [ml/gr]
              </th>
              <th colSpan="2">
                Częstotliwość
                <br /> nawożenia / podlewania
                <br />
                [na rok] / [na tydz.]
              </th>
              <th>Usuń</th>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <input
                  type="string"
                  id="plant-name"
                  name="plant-name"
                  value={plantName}
                  onChange={(e) => setPlantName(e.target.value)}
                  size="15"
                />
              </td>
              <td>
                <img
                  src={plantPhoto}
                  id="plant-image"
                  alt="Floks 'biały'"
                  style={{ maxHeight: 100 }}
                />
                <span>Zmień zdjęcie</span>
                <input
                  type="file"
                  name="plant-photo"
                  id="plant-photo"
                  filename={plantPhoto}
                  onChange={(e) => setPlantPhoto(e.target.value)}
                  placeholder="Wybierz plik ze zdjęciem"
                />
              </td>
              <td>
                <input
                  className="inputNum"
                  type="number"
                  id="plant-quant"
                  name="plant-quant"
                  value={plantQuant}
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
                  value={plantPrice}
                  onChange={(e) => setPlantPrice(e.target.value)}
                />
              </td>
              <td>{plantValue()}</td>
              <td>
                <input
                  type="string"
                  id="plant-fertilizer"
                  name="plant-fertilizer"
                  value={plantFertilizer}
                  onChange={(e) => setPlantFertilizer(e.target.value)}
                  size="15"
                />
              </td>
              <td>
                <input
                  className="inputNum"
                  type="number"
                  id="plant-fertilizer-doze"
                  name="plant-fertilizer-doze"
                  value={plantFertilizerDoze}
                  onChange={(e) => setPlantFertilizerDoze(e.target.value)}
                />
              </td>
              <td>
                <input
                  className="inputNum"
                  type="number"
                  id="plant-fertilizer-freq"
                  name="plant-fertilizer-freq"
                  value={plantFertilizerFreq}
                  onChange={(e) => setPlantFertilizerFreq(e.target.value)}
                />
              </td>
              <td>
                <input
                  className="inputNum"
                  type="number"
                  id="plant-watering-freq"
                  name="plant-watering-freq"
                  value={plantWateringFreq}
                  onChange={(e) => setPlantWateringFreq(e.target.value)}
                />
              </td>
              <td>
                <FontAwesomeIcon
                  id="delete-plant"
                  icon={faTrash}
                  onClick={deletePlant}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button id="changes-plants-btn">Zapisz</button>
      </form>
    </div>
  );
};

export default ExistedPlantsList;
