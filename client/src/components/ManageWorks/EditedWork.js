import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
// Function for get id of edited work
import { getWorkId } from "./ExistedWorksList";

const EditedWork = ({ work }) => {
  const { plannedWorks } = useContext(GlobalContext);
  const { editWork } = useContext(GlobalContext);

  const [workName, setWorkName] = useState("");
  const [workTerm, setWorkTerm] = useState("");
  const [workAlert, setWorkAlert] = useState("");
  const [workDone, setWorkDone] = useState(false);
  const [workTime, setWorkTime] = useState("");
  const [workValue, setWorkValue] = useState(0);
  const [workDetails, setWorkDetails] = useState("");
  const [workMatName, setWorkMatName] = useState("");
  const [workMatQuant, setWorkMatQuant] = useState(0);
  const [workMatUnit, setWorkMatUnit] = useState("");
  const [addedDate] = useState(addedDateFunction());

  function onSubmit(e) {
    const editWorkDetails = {
      id: document.getElementById("work-id").textContent,
      workName,
      workMaterial: {
        workMatName,
        workMatQuant,
        workMatUnit,
      },
      workTime,
      workTerm,
      workAlert,
      workDone,
      workValue,
      workDetails,
      addedDate,
    };

    editWork(editWorkDetails);
    console.log(editWorkDetails);

    e.preventDefault();
  }

  return (
    <div className="contentEdit">
      <form id="work-edit-form" onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <td colSpan="10">
                <h3>Edycja zadania</h3>
              </td>
            </tr>
            <tr>
              <th>Lp.</th>
              <th className="longTd">Tytuł</th>
              <th className="longTd">Termin</th>
              <th>Alarm</th>
              <th align="center">Status</th>
              <th className="longTd">
                Czas pracy
                <br />[ il. godz. ]
              </th>
              <th className="longTd">
                Wartość
                <br />
                [zł.]
              </th>
              <th className="longTd">Materiał</th>
              <th className="longTd">Uwagi</th>
              <th></th>
            </tr>
            {plannedWorks
              .filter((work) => work.id === getWorkId())
              .map((editedWork) => {
                return (
                  <tr key={editedWork.id}>
                    <td id="work-id">{editedWork.id}</td>
                    <td>
                      <input
                        type="string"
                        id="work-name"
                        name="work-name"
                        value={editedWork.workName}
                        onChange={(e) =>
                          setWorkName((editedWork.workName = e.target.value))
                        }
                        size="15"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        id="work-term"
                        name="work-term"
                        value={editedWork.workTerm}
                        onChange={(e) =>
                          setWorkTerm((editedWork.workTerm = e.target.value))
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        id="work-alert"
                        name="work-alert"
                        value={editedWork.workAlert}
                        onChange={(e) =>
                          setWorkAlert((editedWork.workAlert = e.target.value))
                        }
                      />
                    </td>
                    <td align="center">
                      <input
                        type="checkbox"
                        id="work-done"
                        name="work-done"
                        checked={editedWork.workDone}
                        onChange={(e) =>
                          setWorkDone((editedWork.workDone = e.target.value))
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="work-time"
                        name="work-time"
                        value={editedWork.workTime}
                        onChange={(e) =>
                          setWorkTime((editedWork.workTime = e.target.value))
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="inputNum"
                        type="number"
                        id="work-value"
                        name="work-value"
                        value={editedWork.workValue}
                        onChange={(e) =>
                          setWorkValue((editedWork.workValue = e.target.value))
                        }
                      />
                    </td>
                    <td>
                      <label htmlFor="work-material">Nazwa</label>
                      <input
                        type="string"
                        id="work-material"
                        name="work-material"
                        value={editedWork.workMaterial.workMatName}
                        onChange={(e) =>
                          setWorkMatName(
                            (editedWork.workMaterial.workMatName =
                              e.target.value)
                          )
                        }
                        size="15"
                      />
                      <label htmlFor="work-mat-quant">Ilość</label>
                      <input
                        className="inputNum"
                        type="number"
                        id="work-mat-quant"
                        name="work-mat-quant"
                        value={editedWork.workMaterial.workMatQuant}
                        onChange={(e) =>
                          setWorkMatQuant(
                            (editedWork.workMaterial.workMatQuant =
                              e.target.value)
                          )
                        }
                      />
                      <label htmlFor="work-mat-unit">Jedn.</label>
                      <input
                        className="inputNum"
                        type="string"
                        id="work-mat-unit"
                        name="work-mat-unit"
                        value={editedWork.workMaterial.workMatUnit}
                        onChange={(e) =>
                          setWorkMatUnit(
                            (editedWork.workMaterial.workMatUnit =
                              e.target.value)
                          )
                        }
                      />
                    </td>
                    <td>
                      <textarea
                        id="work-details"
                        name="work-details"
                        value={editedWork.workDetails}
                        onChange={(e) =>
                          setWorkDetails(
                            (editedWork.workDetails = e.target.value)
                          )
                        }
                      ></textarea>
                    </td>
                    <td align="center">
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

export default EditedWork;
