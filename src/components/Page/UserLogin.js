import React, { useState } from "react";

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
      <form onSubmit={onSubmit}>
        <label htmlFor="user-email-login">Email</label>
        <input
          type="email"
          name="user-email-login"
          value={userEmailLogin}
          onChange={(e) => setUserEmailLogin(e.target.value)}
        />

        <label htmlFor="user-pass-login">Hasło</label>
        <input
          type="password"
          name="user-pass-login"
          value={userPassLogin}
          onChange={(e) => setUserPassLogin(e.target.value)}
        />
        <button id="login-btn">Zaloguj</button>
      </form>
    </div>
  );
};

export default UserLogin;
