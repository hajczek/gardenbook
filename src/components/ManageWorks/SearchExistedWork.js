import React from "react";

const SearchExistedWork = () => {
  function onSubmit(e) {
    console.log("Send");
    e.preventDefault();
  }

  function onChange(e) {
    console.log(e);
  }

  return (
    <form onSubmit={onSubmit}>
      Wybierz okres od
      <input
        id="date-from"
        type="date"
        onChange={(e) => onChange(e.target.value)}
      />
      do
      <input
        type="date"
        id="date-to"
        onChange={(e) => onChange(e.target.value)}
      />
      <button>&raquo;</button>
    </form>
  );
};

export default SearchExistedWork;
