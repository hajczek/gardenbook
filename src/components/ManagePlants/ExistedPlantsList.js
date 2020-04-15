import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ExistedPlantsList = () => {
  const { plants } = useContext(GlobalContext);

  // Delete all position from table and from database
  function deletePlant(e) {
    console.log("Delete");
    e.preventDefault();
  }

  return (
    <div className="content">
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
              [ml lub gr]
            </th>
            <th colSpan="2">
              Częstotliwość
              <br /> nawożenia / podlewania
              <br />
              [na rok] / [na tydz.]
            </th>
            <th>Usuń</th>
          </tr>

          {plants.map((plant) => (
            <tr>
              <td>{plant.id}</td>
              <td>{plant.plantName}</td>
              <td>
                <img
                  src={plant.plantPhoto}
                  id="plant-photoe"
                  alt={plant.plantName}
                  style={{ maxHeight: 100 }}
                />
              </td>
              <td>{plant.plantQuant}</td>
              <td>{plant.plantPrice.toFixed(2)}</td>
              <td>{(plant.plantQuant * plant.plantPrice).toFixed(2)}</td>
              <td>{plant.plantFetilizer}</td>
              <td>{plant.plantFetilizerDose}</td>
              <td>{plant.plantFetilizerFreq}</td>
              <td>{plant.plantWateringFreq}</td>
              <td>
                <FontAwesomeIcon
                  id="delete-plant"
                  icon={faTrash}
                  onClick={deletePlant}
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
