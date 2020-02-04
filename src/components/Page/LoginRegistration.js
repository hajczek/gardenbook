import React from "react";

const LoginRegistration = () => {
  return (
    <div className="info">
      <h1>Panel rejestracji</h1>
      <form action="">
        <label htmlFor="name">Imię</label>
        <input type="text" name="name" />

        <label htmlFor="login">Login*</label>
        <input type="text" name="login" />

        <label htmlFor="pass">Hasło*</label>
        <input type="text" name="pass" />

        <label htmlFor="email">E-mail*</label>
        <input type="text" name="email" />

        <label htmlFor="passAgain">Powtórz hasło*</label>
        <input type="text" name="passAgain" />
        <button id="register-btn">Zarejestruj</button>
      </form>
    </div>
  );
};

export default LoginRegistration;
