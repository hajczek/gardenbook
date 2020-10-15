import React from "react";
import translate from "../../i18n/translate";

const Help = () => {
  return (
    <div className="user-content">
      <div className="user-right-box">
        <h2>{translate("help-term")}</h2>
        <p>{translate("help-text")}</p>
      </div>
    </div>
  );
};

export default Help;
