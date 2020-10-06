import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";
import DisplayInfo from "../../common/DisplayInfo";
import MoreInfo from "./MoreInfo";
import translate from "../../i18n/translate";

const UserRegistration = () => {
  const { users, getUsers, addUser } = useContext(GlobalContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPassAgain, setUserPassAgain] = useState("");
  const [errorInfo, setErrorInfo] = useState("");
  const [userInfo, setUserInfo] = useState("");

  // base64 coded pass
  const btoa = (string) => Buffer.from(string).toString("base64");

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const registrationDone = () => {
    // Hide form
    document.getElementById("form").style.display = "none";
    // Clear error info
    setErrorInfo("");
    // Display info for user about registration
    setUserInfo(
      "Zostałeś zarejestrowany. Zaloguj się na swoje konto użytkownika."
    );
  };

  function onSubmit(e) {
    e.preventDefault();

    const newUser = {
      userName,
      userEmail,
      userPass: btoa(userPass),
      userTel: "",
      userPlace: "",
      isLogged: false,
      workPlanner: true,
      gardenPlan: false,
      gardenStatistic: false,
      gardenHistory: false,
      searchWorkers: false,
    };

    // Check if input fields are empty
    userEmail === "" || userPass === "" || userPassAgain === ""
      ? setErrorInfo("Uzupełnij wymagane pola.")
      : // Check if email is on database
      users.some(
          (user) =>
            (user.userEmail === document.getElementById("user-email").value) ===
            true
        )
      ? setErrorInfo("Ten email już istnieje w naszej bazie.")
      : // Check if passwords are different
      userPass !== userPassAgain
      ? setErrorInfo("Hasła są różne.")
      : // Set new data to database
        registrationDone();

    console.log(typeof userPass, userPass);

    addUser(newUser);
  }

  return (
    <>
      <div className="right-box">
        <h1>{translate("register-panel")}</h1>
        <DisplayErrorInfo info={errorInfo} />
        <DisplayInfo info={userInfo} />
        <form action="" onSubmit={onSubmit} id="form">
          <label htmlFor="user-name">
            <span>{translate("name-term")}</span>
            <input
              type="text"
              name="user-name"
              value={userName}
              id="user-name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label htmlFor="user-email">
            <span>{translate("email-term")}*</span>
            <input
              type="text"
              name="user-email"
              value={userEmail}
              id="user-email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
          <label htmlFor="user-pass">
            <span>{translate("password-term")}*</span>
            <input
              type="password"
              name="user-pass"
              value={userPass}
              id="user-pass"
              onChange={(e) => setUserPass(e.target.value)}
            />
          </label>
          <label htmlFor="user-pass-again">
            <span>{translate("repeat-passwors")}*</span>
            <input
              type="password"
              name="user-pass-again"
              value={userPassAgain}
              id="user-pass-again"
              onChange={(e) => setUserPassAgain(e.target.value)}
            />
          </label>
          <button id="register-btn">{translate("register-term")}</button>
        </form>
      </div>
      <MoreInfo />
    </>
  );
};

export default UserRegistration;
