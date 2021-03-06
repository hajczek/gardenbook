import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { useIntl } from 'react-intl';
import translate from '../../../i18n/translate';

const DisplayPostsUser = () => {
  const intl = useIntl();

  return (
    <div className="post-container">
      <div className="post-container-top">
        <h2>User1</h2>
        <div className="post-comments-box">
          <span id="time">1 {translate('hours-term')}</span>
          <a href="#" id="comments-link">
            5 {translate('comments-term')}
          </a>
          <a
            href="#"
            className="archive-post"
            title={intl.formatMessage({ id: 'archive-term' })}
          >
            <FontAwesomeIcon icon={faArchive} />
          </a>
        </div>
      </div>
      <p id="post">
        Maecenas tristique, risus eget lacinia pellentesque, arcu erat posuere
        quam, sit amet placerat nunc ipsum laoreet massa. Cras pharetra.
      </p>
      <img
        src="https://images.pexels.com/photos/158636/background-beautiful-beauty-bloom-158636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="picture"
      />
      <form id="add-comment">
        <input
          type="text"
          name="new-comment"
          placeholder={intl.formatMessage({ id: 'add-comment' })}
          className="new-comment"
        />
        <div className="add-comment-buttons">
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
            className="add-comment-btn"
            type="submit"
            value="+"
            title={intl.formatMessage({ id: 'add-comment' })}
          />
        </div>
      </form>
      <div className="comment-box">
        <p>
          <span className="comment-author">User2</span>Maecenas tristique, risus
          eget lacinia{' '}
        </p>
        <p className="time">30 min.</p>
      </div>
    </div>
  );
};

export default DisplayPostsUser;
