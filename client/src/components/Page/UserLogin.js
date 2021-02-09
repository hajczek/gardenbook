// @ts-nocheck
import React, { useState, useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../config.js';
import DisplayErrorInfo from '../../common/DisplayErrorInfo';
import DisplayInfo from '../../common/DisplayInfo';
import MoreInfo from './MoreInfo';
import { useHistory } from 'react-router-dom';
import translate from '../../i18n/translate';

const UserLogin = () => {
  let history = useHistory();

  const { users, getUsers, editUserDetails } = useContext(GlobalContext);
  const [userEmailLogin, setUserEmailLogin] = useState('');
  const [userPassLogin, setUserPassLogin] = useState('');
  const [errorInfo, setErrorInfo] = useState('');
  const [loginInfo, setLoginInfo] = useState('');

  const inputEmailLogin = useRef('');
  const inputPassLogin = useRef('');
  const userWelcomeText = useRef('');

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function displayAfterLogin() {
    userWelcomeText.current.innerHTML = translate('welcome-term');
    setLoginInfo(translate('after-login'));
    history.push('/alerty');
    window.location.reload();
  }

  const login = async (e) => {
    e.preventDefault();

    const editUser = {
      userLogged: true,
    };

    // Check if input fields are empty
    userEmailLogin === '' || userPassLogin === ''
      ? setErrorInfo(translate('fill-required-fields'))
      : setErrorInfo('');

    // Filter user
    const user = users.map((userExist) =>
      !bcrypt.compare(userExist.userPass, inputPassLogin.current.value) ||
      userExist.userEmail !== inputEmailLogin.current.value
        ? setErrorInfo(translate('wrong-data'))
        : bcrypt.compare(userExist.userPass, inputPassLogin.current.value)
        ? editUserDetails(userExist._id, editUser) && displayAfterLogin()
        : null
    );

    const token = jwt.sign({ id: user._id }, SECRET_KEY);
  };

  return (
    <>
      <div className="right-box">
        <h1 ref={userWelcomeText}>{translate('login-panel')}</h1>
        <DisplayErrorInfo info={errorInfo} />
        <DisplayInfo info={loginInfo} />
        <form onSubmit={login} id="user-email-form">
          <label htmlFor="user-email-login">
            <span>{translate('email-term')}</span>
            <input
              type="email"
              name="user-email-login"
              value={userEmailLogin}
              ref={inputEmailLogin}
              id="user-email-login"
              onChange={(e) => setUserEmailLogin(e.target.value)}
            />
          </label>
          <label htmlFor="user-pass-login">
            <span>{translate('password-term')}</span>
            <input
              type="password"
              name="user-pass-login"
              value={userPassLogin}
              id="user-pass-login"
              ref={inputPassLogin}
              onChange={(e) => setUserPassLogin(e.target.value)}
            />
          </label>
          <button id="login-btn">{translate('login-term')}</button>
        </form>
      </div>
      <MoreInfo />
    </>
  );
};

export default UserLogin;
