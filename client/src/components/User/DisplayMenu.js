import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const DisplayMenu = () => {
  function changeStateOfMenu(e) {
    document.getElementById("left-menu").style.display = "flex";
    document.querySelector(".displayMenu").style.display = "none";

    e.preventDefault();
  }

  return (
    <div className="displayMenu" onClick={changeStateOfMenu}>
      <FontAwesomeIcon icon={faBars} fixedWidth title="Menu" />
    </div>
  );
};

export default DisplayMenu;
