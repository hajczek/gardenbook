import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import translate from '../../../i18n/translate';

const ContactsBook = () => {
  return (
    <div className="contacts-book">
      <div className="contacts-book-top">
        <FontAwesomeIcon icon={faAddressBook} />
        <h3>{translate('contacts-term')}</h3>
      </div>
      <ul id="contacts-list">
        <li>
          <a href="#">User 1 &raquo;</a>
        </li>
        <li>
          <a href="#">User 2 &raquo;</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactsBook;
