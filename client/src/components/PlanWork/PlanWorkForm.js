import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";
import DisplayInfo from "../../common/DisplayInfo";

export const PlanWorkForm = () => {
  const { addWork, users, materials, getMaterials } = useContext(GlobalContext);

  const [workName, setWorkName] = useState("");
  const [workTerm, setWorkTerm] = useState("");
  const [workAlert, setWorkAlert] = useState("00:00");
  const [workMatName, setWorkMatName] = useState("");
  const [workMatQuant, setWorkMatQuant] = useState(0);
  const [workMatUnit, setWorkMatUnit] = useState("");
  const [workDetails, setWorkDetails] = useState("");
  const [addedDate] = useState(addedDateFunction());
  const [workDone] = useState(false);
  const [workTime] = useState(0);
  const [workValue] = useState(0);
  const [errorInfo, setErrorInfo] = useState("");
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    getMaterials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addedWork = () => {
    // Display info for user about added plant to list
    setUserInfo("Dodano nowe zadanie.");
    // Clear info about error
    setErrorInfo("");
    // Clear all fields of form
    setWorkName("");
    setWorkTerm("");
    setWorkAlert("");
    setWorkMatName("");
    setWorkMatQuant(0);
    setWorkMatUnit("");
    setWorkDetails("");
  };

  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  function onSubmit(e) {
    const newWork = {
      userId,
      workName,
      workMaterial: { workMatName, workMatQuant, workMatUnit },
      workTerm,
      workAlert,
      workDetails,
      addedDate,
      workDone,
      workTime,
      workValue,
    };

    // Check if input field for name and term is empty
    workName === "" || workTerm === ""
      ? // If no, set info about error
        setErrorInfo("Uzupełnij wymagane pola")
      : // If yes, put new plant in database
        addedWork();

    addWork(newWork);

    e.preventDefault();
  }
  return (
    <>
      <span className="neededFields">Pola oznaczone * są wymagane.</span>
      <DisplayErrorInfo info={errorInfo} />
      <DisplayInfo info={userInfo} />
      <form id="plan-work" action="#" onSubmit={onSubmit}>
        <label htmlFor="work-name">
          <span>Tytuł planowanej pracy *</span>
          <input
            type="text"
            name="work-name"
            value={workName}
            onChange={(e) => setWorkName(e.target.value)}
          />
        </label>
        <label htmlFor="work-material">
          <span>Potrzebny materiał</span>
          <select
            name="work-material"
            id="work-material"
            value={workMatName}
            onChange={(e) => setWorkMatName(e.target.value)}
          >
            <option value="wybierz">Wybierz materiał</option>

            {materials
              .filter((material) => material.userId === userId)
              .map((material, index) => (
                <option key={index} value={material.materialName}>
                  {material.materialName}, dostępna ilość:{" "}
                  {material.materialQuant} {material.materialUnit}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="work-term">
          <span>Termin realizacji *</span>
          <input
            type="date"
            name="work-term"
            id="work-term"
            value={workTerm}
            onChange={(e) => setWorkTerm(e.target.value)}
          />
          {/* <span id="add-work-term">Dodaj termin do kalendarza &raquo;</span> */}
        </label>
        <label htmlFor="work-mat-quant">
          <span>Ilość potrzebnego materiału</span>
          <input
            type="number"
            name="work-mat-quant"
            id="work-mat-quant"
            min="0"
            placeholder="0"
            value={workMatQuant}
            onChange={(e) => setWorkMatQuant(e.target.value)}
          />
        </label>
        <label htmlFor="work-alert">
          <span>Czas alarmu</span>
          <input
            type="time"
            name="work-alert"
            id="work-alert"
            value={workAlert}
            onChange={(e) => setWorkAlert(e.target.value)}
          />
          {/* <span id="add-work-term">Dodaj termin do kalendarza &raquo;</span> */}
        </label>
        <label htmlFor="work-mat-unit">
          <span>Jednostka materiału</span>
          <select
            name="work-mat-unit"
            id="work-mat-unit"
            value={workMatUnit}
            onChange={(e) => setWorkMatUnit(e.target.value)}
          >
            <option value="wybierz">Wybierz jednostkę</option>
            <option value="litr">Litr</option>
            <option value="kg">Kg</option>
            <option value="kg">Szt.</option>
          </select>
        </label>
        <label htmlFor="work-details">
          <span>Uwagi</span>
          <textarea
            rows="4"
            cols="58"
            id="work-details"
            name="work-details"
            value={workDetails}
            onChange={(e) => setWorkDetails(e.target.value)}
          ></textarea>
        </label>
        <button id="plan-work-btn">Zapisz</button>
      </form>
    </>
  );
};

export default PlanWorkForm;
