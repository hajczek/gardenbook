import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";
import DisplayInfo from "../../common/DisplayInfo";

const UserRegistration = () => {
  const { userData } = useContext(GlobalContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPassAgain, setUserPassAgain] = useState("");
  const [errorInfo, setErrorInfo] = useState('');
  const [userInfo, setUserInfo] = useState('');

  

  function onSubmit(e) {    
    e.preventDefault();

   // Check if input fields are empty
    userEmail === '' || userPass === '' ||  userPassAgain === ''
      ? setErrorInfo('Uzupełnij wymagane pola.') 
      // Check if email is on database
      : userData.filter((user) => user.userEmail === document.getElementById('user-email').value) === true
      ? setErrorInfo('Ten email już istnieje w naszej bazie.') 
      // Check if passwords are different
      : userPass !== userPassAgain 
      ? setErrorInfo('Hasła są różne.')       
      // TODO - set new data to database
      : setUserInfo('Zostałeś zarejestrowany');
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
            onChange={(e) => setUserPass(e.target.value)}
          />
        </label>
        <label htmlFor="user-pass-again">
          <span>Powtórz hasło*</span>
          <input
            type="text"
            name="user-pass-again"
            value={userPassAgain}
            onChange={(e) => setUserPassAgain(e.target.value)}
          />
        </label>
        <button id="register-btn">Zarejestruj</button>
      </form>
    </div>
  );
};

export default UserRegistration;
