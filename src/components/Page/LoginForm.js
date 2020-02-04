import React from "react";

const LoginForm = () => {
  return (
    <div className="info">
      <h1>Panel logowania</h1>
      <form action="">
        <label htmlFor="login">Login</label>
        <input type="text" name="login" />

        <label htmlFor="pass">Hasło</label>
        <input type="text" name="pass" />
        <button id="login-btn">Zaloguj</button>
      </form>
    </div>
  );
};

export default LoginForm;
