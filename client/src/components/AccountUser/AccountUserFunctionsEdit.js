import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";
import DisplayInfo from "../../common/DisplayInfo";

const AccountUserFunctionsEdit = (props) => {
  const { userData } = useContext(GlobalContext);
  const { editUserData } = useContext(GlobalContext);

   // Handle for sets of user functionality
  let actualWorkPlanner;
  let actualAlertTime;
  let actualGardenPlan;
  let actualGardenStatistic;
  let actualGardenHistory;
  let actualSearchWorkers;
  let actualLocalization;

  // Get actual sets for user functionality
  {userData
    .filter((data) => data.id === props.userid)
    .map((userData) => {
      actualWorkPlanner = userData.workPlanner;
      actualAlertTime = userData.alertTime;
      actualGardenPlan = userData.gardenPlan;
      actualGardenStatistic = userData.gardenStatistic;
      actualGardenHistory = userData.gardenHistory;
      actualSearchWorkers = userData.searchWorkers;
      actualLocalization = userData.localization;
    })}

// Define states for user functionality
  const [workPlanner, setWorkPlanner] = useState(actualWorkPlanner);
  const [alertTime, setAlertTime] = useState( actualAlertTime);
  const [gardenPlan, setGardenPlan] = useState(actualGardenPlan);
  const [gardenStatistic, setGardenStatistic] = useState(actualGardenStatistic);
  const [gardenHistory, setGardenHistory] = useState(actualGardenHistory);
  const [searchWorkers, setSearchWorkers] = useState(actualSearchWorkers);
  const [addedDate] = useState(addedDateFunction());
  const [userId, setUserId] = useState();
  const [errorInfo, setErrorInfo] = useState('');
  const [userInfo, setUserInfo] = useState('');

const putNewSets = () => {  
    // Info about set new data in database
    setUserInfo('Ustawienia zostały zaktualizowane.');
    // Clear info about error
    setErrorInfo('');
    // Remove form from view
    document.getElementById('user-functions').style.display = 'none';
  }

  function onSubmit(e) {
    const userFunctionsNew = {
      id: props.userid,
      workPlanner,
      alertTime,
      gardenPlan,
      gardenStatistic,
      gardenHistory,
      searchWorkers,
      addedDate,
    };

    putNewSets();
    editUserData(userFunctionsNew);
    console.log(userFunctionsNew);

    e.preventDefault();
  }

  return (
    <div className="user-functionality-box">
      <h2>Zmień stan wybranych funkcji / narzędzi</h2>
      <DisplayErrorInfo info={errorInfo} />
      <DisplayInfo info={userInfo} />
      <form id="user-functions" onSubmit={onSubmit}>
        <div key="user-func-edit">
                <label htmlFor="work-planner">
                  <span>Planner prac:</span>
                  <input
                    name="work-planner"
                    type="checkbox"
                    checked={workPlanner}
                    onChange={(e) =>
                      setWorkPlanner(e.target.value)
                    }
                  />
                </label>
                <label htmlFor="garden-plan">
                  <span>Plan ogrodu:</span>
                  <input
                    name="garden-plan"
                    type="checkbox"
                    checked={gardenPlan}
                    onChange={(e) =>
                      setGardenPlan(e.target.value)
                    }
                  />
                </label>
                <label htmlFor="garden-statistic">
                  <span>Statystyki:</span>
                  <input
                    name="garden-statistic"
                    type="checkbox"
                    checked={gardenStatistic}
                    onChange={(e) =>
                      setGardenStatistic(e.target.value)
                    }
                  />
                </label>
                <label htmlFor="garden-history">
                  <span>Historia:</span>
                  <input
                    name="garden-history"
                    type="checkbox"
                    checked={gardenHistory}
                    onChange={(e) =>
                      setGardenHistory(e.target.value)
                    }
                  />
                </label>
                <label htmlFor="search-workers">
                  <span>Znajdź wykonawcę:</span>
                  <input
                    name="search-workers"
                    type="checkbox"
                    checked={searchWorkers}
                    onChange={(e) =>
                      setSearchWorkers(e.target.value)
                    }
                  />
                </label>
              </div>
        <button id="functions-btn">Zapisz zmiany</button>
      </form>
    </div>
  );
};

export default AccountUserFunctionsEdit;
