import React from 'react';
import { useIntl } from 'react-intl';
import translate from '../../../i18n/translate';

const AddPostUser = () => {
  const intl = useIntl();

  return (
    <form id="add-post">
      <label htmlFor="newPost">{translate('add-entry')}</label>
      <textarea
        id="new-post"
        name="newPost"
        placeholder={intl.formatMessage({ id: 'write-here' })}
      ></textarea>
      <div className="add-post-buttons">
        <label className="add-file-label" htmlFor="upload">
          {intl.formatMessage({ id: 'choose-file' })}
        </label>
        <input
          id="upload"
          className="add-file-btn"
          type="file"
          style={{ visibility: 'hidden' }}
        />
        <input
          className="add-post-btn"
          type="submit"
          value="+"
          title={intl.formatMessage({ id: 'add-comment' })}
        />
      </div>
    </form>
  );
};

export default AddPostUser;
