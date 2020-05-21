import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";

const UserLogin = () => {
  const { users, getUsers, editUserDetails } = useContext(GlobalContext);
  const [userEmailLogin, setUserEmailLogin] = useState("");
  const [userPassLogin, setUserPassLogin] = useState("");
  // const [userLogged, setUserLogged] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");

  useEffect(() => {
    editUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let userEmail;
  let userPass;
  let userId;

  users.some((user) => {
    userEmail = user.userEmail;
    userPass = user.userPass;
    userId = user._id;
  });

  const editUser = {
    userLogged: true,
  };

  function login(e) {
    e.preventDefault();

    // Check if input fields are empty
    userEmailLogin === "" || userPassLogin === ""
      ? setErrorInfo("Uzupełnij wymagane pola.")
      : // Check if email and password are on database
      userEmail !== document.getElementById("user-email-login").value ||
        userPass !== document.getElementById("user-pass-login").value
      ? setErrorInfo("Podane dane są nieprawidłowe")
      : userEmail === document.getElementById("user-email-login").value &&
        userPass === document.getElementById("user-pass-login").value
      ? editUserDetails(userId, editUser)
      : console.log("Nie zalogowano");
  }

  return (
    <div className="info">
      <h1>Panel logowania</h1>
      <DisplayErrorInfo info={errorInfo} />
      <form onSubmit={login} id="user-email-form">
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
