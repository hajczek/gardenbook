import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ExistedMaterialsList = () => {
  const { materials } = useContext(GlobalContext);

  const [materialName, setMaterialName] = useState("");
  const [materialPhoto, setMaterialPhoto] = useState("");
  const [materialQuant, setMaterialQuant] = useState(0);
  const [materialUnit, setMaterialUnit] = useState("");
  const [materialPrice, setMaterialPrice] = useState(0);

  /* Needed functionality: 
    1. onSubmit() - set data from form to database
    2. materialValue() - Count material value with use quantity and price of material
    3. deleteMaterial() - Delete all position from table and from database
    4. material name, quant and price must be get from database to display in table
  */

  function onSubmit(e) {
    console.log(materialName);
    console.log(materialPhoto);
    console.log(materialQuant);
    console.log(materialUnit);
    console.log(materialPrice);

    e.preventDefault();
  }

  // Delete all position from table and from database
  function deleteMaterial(e) {
    console.log("Delete");
    e.preventDefault();
  }

  return (
    <div className="content">
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <td colSpan="6">
                <h3>Lista materiałów</h3>
              </td>
            </tr>
            <tr>
              <th>Lp.</th>
              <th>Nazwa</th>
              <th>Zdjęcie</th>
              <th>Ilość</th>
              <th>Jedn.</th>
              <th>Cena jedn. [zł.]</th>
              <th>Wartość [zł.]</th>
              <th>Usuń</th>
            </tr>

            {materials.map((material) => (
              <tr key={material.id}>
                <td>{material.id}</td>
                <td>
                  <input
                    type="string"
                    id="material-name"
                    name="material-name"
                    onChange={(e) => setMaterialName(e.target.value)}
                    value={material.materialName}
                    size="15"
                  />
                </td>
                <td>
                  <img
                    src={material.materialPhoto}
                    id="material-photo"
                    alt={material.materialName}
                    style={{ maxHeight: 100 }}
                  />
                  <span>Nowe zdjęcie</span>
                  <input
                    type="file"
                    name="material-photo"
                    id="material-photo"
                    filename={material.materialPhoto}
                    onChange={(e) => setMaterialPhoto(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="inputNum"
                    type="number"
                    id="material-quant"
                    name="material-quant"
                    value={material.materialQuant}
                    onChange={(e) => setMaterialQuant(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="string"
                    id="material-unit"
                    name="material-unit"
                    value={material.materialUnit}
                    onChange={(e) => setMaterialUnit(e.target.value)}
                    size="10"
                  />
                </td>
                <td>
                  <input
                    className="inputNum"
                    type="number"
                    id="material-price"
                    name="material-price"
                    value={material.materialPrice}
                    onChange={(e) => setMaterialPrice(e.target.value)}
                  />
                </td>
                <td>
                  <span className="edited-value" id="material-value">
                    {material.materialQuant * material.materialPrice}
                  </span>
                </td>
                <td>
                  <FontAwesomeIcon
                    id="delete-material"
                    icon={faTrash}
                    onClick={deleteMaterial}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button id="changes-materials-btn">Zapisz</button>
      </form>
    </div>
  );
};

export default ExistedMaterialsList;
