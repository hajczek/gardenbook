import React, { useState } from "react";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";

const UserRegistration = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPassAgain, setUserPassAgain] = useState("");

  function onSubmit(e) {    
    e.preventDefault();

    userPass !== userPassAgain 
    ? console.log('Hasła są różne') 
    // In this place user data must be set on database
    : console.log('Zostałeś zarejestrowany', userName, userEmail, userPass, userPassAgain);

    userEmail === '' || userName === '' || userPass === '' ||  userPassAgain === '' ? console.log('Uzupełnij puste pola') : console.log('Pola zostały prawidłowo wypełnione');
  }

  return (
    <div className="info">
      <h1>Panel rejestracji</h1>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="user-name">
          <span>Imię</span>
          <input
            type="text"
            name="user-name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label htmlFor="user-email">
          <span>E-mail*</span>
          <input
            type="text"
            name="user-email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>

        <label htmlFor="user-pass">
          <span>Hasło*</span>
          <input
            type="text"
            name="user-pass"
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
          />
        </label>
        <label htmlFor="user-pass-again">
          <span>Powtórz hasło*</span>
          <input
            type="text"
            name="user-pass-again"
            value={userPassAgain}
            onChange={(e) => setUserPassAgain(e.target.value)}
          />
        </label>
        <button id="register-btn">Zarejestruj</button>
      </form>
    </div>
  );
};

export default UserRegistration;
