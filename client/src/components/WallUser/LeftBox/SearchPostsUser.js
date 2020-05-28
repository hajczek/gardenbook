import React from "react";

const SearchPostsUser = () => {
  return (
    <form id="search-form">
      <input type="text" placeholder="Wpisz szukaną frazę ..." />
      <button id="search-btn" title="Szukaj">
        &raquo;
      </button>
    </form>
  );
};

export default SearchPostsUser;
