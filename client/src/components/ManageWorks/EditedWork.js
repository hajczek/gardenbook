import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import EditedWorkHead from "./EditedWorkHead";
import addedDateFunction from "../../common/AddedDateFunction";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";
import DisplayInfo from "../../common/DisplayInfo";

const EditedWork = (props) => {
  const { works } = useContext(GlobalContext);
  const { editWork } = useContext(GlobalContext);

  // Handle for actual data
  let actualWorkName;
  let actualWorkTerm;
  let actualWorkAlert;
  let actualWorkDone;
  let actualWorkTime;
  let actualWorkValue;
  let actualWorkDetails;
  let actualWorkMatName;
  let actualWorkMatQuant;
  let actualWorkMatUnit;

  // Get actual user data and sets for works
  {
    works
      .filter((work) => work._id === props.workid)
      .map((work) => {
        actualWorkName = work.workName;
        actualWorkTerm = work.workTerm;
        actualWorkAlert = work.workAlert;
        actualWorkDone = work.workDone;
        actualWorkTime = work.workTime;
        actualWorkValue = work.workValue;
        actualWorkDetails = work.workDetails;
        actualWorkMatName = work.workMatName;
        actualWorkMatQuant = work.workMatQuant;
        actualWorkMatUnit = work.workMatUnit;
      });
  }

  const [workName, setWorkName] = useState(actualWorkName);
  const [workTerm, setWorkTerm] = useState(actualWorkTerm);
  const [workAlert, setWorkAlert] = useState(actualWorkAlert);
  const [workDone, setWorkDone] = useState(actualWorkDone);
  const [workTime, setWorkTime] = useState(actualWorkTime);
  const [workValue, setWorkValue] = useState(actualWorkValue);
  const [workDetails, setWorkDetails] = useState(actualWorkDetails);
  const [workMatName, setWorkMatName] = useState(actualWorkMatName);
  const [workMatQuant, setWorkMatQuant] = useState(actualWorkMatQuant);
  const [workMatUnit, setWorkMatUnit] = useState(actualWorkMatUnit);
  const [addedDate] = useState(addedDateFunction());
  const [errorInfo, setErrorInfo] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const saveNewData = () => {
    // Info about set new data in database
    setUserInfo("Dane zostały zaktualizowane.");
    // Clear info about error
    setErrorInfo("");
    document.querySelector(".edit-form").style.display = "none";
  };

  function onSubmit(e) {
    const editWorkDetails = {
      id: props.workid,
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

    // Check if input field for name or term is empty
    document.getElementById("work-name").value === "" ||
    document.getElementById("work-term").value === ""
      ? setErrorInfo("Uzupełnij wymagane pola: tytuł, termin")
      : // If yes, put new date for work in database
        saveNewData();

    editWork(editWorkDetails);
    console.log(editWorkDetails);

    // e.preventDefault();
  }

  return (
    <>
      <p>Zmień ustawienia wybranego zadania.</p>
      <DisplayErrorInfo info={errorInfo} />
      <DisplayInfo info={userInfo} />
      <div className="contentEdit">
        <form className="edit-form" onSubmit={onSubmit}>
          <table>
            <tbody>
              <EditedWorkHead />
              <tr key={props.workid}>
                <td>
                  <input
                    type="string"
                    id="work-name"
                    name="work-name"
                    value={workName}
                    onChange={(e) => setWorkName(e.target.value)}
                    size="15"
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
                    type="time"
                    id="work-alert"
                    name="work-alert"
                    value={workAlert}
                    onChange={(e) => setWorkAlert(e.target.value)}
                  />
                </td>
                <td align="center">
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
                    className="inputNum"
                    type="number"
                    id="work-time"
                    name="work-time"
                    value={workTime}
                    onChange={(e) => setWorkTime(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="inputNum"
                    type="number"
                    id="work-value"
                    name="work-value"
                    value={workValue}
                    onChange={(e) => setWorkValue(e.target.value)}
                  />
                </td>
                <td>
                  <label htmlFor="work-material">Nazwa</label>
                  <input
                    type="string"
                    id="work-material"
                    name="work-material"
                    value={workMatName}
                    onChange={(e) => setWorkMatName(e.target.value)}
                    size="15"
                  />
                  <label htmlFor="work-mat-quant">Ilość</label>
                  <input
                    className="inputNum"
                    type="number"
                    id="work-mat-quant"
                    name="work-mat-quant"
                    value={workMatQuant}
                    onChange={(e) => setWorkMatQuant(e.target.value)}
                  />
                  <label htmlFor="work-mat-unit">Jedn.</label>
                  <input
                    className="inputNum"
                    type="string"
                    id="work-mat-unit"
                    name="work-mat-unit"
                    value={workMatUnit}
                    onChange={(e) => setWorkMatUnit(e.target.value)}
                  />
                </td>
                <td>
                  <textarea
                    id="work-details"
                    name="work-details"
                    value={workDetails}
                    onChange={(e) => setWorkDetails(e.target.value)}
                  ></textarea>
                </td>
                <td align="center">
                  <button className="editBtn" id="change-works-btn">
                    Zapisz
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default EditedWork;
