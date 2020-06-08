import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";
import MoreInfo from "./MoreInfo";

const UserLogin = () => {
  const { users, getUsers, editUserDetails } = useContext(GlobalContext);
  const [userEmailLogin, setUserEmailLogin] = useState("");
  const [userPassLogin, setUserPassLogin] = useState("");
  const [errorInfo, setErrorInfo] = useState("");

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function login(e) {
    e.preventDefault();

    const editUser = {
      userLogged: true,
    };

    // Check if input fields are empty
    userEmailLogin === "" || userPassLogin === ""
      ? setErrorInfo("Uzupełnij wymagane pola.")
      : setErrorInfo("");

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
    <>
      <div className="right-box">
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
      <MoreInfo />
    </>
  );
};

export default UserLogin;
