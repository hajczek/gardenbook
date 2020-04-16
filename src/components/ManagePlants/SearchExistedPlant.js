import React from "react";

const SearchExistedPlant = () => {
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
        id="search-plant"
        type="text"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Wpisz nazwę szukanej rośliny"
      />
      <button>&raquo;</button>
    </form>
  );
};

export default SearchExistedPlant;
