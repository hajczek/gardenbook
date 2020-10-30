import React from 'react';
import translate from '../../../i18n/translate';

const NewPosts = () => {
  return (
    <div id="new-posts">
      <h2>2 {translate('new-posts')}</h2>
      <ul id="posts-list">
        <li>
          <span>User1: </span>Arcu erat posuere &raquo;
        </li>
        <li>
          <span>User2: </span>Arcu erat posuere &raquo;
        </li>
      </ul>
    </div>
  );
};

export default NewPosts;
