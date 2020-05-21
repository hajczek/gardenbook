import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";

const UserLogin = () => {
  const { users, getUsers, editUserDetails } = useContext(GlobalContext);
  const [userEmailLogin, setUserEmailLogin] = useState("");
  const [userPassLogin, setUserPassLogin] = useState("");
  const [errorInfo, setErrorInfo] = useState("");

  useEffect(() => {
    editUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editUser = {
    userLogged: true,
  };

  function login(e) {
    e.preventDefault();

    // Check if input fields are empty
    if (userEmailLogin === "" || userPassLogin === "") {
      setErrorInfo("Uzupełnij wymagane pola.");
    }

    // Filter user
    users
      .filter(
        (user) =>
          user.userEmail === document.getElementById("user-email-login").value
      )
      .map((userExist) =>
        userExist.userPass !== document.getElementById("user-pass-login").value
          ? setErrorInfo("Podane dane są nieprawidłowe.")
          : userExist.userPass ===
            document.getElementById("user-pass-login").value
          ? editUserDetails(userExist._id, editUser)
          : null
      );
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
