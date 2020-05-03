import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import EditedWork from "./EditedWork";

const PlannedWorkList = (props) => {
  const { plannedWorks } = useContext(GlobalContext);
  const { deleteWork } = useContext(GlobalContext);
  const [searchFrom, setSearchFrom] = useState("2020-01-01");
  const [searchTo, setSearchTo] = useState("2222-12-31");
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [editWork, setEditWork] = useState(false);
  const [workId, setWorkId] = useState();

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

  return editWork === false ? (
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
            <th>Alarm</th>
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
              // Add special class name for done or not done work
              className={
                plannedWork.workDone === true
                  ? "workDone"
                  : plannedWork.workDone === false &&
                    plannedWork.workTerm < addedDateFunction()
                  ? "workNotDone"
                  : plannedWork.workDone === false &&
                    plannedWork.workTerm > addedDateFunction()
                  ? ""
                  : ""
              }
            >
              <td id="work-id" align="center">
                {plannedWork.id}
              </td>
              <td id="work-name">{plannedWork.workName}</td>
              <td id="work-term" align="center">
                {plannedWork.workTerm}
              </td>
              <td id="work-alert" align="center">
                {plannedWork.workAlert}
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
                {/* <NavLink
                  to="/edycja-pracy"
                  title="Edycja pracy"
                  exact={true}
                  activeClassName="is-active"
                > */}
                <FontAwesomeIcon
                  id="edit-work"
                  icon={faEdit}
                  // This action opens EditedWork component and set workData to this component
                  onClick={(e) => {
                    setEditWork(true);
                    setWorkId(plannedWork.id);
                  }}
                />
                {/* </NavLink> */}
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
        <h3>RAZEM PRAC:</h3> Zaplanowanych: {plannedWorks.length} |
        Niewykonanych: {countNumOfNotDoneWork()} | Wykonanych:{" "}
        {countNumOfDoneWork()} | Do wykonania: {countNumOfPlannedWork()}
      </div>
    </div>
  ) : (
    <EditedWork workid={workId} />
  );
};

export default PlannedWorkList;
