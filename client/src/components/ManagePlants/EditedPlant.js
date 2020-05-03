import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";

const EditedPlant = (props) => {
  const { plants } = useContext(GlobalContext);
  const { editPlant } = useContext(GlobalContext);

  const [plantName, setPlantName] = useState("");
  const [plantPhoto, setPlantPhoto] = useState("");
  const [plantQuant, setPlantQuant] = useState(0);
  const [plantPrice, setPlantPrice] = useState(0);
  const [plantFetilizer, setPlantFetilizer] = useState("");
  const [plantFetilizerDose, setPlantFetilizerDose] = useState(0);
  const [plantFetilizerFreq, setPlantFetilizerFreq] = useState(0);
  const [plantWateringFreq, setPlantWateringFreq] = useState(0);
  const [addedDate] = useState(addedDateFunction());

  function onSubmit(e) {
    const editPlantDetails = {
      id: document.getElementById("plant-id").textContent,
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

    editPlant(editPlantDetails);
    console.log(editPlantDetails);

    e.preventDefault();
  }

  return (
    <div className="contentEdit">
      <form id="plant-edit-form" onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <th className="shortTd">Id</th>
              <th>Nazwa</th>
              <th className="longTd">Zdjęcie</th>
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
              <th colSpan="2" className="longTd">
                Częstotliwość
                <br /> nawożenia / podlewania
                <br />
                [na rok] / [na tydz.]
              </th>
            </tr>
            {plants
              .filter((plant) => plant.id === props.plantid)
              .map((editedPlant) => {
                return (
                  <tr key={editedPlant.id}>
                    <td id="plant-id">{editedPlant.id}</td>
                    <td>
                      <input
                        type="string"
                        id="plant-name"
                        name="plant-name"
                        value={editedPlant.plantName}
                        onChange={(e) =>
                          setPlantName((editedPlant.plantName = e.target.value))
                        }
                        size="15"
                      />
                    </td>
                    <td>
                      <img
                        src={editedPlant.plantPhoto}
                        id="plant-photo"
                        alt={editedPlant.plantName}
                        style={{ maxHeight: 100 }}
                      />
                      <input
                        type="file"
                        name="plant-photo"
                        id="plant-photo"
                        filename={editedPlant.plantPhoto}
                        onChange={(e) =>
                          setPlantPhoto(
                            (editedPlant.plantPhoto = e.target.value)
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="plant-quant"
                        name="plant-quant"
                        value={editedPlant.plantQuant}
                        onChange={(e) =>
                          setPlantQuant(
                            (editedPlant.plantQuant = e.target.value)
                          )
                        }
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
                        onChange={(e) =>
                          setPlantPrice(
                            (editedPlant.plantPrice = e.target.value)
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="string"
                        id="plant-fetilizer"
                        name="plant-fetilizer"
                        value={editedPlant.plantFetilizer}
                        onChange={(e) =>
                          setPlantFetilizer(
                            (editedPlant.plantFetilizer = e.target.value)
                          )
                        }
                        size="15"
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="plant-fetilizer-dose"
                        name="plant-fetilizer-dose"
                        value={editedPlant.plantFetilizerDose}
                        onChange={(e) =>
                          setPlantFetilizerDose(
                            (editedPlant.plantFetilizerDose = e.target.value)
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="plant-fetilizer-freq"
                        name="plant-fetilizer-freq"
                        value={editedPlant.plantFetilizerFreq}
                        onChange={(e) =>
                          setPlantFetilizerFreq(
                            (editedPlant.plantFetilizerFreq = e.target.value)
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="plant-watering-freq"
                        name="plant-watering-freq"
                        value={editedPlant.plantWateringFreq}
                        onChange={(e) =>
                          setPlantWateringFreq(
                            (editedPlant.plantWateringFreq = e.target.value)
                          )
                        }
                      />
                    </td>
                    <td>
                      <button className="editBtn" id="changes-plants-btn">
                        Zapisz
                      </button>
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
