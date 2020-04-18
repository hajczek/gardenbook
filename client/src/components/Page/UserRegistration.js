import React, { useState } from "react";

const UserRegistration = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPassAgain, setUserPassAgain] = useState("");

  /* Needed funtions
  1. onSubmit() - to put data from form in database
  2. checkPassword() - to check, if password is strong enough
  3. checkPasswords() - to check, if password and second password are the same
  4. emailExist() - check, if email exist in database
  5. clearForm() - clear for after send data
  */

  function onSubmit(e) {
    console.log(userName);
    console.log(userEmail);
    console.log(userPass);
    console.log(userPassAgain);
    e.preventDefault();
  }
  return (
    <div className="info">
      <h1>Panel rejestracji</h1>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="user-name">Imię</label>
        <input
          type="text"
          name="user-name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="user-email">E-mail*</label>
        <input
          type="text"
          name="user-email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <label htmlFor="user-pass">Hasło*</label>
        <input
          type="text"
          name="user-pass"
          value={userPass}
          onChange={(e) => setUserPass(e.target.value)}
        />

        <label htmlFor="user-pass-again">Powtórz hasło*</label>
        <input
          type="text"
          name="user-pass-again"
          value={userPassAgain}
          onChange={(e) => setUserPassAgain(e.target.value)}
        />

        <button id="register-btn">Zarejestruj</button>
      </form>
    </div>
  );
};

export default UserRegistration;
