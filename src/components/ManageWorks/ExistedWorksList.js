import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const PlannedWorkList = () => {
  return (
    <div className="content">
      <table>
        <tr>
          <td colspan="7">
            <h3>Lista zaplanowanych prac</h3>
          </td>
        </tr>
        <tr>
          <th>Lp.</th>
          <th>Tytuł pracy</th>
          <th>Termin</th>
          <th>Wykonana</th>
          <th>Czas pracy</th>
          <th>Wartość [zł]</th>
          <th>Usuń</th>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <span className="edited-value" id="work-name">
              Cięcie krzewów
            </span>
          </td>
          <td>
            <span className="edited-value" id="work-term">
              01-05-2020
            </span>
          </td>
          <td>
            <form action="" id="done-work-form">
              <input type="box" id="done-work" />
            </form>
          </td>
          <td>
            <span className="edited-value" id="work-time">
              gg:mm
            </span>
          </td>
          <td>
            <span className="edited-value" id="work-value">
              0,00
            </span>
          </td>
          <td>
            <FontAwesomeIcon id="delete-work" icon={faTrash} />
          </td>
        </tr>
      </table>
      <button id="submit-changes-in-works">Zapisz</button>
    </div>
  );
};

export default PlannedWorkList;
