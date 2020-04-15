import React, { useState } from "react";

const AccountUserFunctionsBox = () => {
  const [workPlanner, setWorkPlanner] = useState(false);
  const [alertTime, setAlertTime] = useState(1);
  const [gardenPlan, setGardenPlan] = useState(false);
  const [gardenStatistic, setGardenStatistic] = useState(false);
  const [gardenHistory, setGardenHistory] = useState(false);
  const [searchWorkers, setSearchWorkers] = useState(false);
  const [localization, setLocalization] = useState("");

  /* Needed functionality: 
    1. onSubmit() - send to database options setted by user
  */

  function onSubmit(e) {
    console.log(workPlanner);
    console.log(alertTime);
    console.log(gardenPlan);
    console.log(gardenStatistic);
    console.log(gardenHistory);
    console.log(searchWorkers);
    console.log(localization);

    e.preventDefault();
  }

  return (
    <form id="user-functions" onSubmit={onSubmit}>
      <h2>Funkcje / Narzędzia</h2>
      <p>Włącz / Wyłącz wybrane funkcje / narzędzia</p>
      <label htmlFor="work-planner">Planner prac:</label>
      <input
        name="work-planner"
        type="checkbox"
        checked={workPlanner}
        onChange={(e) => setWorkPlanner(e.target.value)}
      />
      <label htmlFor="alert-time">
        Czas dla alertów (ile godzin przed: od 1 do 12):
      </label>
      <input
        name="alert-time"
        type="number"
        min="1"
        max="12"
        value={alertTime}
        onChange={(e) => setAlertTime(e.target.value)}
      />
      <label htmlFor="garden-plan">Plan ogrodu:</label>
      <input
        name="garden-plan"
        type="checkbox"
        checked={gardenPlan}
        onChange={(e) => setGardenPlan(e.target.value)}
      />
      <label htmlFor="garden-statistic">Statystyki:</label>
      <input
        name="garden-statistic"
        type="checkbox"
        checked={gardenStatistic}
        onChange={(e) => setGardenStatistic(e.target.value)}
      />
      <label htmlFor="garden-history">Historia:</label>
      <input
        name="garden-history"
        type="checkbox"
        checked={gardenHistory}
        onChange={(e) => setGardenHistory(e.target.value)}
      />
      <label htmlFor="search-workers">Wyszukiwarka wykonawców:</label>
      <input
        name="search-workers"
        type="checkbox"
        checked={searchWorkers}
        onChange={(e) => setSearchWorkers(e.target.value)}
      />

      <label htmlFor="localizaion">Lokalizacja:</label>
      <input
        name="localizaion"
        type="text"
        value={localization}
        onChange={(e) => setLocalization(e.target.value)}
        placeholder="Wpisz swoją lokalizację"
      />

      <button id="functions-btn">Zapisz zmiany</button>
    </form>
  );
};

export default AccountUserFunctionsBox;
