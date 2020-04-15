import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const PlannedWorkList = () => {
  const { plannedWorks } = useContext(GlobalContext);

  // Delete all position from table and from database
  function deleteWork(e) {
    console.log("Delete");
    e.preventDefault();
  }

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
            <tr>
              <td>{plannedWork.id}</td>
              <td>{plannedWork.workName}</td>
              <td>{plannedWork.workTerm}</td>
              <td>{plannedWork.workDone === false ? "no" : "yes"}</td>
              <td>{plannedWork.workTime}</td>
              <td>{plannedWork.workValue}</td>
              <td>
                {plannedWork.workMaterial.workMatName}
                <span className="mat">
                  {plannedWork.workMaterial.workMatQuant}
                </span>
                {plannedWork.workMaterial.workMatUnit}
              </td>
              <td>{plannedWork.workDetails}</td>
              <td>
                <FontAwesomeIcon
                  id="delete-work"
                  icon={faTrash}
                  onClick={deleteWork}
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
