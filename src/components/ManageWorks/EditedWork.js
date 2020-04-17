import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";

const PlannedWorkList = () => {
  const { plannedWorks } = useContext(GlobalContext);

  const [workName, setWorkName] = useState("Cięcie krzewów");
  const [workTerm, setWorkTerm] = useState("2020-05-01");
  const [workDone, setWorkDone] = useState(false);
  const [workTime, setWorkTime] = useState(0);
  const [workValue, setWorkValue] = useState(0);
  const [workDetails, setWorkDetails] = useState("Uwagi do planowanej pracy");
  const [workMatName, setWorkMatName] = useState("azofoska");
  const [workMatQuant, setWorkMatQuant] = useState(5);
  const [workMatUnit, setWorkMatUnit] = useState("kg");
  const [addedDate] = useState(addedDateFunction());

  const { addWork } = useContext(GlobalContext);

  function onSubmit(e) {
    console.log(workName);
    console.log(workTerm);
    console.log(workDone);
    console.log(workTime);
    console.log(workValue);
    console.log(workDetails);
    console.log(workMatName);
    console.log(workMatQuant);
    console.log(workMatUnit);

    const newWork = {
      id: Math.floor(Math.random() * 100000000),
      workName,
      workMaterial: { workMatName, workMatQuant, workMatUnit },
      workTerm,
      workDone,
      workMatUnit,
      workDetails,
      addedDate,
    };

    addWork(newWork);
    console.log(newWork);

    e.preventDefault();
  }

  return (
    <div className="content">
      <form action="" id="work-done-form" onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <th>Lp.</th>
              <th>Tytuł</th>
              <th>Termin</th>
              <th>Wykonana</th>
              <th>Czas pracy [godz.]</th>
              <th>Wartość [zł.]</th>
              <th>Materiał</th>
              <th>Uwagi</th>
            </tr>
            {plannedWorks
              .filter((work) => work.id === 3)
              .map((editedWork) => {
                return (
                  <tr key={editedWork.id}>
                    <td>{editedWork.id}</td>
                    <td>
                      <input
                        type="string"
                        id="work-name"
                        name="work-name"
                        value={editedWork.workName}
                        onChange={(e) => setWorkName(e.target.value)}
                        size="15"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        id="work-term"
                        name="work-term"
                        value={editedWork.workTerm}
                        onChange={(e) => setWorkTerm(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        id="work-done"
                        name="work-done"
                        checked={editedWork.workDone}
                        onChange={(e) => setWorkDone(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="work-time"
                        name="work-time"
                        value={editedWork.workTime}
                        onChange={(e) => setWorkTime(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="work-value"
                        name="work-value"
                        value={editedWork.workValue}
                        onChange={(e) => setWorkValue(e.target.value)}
                      />
                    </td>
                    <td>
                      <label htmlFor="work-material">Nazwa</label>
                      <input
                        type="string"
                        id="work-material"
                        name="work-material"
                        value={editedWork.workMaterial.workMatName}
                        onChange={(e) => setWorkMatName(e.target.value)}
                        size="15"
                      />
                      <label htmlFor="work-mat-quant">Ilość</label>
                      <input
                        className="inputNum"
                        type="number"
                        id="work-mat-quant"
                        name="work-mat-quant"
                        value={editedWork.workMaterial.workMatQuant}
                        onChange={(e) => setWorkMatQuant(e.target.value)}
                      />
                      <label htmlFor="work-mat-unit">Jedn.</label>
                      <input
                        className="inputNum"
                        type="string"
                        id="work-mat-unit"
                        name="work-mat-unit"
                        value={editedWork.workMaterial.workMatUnit}
                        onChange={(e) => setWorkMatUnit(e.target.value)}
                      />
                    </td>
                    <td>
                      <textarea
                        id="work-details"
                        name="work-details"
                        value={editedWork.workDetails}
                        onChange={(e) => setWorkDetails(e.target.value)}
                      ></textarea>
                    </td>
                    <td>
                      <button id="change-works-btn">Zapisz</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default PlannedWorkList;
