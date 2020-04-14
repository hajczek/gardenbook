import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const PlannedWorkList = () => {
  const [workName, setWorkName] = useState("Cięcie krzewów");
  const [workTerm, setWorkTerm] = useState("2020-05-01");
  const [workDone, setWorkDone] = useState(false);
  const [workTime, setWorkTime] = useState(0);
  const [workValue, setWorkValue] = useState(0);

  /* Needed functionality: 
  1. onSubmit() - set data from form to database
  2. deleteWork() - remove work from table and database
  3. state for work name and work date must be taken from database to display on table
  */

  function onSubmit(e) {
    console.log(workName);
    console.log(workTerm);
    console.log(workDone);
    console.log(workTime);
    console.log(workValue);

    e.preventDefault();
  }

  // Delete all position from table and from database
  function deleteWork(e) {
    console.log("Delete");
    e.preventDefault();
  }

  return (
    <div className="content">
      <form action="" id="work-done-form" onSubmit={onSubmit}>
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
              <th>Czas pracy [godz.]</th>
              <th>Wartość [zł.]</th>
              <th>Usuń</th>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <input
                  type="string"
                  id="work-name"
                  name="work-name"
                  value={workName}
                  onChange={(e) => setWorkName(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="date"
                  id="work-term"
                  name="work-term"
                  value={workTerm}
                  onChange={(e) => setWorkTerm(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  id="work-done"
                  name="work-done"
                  checked={workDone}
                  onChange={(e) => setWorkDone(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  id="work-time"
                  name="work-time"
                  checked={workTime}
                  onChange={(e) => setWorkTime(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  id="work-value"
                  name="work-value"
                  checked={workValue}
                  onChange={(e) => setWorkValue(e.target.value)}
                />
              </td>
              <td>
                <FontAwesomeIcon
                  id="delete-work"
                  icon={faTrash}
                  onClick={deleteWork}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button id="change-works-btn">Zapisz</button>
      </form>
    </div>
  );
};

export default PlannedWorkList;
