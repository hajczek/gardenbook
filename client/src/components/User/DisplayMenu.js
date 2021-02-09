import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const DisplayMenu = () => {
  const displayMenu = useRef('');

  function displayLeftMenu(e) {
    document.getElementById('left-menu').style.display = 'flex';
    displayMenu.current.style.display = 'none';

    e.preventDefault();
  }

  return (
    <div className="displayMenu" onClick={displayLeftMenu} ref={displayMenu}>
      <FontAwesomeIcon icon={faBars} fixedWidth title="Menu" />
    </div>
  );
};

export default DisplayMenu;
