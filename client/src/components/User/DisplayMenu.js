import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const DisplayMenu = () => {
  function displayLeftMenu(e) {
    document.getElementById("left-menu").style.display = "flex";
    document.querySelector(".displayMenu").style.display = "none";

    e.preventDefault();
  }

  return (
    <div className="displayMenu" onClick={displayLeftMenu}>
      <FontAwesomeIcon icon={faBars} fixedWidth title="Menu" />
    </div>
  );
};

export default DisplayMenu;
