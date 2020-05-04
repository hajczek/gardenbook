import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import EditedWork from "./EditedWork";
import ExistedWorksListHead from "./ExistedWorksListHead";
import ExistedWorksSummary from "./ExistedWorksSummary";

const PlannedWorkList = (props) => {
  const { plannedWorks } = useContext(GlobalContext);
  const { deleteWork } = useContext(GlobalContext);
  const [searchFrom, setSearchFrom] = useState("2020-01-01");
  const [searchTo, setSearchTo] = useState("2222-12-31");
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [editWork, setEditWork] = useState(false);
  const [workId, setWorkId] = useState();

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
    <>
    <p>Edytuj lub usuń wybrane zadania.</p>
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
          <ExistedWorksListHead />

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
                <FontAwesomeIcon
                  id="edit-work"
                  icon={faEdit}
                  // This action opens EditedWork component and set work data to edit form
                  onClick={(e) => {
                    setEditWork(true);
                    setWorkId(plannedWork.id);
                  }}
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
      <ExistedWorksSummary />
    </div>
    </>
  ) : (
    <EditedWork workid={workId} />
  );
};

export default PlannedWorkList;
