import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const PlannedWorkList = () => {
  const { plannedWorks } = useContext(GlobalContext);
  const { deleteWork } = useContext(GlobalContext);

  return (
    <div className="content">
      <table>
        <tbody>
          <tr>
            <td colSpan="7">
              <h3>Lista zaplanowanych prac</h3>
            </td>
          </tr>
          <tr>
            <th>Lp.</th>
            <th>Tytuł</th>
            <th>Termin</th>
            <th>Wykonana</th>
            <th>
              Czas pracy
              <br />[ il. godz.]
            </th>
            <th>
              Wartość
              <br />
              [zł.]
            </th>
            <th>Materiał</th>
            <th>Uwagi</th>
            <th>Usuń</th>
          </tr>

          {plannedWorks.map((plannedWork) => (
            <tr key={plannedWork.id}>
              <td>{plannedWork.id}</td>
              <td>{plannedWork.workName}</td>
              <td>{plannedWork.workTerm}</td>
              <td>{plannedWork.workDone === false ? "-" : "+"}</td>
              <td>{plannedWork.workTime}</td>
              <td>{plannedWork.workValue.toFixed(2)}</td>
              <td>
                {plannedWork.workMaterial.workMatName}
                <span className="mat">
                  {plannedWork.workMaterial.workMatQuant}
                </span>
                {plannedWork.workMaterial.workMatUnit}
              </td>
              <td>{plannedWork.workDetails}</td>
              <td>
                <FontAwesomeIcon id="edit-work" icon={faEdit} />
              </td>
              <td>
                <FontAwesomeIcon
                  id="delete-work"
                  icon={faTrash}
                  onClick={() => deleteWork(plannedWork.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlannedWorkList;
