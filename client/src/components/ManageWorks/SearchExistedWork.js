import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const SearchExistedWork = () => {
  const { plannedWorks } = useContext(GlobalContext);

  function onSubmit(e) {
    for (let i = 0; i < plannedWorks.length; i++) {
      if (
        new Date(plannedWorks[i].workTerm) >
          new Date(document.getElementById("date-from").value) &&
        new Date(plannedWorks[i].workTerm) <
          new Date(document.getElementById("date-to").value)
      )
        // In this place we must display searched planned works list
        document.getElementById(
          "search-result-for-works"
        ).innerHTML = `<p>${plannedWorks[i].workTerm}</p>`;
      console.log(plannedWorks[i].workTerm);
      e.preventDefault();
    }
  }

  return (
    <form onSubmit={onSubmit}>
      Wybierz okres od
      <input id="date-from" type="date" onChange={(e) => e.target.value} />
      do
      <input type="date" id="date-to" onChange={(e) => e.target.value} />
      <button>&raquo;</button>
    </form>
  );
};

export default SearchExistedWork;
