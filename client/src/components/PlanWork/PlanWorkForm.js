import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";

export const PlanWorkForm = () => {
  const [workName, setWorkName] = useState("");
  const [workTerm, setWorkTerm] = useState("");
  const [workAlert, setWorkAlert] = useState("");
  const [workMatName, setWorkMatName] = useState("");
  const [workMatQuant, setWorkMatQuant] = useState(0);
  const [workMatUnit, setWorkMatUnit] = useState("");
  const [workDetails, setWorkDetails] = useState("");
  const [addedDate] = useState(addedDateFunction());
  const [workDone] = useState(false);
  const [workTime] = useState(0);
  const [workValue] = useState(0);

  const { addWork } = useContext(GlobalContext);

  function onSubmit(e) {
    const newWork = {
      id: Math.floor(Math.random() * 100000000),
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

    addWork(newWork);
    console.log(newWork);

    e.preventDefault();
  }
  return (
    <form id="plan-work" action="#" onSubmit={onSubmit}>
      <label htmlFor="work-name">
        <span>Tytuł planowanej pracy</span>
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
          <option value="azofoska">Azofoska</option>
          <option value="kora">Kora</option>
          <option value="nawoz-do-trawnika">Nawóz do trawnika</option>
        </select>
      </label>
      <label htmlFor="work-term">
        <span>Termin realizacji</span>
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
        <span>Czas dla alarmu</span>
        <input
          type="time"
          name="work-alert"
          id="work-alert"
          value={workAlert}
          onChange={(e) => setWorkTerm(e.target.value)}
          placeholder="00:00"
        />
        {/* <span id="add-work-term">Dodaj termin do kalendarza &raquo;</span> */}
      </label>

      <label htmlFor="work-mat-unit">
        <span>Jednostka maateriału</span>
        <select
          name="work-mat-unit"
          id="work-mat-unit"
          value={workMatUnit}
          onChange={(e) => setWorkMatUnit(e.target.value)}
        >
          <option value="wybierz">Wybierz jednostkę</option>
          <option value="litr">Litr</option>
          <option value="kg">Kg</option>
        </select>
      </label>
      <label htmlFor="work-details">
        <span>Uwagi</span>
        <textarea
          rows="4"
          cols="91"
          id="work-details"
          name="work-details"
          value={workDetails}
          onChange={(e) => setWorkDetails(e.target.value)}
        ></textarea>
      </label>
      <button id="plan-work-btn">Zapisz</button>
    </form>
  );
};

export default PlanWorkForm;
