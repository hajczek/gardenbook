import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

// Export id of edited plant item to EditedPlant component
export const getPlantId = (id) => {
  id = 3;
  return id;
};

const ExistedPlantsList = () => {
  const { plants } = useContext(GlobalContext);
  const { deletePlant } = useContext(GlobalContext);

  return (
    <div className="content">
      <table className="existed-plant-table">
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
              [ml lub gr]
            </th>
            <th colSpan="2">
              Częstotliwość
              <br /> nawożenia / podlewania
              <br />
              [na rok] / [na tydz.]
            </th>
            <th>Edytuj</th>
            <th>Usuń</th>
          </tr>

          {plants.map((plant) => (
            <tr key={plant.id}>
              <td id="plant-id" align="center">
                {plant.id}
              </td>
              <td id="plant-name">{plant.plantName}</td>
              <td align="center">
                <img
                  src={plant.plantPhoto}
                  id="plant-photo"
                  alt={plant.plantName}
                  style={{ maxHeight: 100 }}
                />
              </td>
              <td id="plant-quant" align="center">
                {plant.plantQuant}
              </td>
              <td id="plant-price" align="right">
                {plant.plantPrice.toFixed(2)}
              </td>
              <td align="right">
                {(plant.plantQuant * plant.plantPrice).toFixed(2)}
              </td>
              <td id="plant-fetilizer" align="center">
                {plant.plantFetilizer}
              </td>
              <td id="plant-fetilizer-dose" align="center">
                {plant.plantFetilizerDose}
              </td>
              <td id="plant-fetilizer-freq" align="center">
                {plant.plantFetilizerFreq}
              </td>
              <td id="plant-watering-freq" align="center">
                {plant.plantWateringFreq}
              </td>
              <td align="center">
                <FontAwesomeIcon
                  id="edit-plant"
                  icon={faEdit}
                  // This action must open EditedPlant component and set plantData to this component
                  // onClick={() => console.log(plant.id)}
                  onClick={(e) => getPlantId(plant.id)}
                />
              </td>
              <td align="center">
                <FontAwesomeIcon
                  id="delete-plant"
                  icon={faTrash}
                  onClick={() => deletePlant(plant.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExistedPlantsList;
