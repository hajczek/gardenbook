import React, { useState } from "react";

export const PlanWorkForm = () => {
  const [name, setName] = useState("");
  const [material, setMaterial] = useState("");
  const [matQuant, setMatQuant] = useState(0);
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");
  const [unit, setUnit] = useState("");

  /* Needed function:
    1. addMaterials() - display added materials to planned work at list
    2. checkDate() - can't set date ealier than current date
    3. addPlannedWork() - save all information about new planned work in database
    4. materialsList() - get materials from database and display as a select option in field 'material'
  */

  function addPlannedWork(e) {
    console.log(name);
    console.log(material);
    console.log(matQuant);
    console.log(unit);
    console.log(date);
    console.log(details);
    e.preventDefault();
  }
  return (
    <form id="plan-work" action="#">
      <label htmlFor="name">Nazwa planowanej pracy</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="material">Potrzebne materiały</label>
      <select
        name="material"
        id="add-material"
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
      >
        <option value="wybierz">Wybierz materiał i kliknij +</option>
        <option value="azofoska">Azofoska</option>
        <option value="kora">Kora</option>
        <option value="nawoz-do-trawnika">Nawóz do trawnika</option>
      </select>

      <label htmlFor="material-quant">Ilość</label>
      <input
        type="number"
        name="material-quant"
        id="material-quant"
        min="0"
        placeholder="0"
        value={matQuant}
        onChange={(e) => setMatQuant(e.target.value)}
      />

      <label htmlFor="unit">Jednostka</label>
      <select
        name="unit"
        id="unit"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      >
        <option value="wybierz">Wybierz jednostkę</option>
        <option value="litr">Litr</option>
        <option value="kg">Kg</option>
      </select>
      <span id="add-material-btn">Dodaj materiał +</span>

      <label htmlFor="add-term">Wybierz termin</label>
      <input
        type="date"
        name="add-term"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <span id="add-work-term">Dodaj termin do kalendarza &raquo;</span>

      <label htmlFor="commnents">Uwagi</label>
      <textarea
        id="comments"
        name="comments"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      ></textarea>

      <button id="plan-work-btn" onClick={addPlannedWork}>
        Zapisz
      </button>
    </form>
  );
};

export default PlanWorkForm;
