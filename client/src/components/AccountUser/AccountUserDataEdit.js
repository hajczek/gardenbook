import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";
import DisplayInfo from "../../common/DisplayInfo";

const AccountUserDataEdit = (props) => {
  const { userData } = useContext(GlobalContext);
  const { editUserData } = useContext(GlobalContext);

  // Handle for actual user data
  let actualUserName;
  let actualUserEmail;
  let actualUserPass;
  let actualUserTel;
  let actualUserPlace;
  // Handle for sets of user functionality
  let actualWorkPlanner;
  let actualGardenPlan;
  let actualGardenStatistic;
  let actualGardenHistory;
  let actualSearchWorkers;

  // Get actual user data and sets for functionality
  {
    userData
      .filter((data) => data.id === props.userid)
      .map((userData) => {
        actualUserName = userData.userName;
        actualUserEmail = userData.userEmail;
        actualUserPass = userData.userPass;
        actualUserTel = userData.userTel;
        actualUserPlace = userData.userPlace;
        actualWorkPlanner = userData.accountSets.workPlanner;
        actualGardenPlan = userData.accountSets.gardenPlan;
        actualGardenStatistic = userData.accountSets.gardenStatistic;
        actualGardenHistory = userData.accountSets.gardenHistory;
        actualSearchWorkers = userData.accountSets.searchWorkers;
      });
  }

  // Define states for user data
  const [userName, setUserName] = useState(actualUserName);
  const [userEmail, setUserEmail] = useState(actualUserEmail);
  const [userPass, setUserPass] = useState(actualUserPass);
  const [userTel, setUserTel] = useState(actualUserTel);
  const [userPlace, setUserPlace] = useState(actualUserPlace);
  const [workPlanner, setWorkPlanner] = useState(actualWorkPlanner);
  const [gardenPlan, setGardenPlan] = useState(actualGardenPlan);
  const [gardenStatistic, setGardenStatistic] = useState(actualGardenStatistic);
  const [gardenHistory, setGardenHistory] = useState(actualGardenHistory);
  const [searchWorkers, setSearchWorkers] = useState(actualSearchWorkers);
  const [addedDate] = useState(addedDateFunction());
  const [errorInfo, setErrorInfo] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const saveNewData = () => {
    // Info about set new data in database
    setUserInfo("Dane zostały zaktualizowane.");
    // Clear info about error
    setErrorInfo("");
    document.getElementById("user-data-edit").style.display = "none";
  };

  function onSubmit(e) {
    const userDataNew = {
      id: props.userid,
      userName,
      userEmail,
      userPass,
      userTel,
      userPlace,
      workPlanner,
      gardenPlan,
      gardenStatistic,
      gardenHistory,
      searchWorkers,
      addedDate,
    };

    // Check if input field for name is empty
    document.getElementById("user-name").value === "" ||
    document.getElementById("user-email").value === ""
      ? setErrorInfo("Uzupełnij wymagane pola")
      : // Check if email exists in database
      actualUserEmail === document.getElementById("user-email").value
      ? setErrorInfo(`Ten adres email już istnieje w naszej bazie.`)
      : // If yes, put new plant in database
        saveNewData();

    editUserData(userDataNew);
    console.log(userDataNew);

    e.preventDefault();
  }
  return (
    <div className="user-data-box">
      <h2>Zmień wybrane dane</h2>
      <span className="neededFields">Pola oznaczone * nie mogą być puste.</span>
      <DisplayErrorInfo info={errorInfo} />
      <DisplayInfo info={userInfo} />
      <form id="user-data-edit" onSubmit={onSubmit}>
        <label htmlFor="user-name">
          <span>Imię *</span>
          <input
            type="text"
            name="user-name"
            value={userName}
            id="user-name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label htmlFor="user-email">
          <span>E-mail (login) *</span>
          <input
            type="email"
            name="user-email"
            value={userEmail}
            id="user-email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <label htmlFor="user-pass">
          <span>Nowe hasło</span>
          <input
            type="password"
            name="user-pass"
            id="user-pass"
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
          />
        </label>
        <label htmlFor="user-tel">
          <span>Telefon</span>
          <input
            type="phone"
            name="user-tel"
            value={userTel}
            onChange={(e) => setUserTel(e.target.value)}
          />
        </label>
        <label htmlFor="user-place">
          <span>Lokalizacja:</span>
          <input
            type="text"
            name="user-place"
            value={userPlace}
            onChange={(e) => setUserPlace(e.target.value)}
          />
        </label>
        <label htmlFor="work-planner">
          <span>Planner prac:</span>
          <input
            name="work-planner"
            type="checkbox"
            checked={workPlanner}
            onChange={(e) => setWorkPlanner(e.target.value)}
          />
        </label>
        <label htmlFor="garden-plan">
          <span>Plan ogrodu:</span>
          <input
            name="garden-plan"
            type="checkbox"
            checked={gardenPlan}
            onChange={(e) => setGardenPlan(e.target.value)}
          />
        </label>
        <label htmlFor="garden-statistic">
          <span>Statystyki:</span>
          <input
            name="garden-statistic"
            type="checkbox"
            checked={gardenStatistic}
            onChange={(e) => setGardenStatistic(e.target.value)}
          />
        </label>
        <label htmlFor="garden-history">
          <span>Historia:</span>
          <input
            name="garden-history"
            type="checkbox"
            checked={gardenHistory}
            onChange={(e) => setGardenHistory(e.target.value)}
          />
        </label>
        <label htmlFor="search-workers">
          <span>Znajdź wykonawcę:</span>
          <input
            name="search-workers"
            type="checkbox"
            checked={searchWorkers}
            onChange={(e) => setSearchWorkers(e.target.value)}
          />
        </label>
        <button id="change-btn">Zapisz zmiany</button>
      </form>
    </div>
  );
};

export default AccountUserDataEdit;
