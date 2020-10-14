import React from "react";
import { useIntl } from 'react-intl';

const SearchPostsUser = () => {
  const intl = useIntl();

  return (
    <form id="search-form">
      <input type="text" placeholder={intl.formatMessage({ id: 'write-search-term' })} />
      <button id="search-btn" title={intl.formatMessage({ id: 'search-term' })}>
        &raquo;
      </button>
    </form>
  );
};

export default SearchPostsUser;
