import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import EditedPlant from "./EditedPlant";
import ExistedPlantsListHead from "./ExistedPlantsListHead";
import ExistedPlantsSummary from "./ExistedPlantsSummary";
import { useIntl } from "react-intl";
import translate from "../../i18n/translate";

const ExistedPlantsList = () => {
  const { plants, getPlants, users } = useContext(GlobalContext);
  const { deletePlant } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [editPlant, setEditPlant] = useState(false);
  const [plantId, setPlantId] = useState();
  const intl = useIntl();

  useEffect(() => {
    getPlants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilteredPlants(
      plants.filter((plant) =>
        plant.plantName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, plants]);

  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  return editPlant === false ? (
    <>
      <p>{translate("edit-plant-info")}</p>
      <div className="contentList">
        <input
          id="search-plant"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder={intl.formatMessage({ id: "search-plant" })}
          className="inputSearch"
        />
        <table className="existed-plant-table">
          <tbody>
            <ExistedPlantsListHead />
            {filteredPlants
              .filter((plant) => plant.userId === userId)
              .map((plant, index) => (
                <tr key={plant._id}>
                  <td align="center">{index + 1}</td>
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
                    <FontAwesomeIcon
                      id="edit-plant"
                      icon={faEdit}
                      plantid={plantId}
                      // Open EditedPlant component and set plantId data to edit form
                      onClick={(e) => {
                        setEditPlant(true);
                        setPlantId(plant._id);
                      }}
                    />
                  </td>
                  <td align="center">
                    <FontAwesomeIcon
                      id="delete-plant"
                      icon={faTrash}
                      onClick={() => deletePlant(plant._id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <ExistedPlantsSummary />
      </div>
    </>
  ) : (
    <EditedPlant plantid={plantId} />
  );
};

export default ExistedPlantsList;
