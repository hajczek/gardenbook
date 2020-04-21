import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import { getUserId } from "./AccountUserDataBox";

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
    <form id="user-data-edit" onSubmit={onSubmit}>
      <h2>Twoje dane</h2>
      {userData
        .filter((data) => data.id === getUserId())
        .map((newData) => {
          return (
            <div key="new-user-data">
              <label htmlFor="user-name">Imię</label>
              <input
                type="text"
                name="user-name"
                value={newData.userName}
                onChange={(e) =>
                  setUserName((newData.userName = e.target.value))
                }
              />
              <label htmlFor="user-email">E-mail (login)</label>
              <input
                type="email"
                name="user-email"
                value={newData.userEmail}
                onChange={(e) =>
                  setUserEmail((newData.userEmail = e.target.value))
                }
              />
              <label htmlFor="user-pass">Aktualne hasło</label>
              <input
                type="password"
                name="user-pass"
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
              />
              <label htmlFor="user-pass-new">Nowe hasło</label>
              <input
                type="password"
                name="user-pass-new"
                value={newData.userPassNew}
                onChange={(e) => setUserPassNew(e.target.value)}
              />
              <label htmlFor="user-tel">Telefon</label>
              <input
                type="phone"
                name="user-tel"
                value={newData.userTel}
                onChange={(e) => setUserTel((newData.userTel = e.target.value))}
              />
            </div>
          );
        })}
      <button id="change-btn">Zapisz zmiany</button>
    </form>
  );
};

export default AccountUserDataEdit;
