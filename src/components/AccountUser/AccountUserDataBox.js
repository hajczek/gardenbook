import React, { useState } from "react";

const AccountUserDataBox = () => {
  const [userName, setUserName] = useState("Jan");
  const [userEmail, setUserEmail] = useState("jan@kowalski.pl");
  const [userPass, setUserPass] = useState("aktualne-haslo");
  const [userPassNew, setUserPassNew] = useState("");
  const [userPhone, setUserPhone] = useState("");

  /* Needed functionality: 
    1. onSubmit() - function set new data to database.
  */

  function onSubmit(e) {
    console.log(userName);
    console.log(userEmail);
    console.log(userPass);
    console.log(userPassNew);
    console.log(userPhone);
    e.preventDefault();
  }
  return (
    <form id="user-data" onSubmit={onSubmit}>
      <h2>Twoje dane</h2>
      <p>Tutaj możesz zmienić swoje dane.</p>
      <label htmlFor="user-name">Imię</label>
      <input
        type="text"
        name="user-name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="user-email">E-mail (jednocześnie login)</label>
      <input
        type="email"
        name="user-email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
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
        value={userPassNew}
        onChange={(e) => setUserPassNew(e.target.value)}
      />
      <label htmlFor="user-phone">Telefon</label>
      <input
        type="phone"
        name="uuser-phone"
        value={userPhone}
        onChange={(e) => setUserPhone(e.target.value)}
      />
      <button id="change-btn">Zapisz zmiany</button>
    </form>
  );
};

export default AccountUserDataBox;
