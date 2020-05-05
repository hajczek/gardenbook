import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import { getUserId } from "./AccountUserDataBox";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";

const AccountUserDataEdit = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPassNew, setUserPassNew] = useState("");
  const [userTel, setUserTel] = useState("");
  const [addedDate] = useState(addedDateFunction());

  const { userData } = useContext(GlobalContext);
  const { editUserData } = useContext(GlobalContext);

  function onSubmit(e) {
    console.log(userName);
    console.log(userEmail);
    console.log(userPass);
    console.log(userPassNew);
    console.log(userTel);
    e.preventDefault();

    const userDataNew = {
      id: getUserId(),
      userName,
      userEmail,
      userPass,
      userPassNew,
      userTel,
      addedDate,
    };

    editUserData(userDataNew);
    console.log(userDataNew);

    e.preventDefault();
  }
  return (
    <div className="user-data-box">
      <form id="user-data-edit" onSubmit={onSubmit}>
        <h2>Zmień wybrane dane</h2>
        {userData
          .filter((data) => data.id === getUserId())
          .map((newData) => {
            return (
              <div key="new-user-data">
              <DisplayErrorInfo info='Tan adres e-mail już istnieje. / Aktualne hasło jest niprawidłowe.' />
                <label htmlFor="user-name">
                  <span>Imię</span>
                  <input
                    type="text"
                    name="user-name"
                    value={newData.userName}
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
              </div>
            );
          })}
        <button id="change-btn">Zapisz zmiany</button>
      </form>
    </div>
  );
};

export default AccountUserDataEdit;
