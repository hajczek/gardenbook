import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
// Function for get id of edited mayerial
import { getMaterialId } from "./ExistedMaterialsList";

const EditedMaterial = () => {
  const { materials } = useContext(GlobalContext);
  const { editMaterial } = useContext(GlobalContext);

  const [materialName, setMaterialName] = useState("");
  const [materialPhoto, setMaterialPhoto] = useState("");
  const [materialQuant, setMaterialQuant] = useState(0);
  const [materialUnit, setMaterialUnit] = useState("");
  const [materialPrice, setMaterialPrice] = useState(0);
  const [addedDate] = useState(addedDateFunction());

  function onSubmit(e) {
    const editMaterialDetails = {
      id: document.getElementById("material-id").textContent,
      materialName,
      materialPhoto,
      materialQuant,
      materialUnit,
      materialPrice,
      addedDate,
    };

    editMaterial(editMaterialDetails);
    console.log(editMaterialDetails);

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
              <th>Ilość</th>
              <th>Jedn.</th>
              <th>Cena jedn. [zł.]</th>
            </tr>

            {materials
              .filter((material) => material.id === getMaterialId())
              .map((editedMaterial) => {
                return (
                  <tr key={editedMaterial.id}>
                    <td id="material-id">{editedMaterial.id}</td>
                    <td>
                      <input
                        type="string"
                        id="material-name"
                        name="material-name"
                        value={editedMaterial.materialName}
                        onChange={(e) =>
                          setMaterialName(
                            (editedMaterial.materialName = e.target.value)
                          )
                        }
                        size="15"
                      />
                    </td>
                    <td>
                      <img
                        src={editedMaterial.materialPhoto}
                        id="material-photo"
                        alt={editedMaterial.materialName}
                        style={{ maxHeight: 100 }}
                      />
                      <input
                        type="file"
                        name="material-photo"
                        id="material-photo"
                        filename={editedMaterial.materialPhoto}
                        onChange={(e) =>
                          setMaterialPhoto(
                            (editedMaterial.materialPhoto = e.target.value)
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="material-quant"
                        name="material-quant"
                        value={editedMaterial.materialQuant}
                        onChange={(e) =>
                          setMaterialQuant(
                            (editedMaterial.materialQuant = e.target.value)
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="string"
                        id="material-unit"
                        name="material-unit"
                        value={editedMaterial.materialUnit}
                        onChange={(e) =>
                          setMaterialUnit(
                            (editedMaterial.materialUnit = e.target.value)
                          )
                        }
                        size="10"
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="material-price"
                        name="material-price"
                        value={editedMaterial.materialPrice}
                        onChange={(e) =>
                          setMaterialPrice(
                            (editedMaterial.materialPrice = e.target.value)
                          )
                        }
                      />
                    </td>
                    <td>
                      <button id="changes-materials-btn">Zapisz</button>
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

export default EditedMaterial;
