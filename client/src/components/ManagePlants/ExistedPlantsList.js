import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import EditedPlant from "./EditedPlant";

const ExistedPlantsList = (props) => {
  const { plants } = useContext(GlobalContext);
  const { deletePlant } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [editPlant, setEditPlant] = useState(false);
  const [plantId, setPlantId] = useState();

  function countNumOfPlants() {
    let numOfPlants = 0;
    for (let i = 0; i < plants.length; i++) {
      numOfPlants += plants[i].plantQuant;
    }
    return numOfPlants;
  }

  function countValueOfAllPlants() {
    let valueOfAllPlants = 0;
    for (let i = 0; i < plants.length; i++) {
      valueOfAllPlants += plants[i].plantQuant * plants[i].plantPrice;
    }
    return valueOfAllPlants.toFixed(2);
  }

  useEffect(() => {
    setFilteredPlants(
      plants.filter((plant) =>
        plant.plantName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, plants]);

  return editPlant === false ? (
    <div className="contentList">
      <input
        id="search-plant"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Wyszukaj roślinę po nazwie"
        className="inputSearch"
      />
      <table className="existed-plant-table">
        <tbody>
          <tr>
            <td colSpan="11">
              <h3>Lista roślin</h3>
            </td>
          </tr>
          <tr>
            <th>Lp.</th>
            <th className="longTd">Nazwa</th>
            <th className="longTd">Zdjęcie</th>
            <th className="longTd">
              Ilość
              <br />
              [szt.]
            </th>
            <th className="longTd">
              Cena jedn.
              <br />
              [zł.]
            </th>
            <th className="longTd">
              Wartość
              <br />
              [zł]
            </th>
            <th className="longTd">Nawóz</th>
            <th className="longTd">
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

          {filteredPlants.map((plant) => (
            <tr key={plant.id}>
              <td align="center">{plant.id}</td>
              <td id="plant-name">{plant.plantName}</td>
              <td className="longTd" align="center">
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
                {/* <NavLink
                  to="/edycja-rosliny"
                  title="Edycja rosliny"
                  exact={true}
                  activeClassName="is-active"
                > */}
                <FontAwesomeIcon
                  id="edit-plant"
                  icon={faEdit}
                  // This action must open EditedPlant component and set plantData to this component
                  // onClick={() => console.log(plant.id)}
                  onClick={(e) => {
                    setEditPlant(true);
                    setPlantId(plant.id);
                  }}
                />
                {/* </NavLink> */}
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
      <div className="summaryBox">
        <h3>RAZEM:</h3> Gatunków: {plants.length} | Sztuk: {countNumOfPlants()}{" "}
        | Wartość: {countValueOfAllPlants()}
      </div>
    </div>
  ) : (
    <EditedPlant plantid={plantId} />
  );
};

export default ExistedPlantsList;
