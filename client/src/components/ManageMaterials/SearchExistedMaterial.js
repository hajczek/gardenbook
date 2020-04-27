import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const SearchExistedMaterial = () => {
  const { materials } = useContext(GlobalContext);

  function onSubmit(e) {
    for (let i = 0; i < materials.length; i++) {
      if (
        materials[i].materialName.toLowerCase() ===
        document.getElementById("search-material").value.toLowerCase()
      )
        // In this place we must display searched material from database
        console.log(materials[i].materialName);
    }
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
        onChange={(e) => e.target.value}
        placeholder="Wpisz nazwę materiału"
      />
      <button>&raquo;</button>
    </form>
  );
};

export default SearchExistedMaterial;
