import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

// Export id of edited work item to EditedWork component
export const getWorkId = (id) => {
  id = 3;
  return id;
};

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
                <NavLink
                  to="/edycja-pracy"
                  title="Edycja pracy"
                  exact={true}
                  activeClassName="is-active"
                >
                  <FontAwesomeIcon
                    id="edit-work"
                    icon={faEdit}
                    // This action must open EditedWork component and set workData to this component
                    //onClick={() => console.log(plannedWork.id)}
                    onClick={(e) => getWorkId(plannedWork.id)}
                  />
                </NavLink>
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
