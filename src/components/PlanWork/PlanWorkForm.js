import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const PlanWorkForm = () => {
  const [workName, setWorkName] = useState("");
  const [workMatName, setWorkMatName] = useState("");
  const [workMatQuant, setWorkMatQuant] = useState(0);
  const [workDate, setWorkDate] = useState("");
  const [workMatUnit, setWorkMatUnit] = useState("");
  const [workDetails, setWorkDetails] = useState("");

  const { addWork } = useContext(GlobalContext);

  function onSubmit(e) {
    const newWork = {
      id: Math.floor(Math.random() * 100000000),
      workName,
      workMaterial: { workMatName, workMatQuant, workMatUnit },
      workDate,
      workMatUnit,
      workDetails,
    };

    addWork(newWork);
    console.log(newWork);

    e.preventDefault();
  }
  return (
    <form id="plan-work" action="#" onSubmit={onSubmit}>
      <label htmlFor="work-name">Nazwa planowanej pracy</label>
      <input
        type="text"
        name="work-name"
        value={workName}
        onChange={(e) => setWorkName(e.target.value)}
      />

      <label htmlFor="work-material">Potrzebny materiał</label>
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

      <label htmlFor="work-mat-quant">Ilość</label>
      <input
        type="number"
        name="work-mat-quant"
        id="work-mat-quant"
        min="0"
        placeholder="0"
        value={workMatQuant}
        onChange={(e) => setWorkMatQuant(e.target.value)}
      />

      <label htmlFor="work-mat-unit">Jednostka</label>
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

      <label htmlFor="work-date">Wybierz termin</label>
      <input
        type="date"
        name="work-date"
        id="work-date"
        value={workDate}
        onChange={(e) => setWorkDate(e.target.value)}
      />
      <span id="add-work-term">Dodaj termin do kalendarza &raquo;</span>

      <label htmlFor="work-details">Uwagi</label>
      <textarea
        id="work-details"
        name="work-details"
        value={workDetails}
        onChange={(e) => setWorkDetails(e.target.value)}
      ></textarea>

      <button id="plan-work-btn">Zapisz</button>
    </form>
  );
};

export default PlanWorkForm;
