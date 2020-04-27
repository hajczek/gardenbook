import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const SearchExistedPlant = () => {
  const { plants } = useContext(GlobalContext);

  function onSubmit(e) {
    for (let i = 0; i < plants.length; i++) {
      if (plants[i].plantName === document.getElementById("search-plant").value)
        console.log(plants[i].plantName);
    }
    e.preventDefault();
  }

  function onChange(e) {}

  return (
    <form onSubmit={onSubmit}>
      <input
        id="search-plant"
        type="text"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Wpisz nazwę rośliny"
      />
      <button>&raquo;</button>
    </form>
  );
};

export default SearchExistedPlant;
