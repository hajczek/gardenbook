import React from "react";

const SearchExistedMaterial = () => {
  function onSubmit(e) {
    console.log("Send");
    e.preventDefault();
  }

  function onChange(e) {
    console.log(e);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        id="search-material"
        type="text"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Wpisz nazwę szukanego materiału"
      />
      <button>&raquo;</button>
    </form>
  );
};

export default SearchExistedMaterial;
