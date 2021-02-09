import React, { useState, useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import addedDateFunction from '../../common/AddedDateFunction';
import DisplayErrorInfo from '../../common/DisplayErrorInfo';
import DisplayInfo from '../../common/DisplayInfo';
import { useIntl } from 'react-intl';
import translate from '../../i18n/translate';

const AccountUserDataEdit = (props) => {
  const { users, getUsers, editUserDetails } = useContext(GlobalContext);
  const intl = useIntl();

  const userDataEdit = useRef('');
  const inputUserName = useRef('');
  const inputUserEmail = useRef('');

  const btoa = (string) => Buffer.from(string).toString('base64');

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
  let actualUserBackgroundImage;
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
        actualUserBackgroundImage = data.userBackgroundImage;
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
  const [userBackgroundImage, setUserBackgroundImage] = useState(
    actualUserBackgroundImage
  );
  const [userLogged] = useState(actualUserLogged);
  const [workPlanner, setWorkPlanner] = useState(actualWorkPlanner);
  const [gardenPlan, setGardenPlan] = useState(actualGardenPlan);
  const [gardenStatistic, setGardenStatistic] = useState(actualGardenStatistic);
  const [gardenHistory, setGardenHistory] = useState(actualGardenHistory);
  const [searchWorkers, setSearchWorkers] = useState(actualSearchWorkers);
  const [addedDate] = useState(addedDateFunction());
  const [errorInfo, setErrorInfo] = useState('');
  const [userInfo, setUserInfo] = useState('');

  const saveNewData = () => {
    // Info about set new data in database
    setUserInfo(intl.formatMessage({ id: 'data-updated' }));
    // Clear info about error
    setErrorInfo('');
    userDataEdit.current.style.display = 'none';
    window.location.reload();
  };

  function onSubmit(e) {
    const userDataNew = {
      _id: props.userid,
      userName,
      userEmail,
      userPass: btoa(userPass),
      userTel,
      userPlace,
      userBackgroundImage,
      userLogged: true,
      accountSets: {
        workPlanner,
        gardenPlan,
        gardenStatistic,
        gardenHistory,
        searchWorkers,
        addedDate,
      },
    };

    // Check if input fields for name and email are empty
    inputUserName.current.value === '' || inputUserEmail.current.value === ''
      ? setErrorInfo('Uzupełnij wymagane pola')
      : // Check if email exists in database
      actualUserEmail !== inputUserEmail.current.value &&
        users.filter((user) => user.userEmail === inputUserEmail.current.value)
      ? setErrorInfo(intl.formatMessage({ id: 'existed-mail-info' }))
      : // If yes, put new data in database
        saveNewData();

    editUserDetails(props.userid, userDataNew);

    e.preventDefault();
  }

  return (
    <div className="user-right-box">
      <h2>{translate('change-data')}</h2>
      <span className="neededFields">{translate('fields-info')}</span>
      <DisplayErrorInfo info={errorInfo} />
      <DisplayInfo info={userInfo} />
      <form id="user-data-edit" onSubmit={onSubmit} ref={userDataEdit}>
        <label htmlFor="user-name">
          <span>{translate('name-term')}*</span>
          <input
            type="text"
            name="user-name"
            value={userName}
            ref={inputUserName}
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
            ref={inputUserEmail}
            id="user-email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <label htmlFor="user-pass">
          <span>{translate('new-password')}</span>
          <input
            type="password"
            name="user-pass"
            id="user-pass"
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
            autocomplete="on"
          />
        </label>
        <label htmlFor="user-tel">
          <span>{translate('phone-term')}</span>
          <input
            type="phone"
            name="user-tel"
            value={userTel}
            onChange={(e) => setUserTel(e.target.value)}
          />
        </label>
        <label htmlFor="user-place">
          <span>{translate('localization-term')}:</span>
          <input
            type="text"
            name="user-place"
            value={userPlace}
            onChange={(e) => setUserPlace(e.target.value)}
          />
        </label>
        <label htmlFor="user-bg-image">
          <span>{translate('path-to-bg')}:</span>
          <input
            type="text"
            name="user-bg-image"
            value={userBackgroundImage}
            onChange={(e) => setUserBackgroundImage(e.target.value)}
          />
        </label>
        <label htmlFor="work-planner">
          <span>{translate('work-planner')}:</span>
          <input
            name="work-planner"
            type="checkbox"
            defaultChecked={workPlanner}
            onChange={(e) => setWorkPlanner(e.target.checked)}
          />
        </label>
        <label htmlFor="garden-plan">
          <span>{translate('garden-plan')}:</span>
          <input
            name="garden-plan"
            type="checkbox"
            defaultChecked={gardenPlan}
            onChange={(e) => setGardenPlan(e.target.checked)}
          />
        </label>
        <label htmlFor="garden-statistic">
          <span>{translate('statistic-term')}:</span>
          <input
            name="garden-statistic"
            type="checkbox"
            defaultChecked={gardenStatistic}
            onChange={(e) => setGardenStatistic(e.target.checked)}
          />
        </label>
        <label htmlFor="garden-history">
          <span>{translate('function-history-title')}:</span>
          <input
            name="garden-history"
            type="checkbox"
            defaultChecked={gardenHistory}
            onChange={(e) => setGardenHistory(e.target.checked)}
          />
        </label>
        <label htmlFor="search-workers">
          <span>{translate('find-contractor')}:</span>
          <input
            name="search-workers"
            type="checkbox"
            defaultChecked={searchWorkers}
            onChange={(e) => setSearchWorkers(e.target.checked)}
          />
        </label>
        <button id="change-btn">{translate('save-changes')}</button>
      </form>
    </div>
  );
};

export default AccountUserDataEdit;
