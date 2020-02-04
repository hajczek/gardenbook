import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ExistedPlantsList = () => {
  return (
    <div className="content">
      <table>
        <tr>
          <td colSpan="11">
            <h3>Lista roślin</h3>
          </td>
        </tr>
        <tr>
          <th>Lp.</th>
          <th>Nazwa</th>
          <th>Zdjęcie</th>
          <th>Ilość [szt.]</th>
          <th>Cena jedn. [zł.]</th>
          <th>Wartość [zł]</th>
          <th>Nawóz</th>
          <th>Dawka</th>
          <th colspan="2">
            Częstotliwość nawożenia [na rok] / podlewania[na tydz.]
          </th>
          <th>Usuń</th>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <span className="edited-value" id="plant-name">
              Floks 'biały'
            </span>
          </td>
          <td>
            <img src="#" id="plant-image" alt="Floks 'biały'" />
          </td>
          <td>
            <span className="edited-value" id="plant-quantity">
              20
            </span>
          </td>
          <td>
            <span className="edited-value" id="plant-price">
              5,00
            </span>
          </td>
          <td>100,00</td>
          <td>
            <span className="edited-value" id="plant-fertilzer">
              Azofoska
            </span>
          </td>
          <td>
            <span className="edited-value" id="plant-feltirize-dose">
              5
            </span>
          </td>
          <td>
            <span className="edited-value" id="plant-feltirize-frequency">
              3
            </span>
          </td>
          <td>
            <span className="edited-value" id="plant-watering-frequency">
              1
            </span>
          </td>
          <td>
            <FontAwesomeIcon id="delete-plant" icon={faTrash} />
          </td>
        </tr>
      </table>
      <button id="submit-changes-in-plants">Zapisz</button>
    </div>
  );
};

export default ExistedPlantsList;
