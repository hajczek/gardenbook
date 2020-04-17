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
            <td colSpan="10">
              <h3>Lista zadań</h3>
            </td>
          </tr>
          <tr>
            <th>Lp.</th>
            <th>Tytuł</th>
            <th>Termin</th>
            <th>Status</th>
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
            <th>Edytuj</th>
            <th>Usuń</th>
          </tr>

          {plannedWorks.map((plannedWork) => (
            <tr key={plannedWork.id}>
              <td align="center">{plannedWork.id}</td>
              <td>{plannedWork.workName}</td>
              <td align="center">{plannedWork.workTerm}</td>
              <td align="center" className="center">
                {plannedWork.workDone === false ? "-" : "+"}
              </td>
              <td align="center">{plannedWork.workTime}</td>
              <td align="right">{plannedWork.workValue.toFixed(2)}</td>
              <td align="center">
                {plannedWork.workMaterial.workMatName}
                <span className="mat">
                  {plannedWork.workMaterial.workMatQuant}
                </span>
                {plannedWork.workMaterial.workMatUnit}
              </td>
              <td>{plannedWork.workDetails}</td>
              <td align="center">
                <FontAwesomeIcon
                  id="edit-work"
                  icon={faEdit}
                  // This must go to EditedWork component and set plannedWork.id to this component
                  onClick={() => console.log(plannedWork.id)}
                />
              </td>
              <td align="center">
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
