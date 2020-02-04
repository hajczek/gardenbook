import React from "react";

const AccountUserDataBox = () => {
  return (
    <div id="user-data">
      <h2>Twoje dane</h2>
      <p>Kliknij w element który chcesz zmienić.</p>
      <p>
        Imię
        <span className="edited-value" id="user_name">
          Jan
        </span>
      </p>
      <p>
        Login
        <span className="edited-value" id="user_login">
          ogrodnik_123
        </span>
      </p>
      <p>
        Hasło
        <span className="edited-value" id="user_password">
          ******
        </span>
      </p>
      <p>
        E-mail
        <span className="edited-value" id="user_email">
          jan_kowalski@onet.pl
        </span>
      </p>
      <p>
        Tel.
        <span className="edited-value" id="user_phone">
          +48 658 888 888
        </span>
      </p>
    </div>
  );
};

export default AccountUserDataBox;
