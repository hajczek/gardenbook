import React from "react";

const PlanWorkForm = () => {
  return (
    <form id="plan-work" action="">
      <label htmlFor="name">Nazwa planowanej pracy</label>
      <input type="text" name="name" />

      <label htmlFor="add-material">Potrzebne materiały</label>
      <span id="add-material-btn">+</span>

      <select name="add-material" id="add-material">
        <option value="wybierz">Wybierz materiał i kliknij +</option>
        <option value="azofoska">Azofoska</option>
        <option value="kora">Kora</option>
        <option value="nawoz-do-trawnika">Nawóz do trawnika</option>
      </select>

      <label htmlFor="material-number-for-work">Ilość</label>
      <input
        type="number"
        name="material-number-for-work"
        id="material-number-for-work"
        min="0"
        placeholder="0"
      />

      <span id="add-work-term">Dodaj termin do kalendarza &raquo;</span>

      <label htmlFor="commnents">Uwagi</label>
      <textarea id="comments" name="comments"></textarea>

      <button id="plan-work-btn">Zapisz</button>
    </form>
  );
};

export default PlanWorkForm;
