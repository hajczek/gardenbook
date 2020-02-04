import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ExistedMaterialsList = () => {
  return (
    <div class="content">
      <table>
        <tr>
          <td colspan="6">
            <h3>Lista materiałów</h3>
          </td>
        </tr>
        <tr>
          <th>Lp.</th>
          <th>Nazwa</th>
          <th>Ilość</th>
          <th>Cena jedn. [zł]</th>
          <th>Wartość [zł]</th>
          <th>Usuń</th>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <span className="edited-value" id="material-name">
              Azofoska
            </span>
          </td>
          <td>
            <span className="edited-value" id="material-quantity">
              50
            </span>
            kg
          </td>
          <td>
            <span className="edited-value" id="material-price">
              2,00
            </span>
          </td>
          <td>
            <span className="edited-value" id="material-value">
              100
            </span>
          </td>
          <td>
            <FontAwesomeIcon id="delete-material" icon={faTrash} />
          </td>
        </tr>
      </table>
      <button id="submit-changes-in-materials">Zapisz</button>
    </div>
  );
};

export default ExistedMaterialsList;
