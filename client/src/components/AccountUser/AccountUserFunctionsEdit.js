import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import { getUserId } from "./AccountUserDataBox";

const AccountUserFunctionsEdit = () => {
  const [workPlanner, setWorkPlanner] = useState(false);
  const [alertTime, setAlertTime] = useState(0);
  const [gardenPlan, setGardenPlan] = useState(false);
  const [gardenStatistic, setGardenStatistic] = useState(false);
  const [gardenHistory, setGardenHistory] = useState(false);
  const [searchWorkers, setSearchWorkers] = useState(false);
  const [localization, setLocalization] = useState("");
  const [addedDate] = useState(addedDateFunction());

  const { userData } = useContext(GlobalContext);
  const { editUserData } = useContext(GlobalContext);

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
    console.log(addedDate);

    const userFunctionsNew = {
      id: getUserId(),
      workPlanner,
      alertTime,
      gardenPlan,
      gardenStatistic,
      gardenHistory,
      searchWorkers,
      localization,
      addedDate,
    };

    editUserData(userFunctionsNew);
    console.log(userFunctionsNew);

    e.preventDefault();
  }

  return (
    <form id="user-functions" onSubmit={onSubmit}>
      <h2>Funkcje / Narzędzia</h2>
      <p>Włącz / Wyłącz wybrane funkcje / narzędzia</p>
      {userData
        .filter((data) => data.id === getUserId())
        .map((newSet) => {
          return (
            <div key="user-func-edit">
              <label htmlFor="work-planner">Planner prac:</label>
              <input
                name="work-planner"
                type="checkbox"
                checked={newSet.accountSets.workPlanner}
                onChange={(e) =>
                  setWorkPlanner(
                    (newSet.accountSets.workPlanner = e.target.value)
                  )
                }
              />
              <label htmlFor="alert-time">
                Czas dla alertów (ile godzin przed: od 1 do 12):
              </label>
              <input
                name="alert-time"
                type="number"
                min="1"
                max="12"
                value={newSet.accountSets.alertTime}
                onChange={(e) =>
                  setAlertTime((newSet.accountSets.alertTime = e.target.value))
                }
              />
              <label htmlFor="garden-plan">Plan ogrodu:</label>
              <input
                name="garden-plan"
                type="checkbox"
                checked={newSet.accountSets.gardenPlan}
                onChange={(e) =>
                  setGardenPlan(
                    (newSet.accountSets.gardenPlan = e.target.value)
                  )
                }
              />
              <label htmlFor="garden-statistic">Statystyki:</label>
              <input
                name="garden-statistic"
                type="checkbox"
                checked={newSet.accountSets.gardenStatistic}
                onChange={(e) =>
                  setGardenStatistic(
                    (newSet.accountSets.gardenStatistic = e.target.value)
                  )
                }
              />
              <label htmlFor="garden-history">Historia:</label>
              <input
                name="garden-history"
                type="checkbox"
                checked={newSet.accountSets.gardenHistory}
                onChange={(e) =>
                  setGardenHistory(
                    (newSet.accountSets.gardenHistory = e.target.value)
                  )
                }
              />
              <label htmlFor="search-workers">Wyszukiwarka wykonawców:</label>
              <input
                name="search-workers"
                type="checkbox"
                checked={newSet.accountSets.searchWorkers}
                onChange={(e) =>
                  setSearchWorkers(
                    (newSet.accountSets.searchWorkers = e.target.value)
                  )
                }
              />

              <label htmlFor="localizaion">Lokalizacja:</label>
              <input
                name="localizaion"
                type="text"
                value={newSet.localization}
                onChange={(e) =>
                  setLocalization((newSet.gardenHistory = e.target.value))
                }
                placeholder="Wpisz swoją lokalizację"
              />
            </div>
          );
        })}

      <button id="functions-btn">Zapisz zmiany</button>
    </form>
  );
};

export default AccountUserFunctionsEdit;
