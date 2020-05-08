import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
// import { getUserId } from "./AccountUserDataBox";
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

  // Get actual user data
  {userData
    .filter((data) => data.id === props.userid)
    .map((userData) => {
      actualUserName = userData.userName;
      actualUserEmail = userData.userEmail;
      actualUserPass = userData.userPass;
      actualUserTel = userData.userTel;
    })}

    console.log(actualUserPass);

  // Define states for user data
  const [userName, setUserName] = useState(actualUserName);
  const [userEmail, setUserEmail] = useState(actualUserEmail);
  const [userPass, setUserPass] = useState("");
  const [userPassNew, setUserPassNew] = useState("");
  const [userTel, setUserTel] = useState(actualUserTel);
  const [addedDate] = useState(addedDateFunction());
  const [errorInfo, setErrorInfo] = useState('');
  const [userInfo, setUserInfo] = useState('');

  const addedNewData = () => {  
    // Info about set new data in database
    setUserInfo('Dane zostały zaktualizowane.');
    // Clear info about error
    setErrorInfo('');
    // Clear all fields of form
    setUserName('');
    setUserEmail('');
    setUserPass('');
    setUserPassNew('');
    setUserTel('');
    document.getElementById('user-data-edit').style.display = 'none';
  }

  function onSubmit(e) {
    const userDataNew = {
      id: props.userid,
      userName,
      userEmail,
      userPass,
      userPassNew,
      userTel,
      addedDate,
    };

    // Check if input field for name is empty
     document.getElementById("user-name").value === '' || document.getElementById("user-email").value === '' || document.getElementById("user-pass").value === ''
     ? setErrorInfo('Uzupełnij wymagane pola')
     // Check if email exists in database
    : actualUserEmail === document.getElementById('user-email').value
    ? setErrorInfo(`Ten adres email już istnieje w naszej bazie.`) 
    // Check if actual password is correct
    : actualUserPass !== document.getElementById("user-pass").value
    ? setErrorInfo('Wpisane aktualne hasło jest nieprawidłowe') 
    // If yes, put new plant in database
    : addedNewData();

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
                  <span>Aktualne hasło *</span>
                  <input
                    type="password"
                    name="user-pass"
                    id="user-pass"
                    value={userPass}
                    onChange={(e) => setUserPass(e.target.value)}
                  />
                </label>
                <label htmlFor="user-pass-new">
                  <span>Nowe hasło</span>
                  <input
                    type="password"
                    name="user-pass-new"
                    value={userPassNew}
                    onChange={(e) => setUserPassNew(e.target.value)}
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
        <button id="change-btn">Zapisz zmiany</button>
      </form>
    </div>
  )
};

export default AccountUserDataEdit;
