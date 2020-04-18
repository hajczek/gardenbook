import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

const ContactsBook = () => {
  return (
    <div id="contacts-book">
      <FontAwesomeIcon icon={faAddressBook} />
      <h3>Kontakty</h3>
      <ul id="contacts-list">
        <li>
          <a href="#">User 1</a>
        </li>
        <li>
          <a href="#">User 2</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactsBook;
