import React, { useState } from "react";
import { displayErrorInfo } from "../../common/DisplayErrorInfo";

const UserLogin = () => {
  const [userEmailLogin, setUserEmailLogin] = useState("");
  const [userPassLogin, setUserPassLogin] = useState("");
  const [userIsLogged, setUserIsLogged] = useState(false);

  function onSubmit(e) {
    console.log(userEmailLogin);
    console.log(userPassLogin);

    // Check if login (email) and password are correct
    // If yes, set for this user state 'userIsLogged' to true
    e.preventDefault();
  }

  return (
    <div className="info">
      <h1>Panel logowania</h1>
      {displayErrorInfo(`Podałeś nieprawidłowe dane.`)}
      <form onSubmit={onSubmit}>
        <label htmlFor="user-email-login">
          <span>Email</span>
          <input
            type="email"
            name="user-email-login"
            value={userEmailLogin}
            onChange={(e) => setUserEmailLogin(e.target.value)}
          />
        </label>
        <label htmlFor="user-pass-login">
          <span>Hasło</span>
          <input
            type="password"
            name="user-pass-login"
            value={userPassLogin}
            onChange={(e) => setUserPassLogin(e.target.value)}
          />
        </label>
        <button id="login-btn">Zaloguj</button>
      </form>
    </div>
  );
};

export default UserLogin;
