import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";
import DisplayInfo from "../../common/DisplayInfo";

const UserRegistration = () => {
  const { users, getUsers } = useContext(GlobalContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPassAgain, setUserPassAgain] = useState("");
  const [errorInfo, setErrorInfo] = useState("");
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const registrationDone = () => {
    // Clear error info
    setErrorInfo("");
    // Display info for user about registration
    setUserInfo(
      "Zostałeś zarejestrowany. Zaloguj się na swoje konto użytkownika."
    );
    // Clear form fields
    setUserName("");
    setUserEmail("");
    setUserPass("");
    setUserPassAgain("");
  };

  function onSubmit(e) {
    e.preventDefault();

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
      : // TODO - set new data to database
        registrationDone();
    // setUserInfo('Zostałeś zarejestrowany. Zaloguj się na swoje konto użytkownika.');
  }

  return (
    <div className="info">
      <h1>Panel rejestracji</h1>
      <DisplayErrorInfo info={errorInfo} />
      <DisplayInfo info={userInfo} />
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="user-name">
          <span>Imię</span>
          <input
            type="text"
            name="user-name"
            value={userName}
            id="user-name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label htmlFor="user-email">
          <span>E-mail*</span>
          <input
            type="text"
            name="user-email"
            value={userEmail}
            id="user-email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>

        <label htmlFor="user-pass">
          <span>Hasło*</span>
          <input
            type="text"
            name="user-pass"
            value={userPass}
            id="user-pass"
            onChange={(e) => setUserPass(e.target.value)}
          />
        </label>
        <label htmlFor="user-pass-again">
          <span>Powtórz hasło*</span>
          <input
            type="text"
            name="user-pass-again"
            value={userPassAgain}
            id="user-pass-again"
            onChange={(e) => setUserPassAgain(e.target.value)}
          />
        </label>
        <button id="register-btn">Zarejestruj</button>
      </form>
    </div>
  );
};

export default UserRegistration;
