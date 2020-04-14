import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ExistedMaterialsList = () => {
  const [materialName, setMaterialName] = useState("Azofoska");
  const [materialQuant, setMaterialQuant] = useState(50);
  const [materialPrice, setMaterialPrice] = useState(2);

  /* Needed functionality: 
    1. onSubmit() - set data from form to database
    2. materialValue() - Count material value with use quantity and price of material
    3. deleteMaterial() - Delete all position from table and from database
    4. material name, quant and price must be get from database to display in table
  */

  function onSubmit(e) {
    console.log(materialName);
    console.log(materialQuant);
    console.log(materialPrice);

    e.preventDefault();
  }

  // Count material value with use quantity and price of material
  function materialValue() {
    return materialQuant * materialPrice;
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
              <th>Ilość [kg/l]</th>
              <th>Cena jedn. [zł.]</th>
              <th>Wartość [zł.]</th>
              <th>Usuń</th>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <input
                  type="string"
                  id="material-name"
                  name="material-name"
                  value={materialName}
                  onChange={(e) => setMaterialName(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  id="material-quant"
                  name="material-quant"
                  value={materialQuant}
                  onChange={(e) => setMaterialQuant(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  id="material-price"
                  name="material-price"
                  value={materialPrice}
                  onChange={(e) => setMaterialPrice(e.target.value)}
                />
              </td>
              <td>
                <span className="edited-value" id="material-value">
                  {materialValue()}
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
          </tbody>
        </table>
        <button id="changes-materials-btn">Zapisz</button>
      </form>
    </div>
  );
};

export default ExistedMaterialsList;
