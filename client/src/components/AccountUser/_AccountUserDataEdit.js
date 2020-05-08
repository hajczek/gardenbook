import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import { getUserId } from "./AccountUserDataBox";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";
import DisplayInfo from "../../common/DisplayInfo";

const AccountUserDataEdit = () => {
  const { userData } = useContext(GlobalContext);
  const { editUserData } = useContext(GlobalContext);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPassNew, setUserPassNew] = useState("");
  const [userTel, setUserTel] = useState("");
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
  }

  function onSubmit(e) {
    const userDataNew = {
      id: getUserId(),
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
    : userData.some((user) => (user.userEmail === document.getElementById('user-email').value) === true)
    ? setErrorInfo(`Ten adres email już istnieje w naszej bazie.`) 
    // Check if actual password is correct
    : userData.some((user) => (user.id === getUserId()) && (user.userPass === document.getElementById("user-pass").value) === false)
    ? setErrorInfo('Wpisane aktualne hasło jest nieprawidłowe') 
    // If yes, put new plant in database
    : addedNewData();

    let user = {userData};
    console.log(user);

    editUserData(userDataNew);
    // console.log(userDataNew);
    
    e.preventDefault();
  }
  return (
    <div className="user-data-box">
    
        <h2>Zmień wybrane dane</h2>        
          <DisplayErrorInfo info={errorInfo} />
          <DisplayInfo info={userInfo} />
      <form id="user-data-edit" onSubmit={onSubmit}>
        {userData
          .filter((data) => data.id === getUserId())
          .map((newData) => {
            return (
              <>
                <label htmlFor="user-name">
                  <span>Imię</span>
                  <input
                    type="text"
                    name="user-name"
                    value={newData.userName}
                    id="user-name"
                    onChange={(e) =>
                      setUserName((newData.userName = e.target.value))
                    }
                  />
                </label>
                <label htmlFor="user-email">
                  <span>E-mail (login)</span>
                  <input
                    type="email"
                    name="user-email"
                    value={newData.userEmail}
                    id="user-email"
                    onChange={(e) =>
                      setUserEmail((newData.userEmail = e.target.value))
                    }
                  />
                </label>
                <label htmlFor="user-pass">
                  <span>Aktualne hasło</span>
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
                    value={newData.userPassNew}
                    onChange={(e) => setUserPassNew(e.target.value)}
                  />
                </label>
                <label htmlFor="user-tel">
                  <span>Telefon</span>
                  <input
                    type="phone"
                    name="user-tel"
                    value={newData.userTel}
                    onChange={(e) =>
                      setUserTel((newData.userTel = e.target.value))
                    }
                  />
                </label>
              </>
            );
          })}
        <button id="change-btn">Zapisz zmiany</button>
      </form>
    </div>
  )
};

export default AccountUserDataEdit;
