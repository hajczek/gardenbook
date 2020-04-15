import React, { useState } from "react";

export const PlanWorkForm = () => {
  const [workName, setWorkName] = useState("");
  const [workMaterial, setWorkMaterial] = useState("");
  const [workMatQuant, setWorkMatQuant] = useState(0);
  const [workDate, setWorkDate] = useState("");
  const [workMatUnit, setWorkMatUnit] = useState("");
  const [workDetails, setWorkDetails] = useState("");

  /* Needed function:
    1. addMaterials() - display added materials to planned work at list
    2. checkDate() - can't set date ealier than current date
    3. setDateOnCalendar() - for span with id 'add-work-term' to add term to Google Callendar - function uses Google Callendar API
    4. materialsList() - get materials from database and display as a select option in field 'material'
    5. onSubmit() - save all information from form about new planned work in database
  */

  function onSubmit(e) {
    console.log(workName);
    console.log(workMaterial);
    console.log(workMatQuant);
    console.log(workDate);
    console.log(workMatUnit);
    console.log(workDetails);
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
        value={workMaterial}
        onChange={(e) => setWorkMaterial(e.target.value)}
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
