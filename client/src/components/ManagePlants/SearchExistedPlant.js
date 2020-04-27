import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const SearchExistedPlant = () => {
  const { plants } = useContext(GlobalContext);

  function onSubmit(e) {
    for (let i = 0; i < plants.length; i++) {
      if (
        plants[i].plantName
          .toLowerCase()
          .includes(document.getElementById("search-plant").value.toLowerCase())
      )
        // In this place we must display searched plant from database
        console.log(plants[i].plantName);
    }
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        id="search-plant"
        type="text"
        onChange={(e) => e.target.value}
        placeholder="Wpisz nazwę rośliny"
      />
      <button>&raquo;</button>
    </form>
  );
};

export default SearchExistedPlant;
