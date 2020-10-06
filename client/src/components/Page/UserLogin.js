import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";
import DisplayInfo from "../../common/DisplayInfo";
import MoreInfo from "./MoreInfo";
import { useHistory } from "react-router-dom";
import translate from "../../i18n/translate";

const UserLogin = () => {
  let history = useHistory();

  const { users, getUsers, editUserDetails } = useContext(GlobalContext);
  const [userEmailLogin, setUserEmailLogin] = useState("");
  const [userPassLogin, setUserPassLogin] = useState("");
  const [errorInfo, setErrorInfo] = useState("");
  const [loginInfo, setLoginInfo] = useState("");

  // base64 encoded pass
  const atob = (encoded) => Buffer.from(encoded, "base64").toString();

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function displayAfterLogin() {
    document.getElementById("user-email-form").style.display = "none";
    document.querySelector("h1").innerHTML = "WITAJ";
    setLoginInfo("Zostałeś zalogowany :)");
    history.push("/alerty");
    window.location.reload();
  }

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
    users.map((userExist) =>
      atob(userExist.userPass) !==
        document.getElementById("user-pass-login").value ||
      userExist.userEmail !== document.getElementById("user-email-login").value
        ? setErrorInfo("Podane dane są nieprawidłowe.")
        : atob(userExist.userPass) ===
          document.getElementById("user-pass-login").value
        ? editUserDetails(userExist._id, editUser) && displayAfterLogin()
        : null
    );
  }

  return (
    <>
      <div className="right-box">
        <h1>{translate("login-panel")}</h1>
        <DisplayErrorInfo info={errorInfo} />
        <DisplayInfo info={loginInfo} />
        <form onSubmit={login} id="user-email-form">
          <label htmlFor="user-email-login">
            <span>{translate("email-term")}</span>
            <input
              type="email"
              name="user-email-login"
              value={userEmailLogin}
              id="user-email-login"
              onChange={(e) => setUserEmailLogin(e.target.value)}
            />
          </label>
          <label htmlFor="user-pass-login">
            <span>{translate("password-term")}</span>
            <input
              type="password"
              name="user-pass-login"
              value={userPassLogin}
              id="user-pass-login"
              onChange={(e) => setUserPassLogin(e.target.value)}
            />
          </label>
          <button id="login-btn">{translate("login-term")}</button>
        </form>
      </div>
      <MoreInfo />
    </>
  );
};

export default UserLogin;
