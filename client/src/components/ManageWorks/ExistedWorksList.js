import React, { useContext, useState, useEffect } from "react";
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
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [filteredWorks, setFilteredWorks] = useState([]);

  function countNumOfDoneWork() {
    let numOfDoneWork = 0;
    for (let i = 0; i < plannedWorks.length; i++) {
      if (plannedWorks[i].workDone === true) numOfDoneWork += 1;
    }
    return numOfDoneWork;
  }

  function countNumOfPlannedWork() {
    let numOfPlannedWork = 0;
    for (let i = 0; i < plannedWorks.length; i++) {
      if (new Date(plannedWorks[i].workTerm) > new Date())
        numOfPlannedWork += 1;
    }
    return numOfPlannedWork;
  }

  function countNumOfNotDoneWork() {
    let numOfNotDonedWork = 0;
    for (let i = 0; i < plannedWorks.length; i++) {
      if (
        new Date(plannedWorks[i].workTerm) < new Date() &&
        plannedWorks[i].workDone === false
      )
        numOfNotDonedWork += 1;
    }
    return numOfNotDonedWork;
  }

  useEffect(() => {
    setFilteredWorks(
      plannedWorks.filter(
        (plannedWork) =>
          new Date(plannedWork.workTerm) > new Date(searchFrom) &&
          new Date(plannedWork.workTerm) < new Date(searchTo)
      )
    );
  }, [searchFrom, searchTo, plannedWorks]);

  return (
    <div className="contentList">
      <div className="searchForWorks">
        Wybierz okres od
        <input
          id="date-from"
          type="date"
          onChange={(e) => setSearchFrom(e.target.value)}
        />
        do
        <input
          type="date"
          id="date-to"
          onChange={(e) => setSearchTo(e.target.value)}
        />
      </div>
      <table>
        <tbody>
          <tr>
            <td colSpan="10">
              <h3>Lista zadań</h3>
            </td>
          </tr>
          <tr>
            <th>Lp.</th>
            <th className="longTd">Tytuł</th>
            <th className="longTd">Termin</th>
            <th>Status</th>
            <th className="longTd">
              Czas pracy
              <br />[ il. godz.]
            </th>
            <th className="longTd">
              Wartość
              <br />
              [zł.]
            </th>
            <th className="longTd">Materiał</th>
            <th className="longTd">Uwagi</th>
            <th>Edytuj</th>
            <th>Usuń</th>
          </tr>

          {filteredWorks.map((plannedWork) => (
            <tr
              key={plannedWork.id}
              className={plannedWork.workDone === true ? "workDone" : ""}
            >
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
      <div className="summaryBox">
        <h3>RAZEM:</h3> Il. zaplanowanych prac: {plannedWorks.length} |
        Niewykonanych: {countNumOfNotDoneWork()} | Wykonanych:{" "}
        {countNumOfDoneWork()} | Do wykonania: {countNumOfPlannedWork()}
      </div>
    </div>
  );
};

export default PlannedWorkList;
