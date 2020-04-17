import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const PlannedWorkList = () => {
  const { plannedWorks } = useContext(GlobalContext);
  const { deleteWork } = useContext(GlobalContext);

  let workData;

  function getWorkData() {
    workData = {
      id: document.getElementById("work-id").textContent,
      workName: document.getElementById("work-name").textContent,
      workTerm: document.getElementById("work-term").textContent,
      workDone: document.getElementById("work-done").textContent,
      workTime: document.getElementById("work-time").textContent,
      workValue: document.getElementById("work-value").textContent,
      workMatName: document.getElementById("work-mat-name").textContent,
      workMatQuant: document.getElementById("work-mat-quant").textContent,
      workMatUnit: document.getElementById("work-mat-unit").textContent,
      workDetails: document.getElementById("work-details").textContent,
    };

    console.log(workData);
    return workData;
  }

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
              <td id="work-id" align="center">
                {plannedWork.id}
              </td>
              <td id="work-name">{plannedWork.workName}</td>
              <td id="work-term" align="center">
                {plannedWork.workTerm}
              </td>
              <td id="work-done" align="center" className="center">
                {plannedWork.workDone === false ? "-" : "+"}
              </td>
              <td id="work-time" align="center">
                {plannedWork.workTime}
              </td>
              <td id="work-value" align="right">
                {plannedWork.workValue.toFixed(2)}
              </td>
              <td align="center">
                <span id="work-mat-name">
                  {plannedWork.workMaterial.workMatName}
                </span>
                <span id="work-mat-quant" className="mat">
                  {plannedWork.workMaterial.workMatQuant}
                </span>
                <span id="work-mat-unit">
                  {plannedWork.workMaterial.workMatUnit}
                </span>
              </td>
              <td id="work-details">{plannedWork.workDetails}</td>
              <td align="center">
                <FontAwesomeIcon
                  id="edit-work"
                  icon={faEdit}
                  // This action must open EditedWork component and set workData to this component
                  // onClick={() => console.log(plannedWork.id)}
                  onClick={() => getWorkData()}
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
