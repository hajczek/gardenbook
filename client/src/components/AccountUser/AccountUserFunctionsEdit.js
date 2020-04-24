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
    <div className="user-functionality-box">
      <form id="user-functions" onSubmit={onSubmit}>
        <h2>Zmień stan wybranych funkcji / narzędzi</h2>
        {userData
          .filter((data) => data.id === getUserId())
          .map((newSet) => {
            return (
              <div key="user-func-edit">
                <label htmlFor="work-planner">
                  <span>Planner prac:</span>
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
                </label>
                <label htmlFor="garden-plan">
                  <span>Plan ogrodu:</span>
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
                </label>
                <label htmlFor="garden-statistic">
                  <span>Statystyki:</span>
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
                </label>
                <label htmlFor="garden-history">
                  <span>Historia:</span>
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
                </label>
                <label htmlFor="search-workers">
                  <span>Znajdź wykonawcę:</span>
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
                </label>
                <label htmlFor="localizaion">
                  <span>Lokalizacja:</span>
                  <input
                    name="localizaion"
                    type="text"
                    value={newSet.localization}
                    onChange={(e) =>
                      setLocalization((newSet.gardenHistory = e.target.value))
                    }
                    placeholder="Wpisz swoją lokalizację"
                  />
                </label>
              </div>
            );
          })}

        <button id="functions-btn">Zapisz zmiany</button>
      </form>
    </div>
  );
};

export default AccountUserFunctionsEdit;
