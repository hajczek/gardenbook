import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";

const UserLogin = () => {
  const { userData } = useContext(GlobalContext);
  const [userEmailLogin, setUserEmailLogin] = useState("");
  const [userPassLogin, setUserPassLogin] = useState("");
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [errorInfo, setErrorInfo] = useState('');

  function onSubmit(e) {  

    e.preventDefault();
    console.log(userEmailLogin);
    console.log(userPassLogin);
    
// Check if input fields are empty
    userEmailLogin === '' || userPassLogin === ''   
      ? setErrorInfo('Uzupełnij wymagane pola.') 
      // Check if email and password are on database
      : userData.some((user) => 
      user.userEmail !== document.getElementById('user-email-login').value
      || user.userPass !== document.getElementById('user-pass-login').value)
      ? setErrorInfo('Podane dane są nieprawidłowe')     
      // TODO - put new set of userIsLogged to database
      : setUserIsLogged(true)
  }

  return (
    <div className="info">
      <h1>Panel logowania</h1>
      <DisplayErrorInfo info={errorInfo} />
      <form onSubmit={onSubmit} id="user-email-form">
        <label htmlFor="user-email-login">
          <span>Email</span>
          <input
            type="email"
            name="user-email-login"
            value={userEmailLogin}
            id="user-email-login"
            onChange={(e) => setUserEmailLogin(e.target.value)}
          />
        </label>
        <label htmlFor="user-pass-login">
          <span>Hasło</span>
          <input
            type="password"
            name="user-pass-login"
            value={userPassLogin}
            id="user-pass-login"
            onChange={(e) => setUserPassLogin(e.target.value)}
          />
        </label>
        <button id="login-btn">Zaloguj</button>
      </form>
    </div>
  );
};

export default UserLogin;
