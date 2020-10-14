import React from 'react';
import translate from '../../../i18n/translate';

const AddPostUser = () => {

  return (
    <form id="add-post">
      <label htmlFor="newPost">{translate('add-entry')}</label>
      <textarea id="new-post" name="newPost" placeholder={(`${translate('add-entry')}`)}></textarea>
      <div class="add-post-buttons">
        <input className="add-file-btn" type="file" />
        <input className="add-post-btn" type="submit" value="+" />
      </div>
    </form>
  );
};

export default AddPostUser;
