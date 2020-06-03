import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";
import DisplayInfo from "../../common/DisplayInfo";

const AccountUserDataEdit = (props) => {
  const { users, getUsers, editUserDetails } = useContext(GlobalContext);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle for actual user data
  let actualUserName;
  let actualUserEmail;
  let actualUserPass;
  let actualUserTel;
  let actualUserPlace;
  // Handle for sets of user functionality
  let actualUserLogged;
  let actualWorkPlanner;
  let actualGardenPlan;
  let actualGardenStatistic;
  let actualGardenHistory;
  let actualSearchWorkers;

  // Get actual user data and sets for functionality
  {
    users
      .filter((data) => data._id === props.userid)
      .map((data) => {
        actualUserName = data.userName;
        actualUserEmail = data.userEmail;
        actualUserPass = data.userPass;
        actualUserTel = data.userTel;
        actualUserPlace = data.userPlace;
        actualUserLogged = data.userLogged;
        actualWorkPlanner = data.accountSets.workPlanner;
        actualGardenPlan = data.accountSets.gardenPlan;
        actualGardenStatistic = data.accountSets.gardenStatistic;
        actualGardenHistory = data.accountSets.gardenHistory;
        actualSearchWorkers = data.accountSets.searchWorkers;
      });
  }

  // Define states for user data
  const [userName, setUserName] = useState(actualUserName);
  const [userEmail, setUserEmail] = useState(actualUserEmail);
  const [userPass, setUserPass] = useState(actualUserPass);
  const [userTel, setUserTel] = useState(actualUserTel);
  const [userPlace, setUserPlace] = useState(actualUserPlace);
  const [userLogged] = useState(actualUserLogged);
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
      _id: props.userid,
      userName,
      userEmail,
      userPass,
      userTel,
      userPlace,
      userLogged,
      accountSets: {
        workPlanner,
        gardenPlan,
        gardenStatistic,
        gardenHistory,
        searchWorkers,
        addedDate,
      },
    };

    users.map((user) => {
      // Check if input field for name is empty
      document.getElementById("user-name").value === "" ||
      document.getElementById("user-email").value === ""
        ? setErrorInfo("Uzupełnij wymagane pola")
        : // Check if email exists in database
        actualUserEmail !== document.getElementById("user-email").value &&
          document.getElementById("user-email").value === user.userEmail
        ? setErrorInfo(`Ten adres email już istnieje w naszej bazie.`)
        : // If yes, put new plant in database
          saveNewData();
    });
    editUserDetails(props.userid, userDataNew);

    // e.preventDefault();
  }
  return (
    <div className="user-right-box">
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
            defaultChecked={workPlanner}
            onChange={(e) => setWorkPlanner(e.target.checked)}
          />
        </label>
        <label htmlFor="garden-plan">
          <span>Plan ogrodu:</span>
          <input
            name="garden-plan"
            type="checkbox"
            defaultChecked={gardenPlan}
            onChange={(e) => setGardenPlan(e.target.checked)}
          />
        </label>
        <label htmlFor="garden-statistic">
          <span>Statystyki:</span>
          <input
            name="garden-statistic"
            type="checkbox"
            defaultChecked={gardenStatistic}
            onChange={(e) => setGardenStatistic(e.target.checked)}
          />
        </label>
        <label htmlFor="garden-history">
          <span>Historia:</span>
          <input
            name="garden-history"
            type="checkbox"
            defaultChecked={gardenHistory}
            onChange={(e) => setGardenHistory(e.target.checked)}
          />
        </label>
        <label htmlFor="search-workers">
          <span>Znajdź wykonawcę:</span>
          <input
            name="search-workers"
            type="checkbox"
            defaultChecked={searchWorkers}
            onChange={(e) => setSearchWorkers(e.target.checked)}
          />
        </label>
        <button id="change-btn">Zapisz zmiany</button>
      </form>
    </div>
  );
};

export default AccountUserDataEdit;
