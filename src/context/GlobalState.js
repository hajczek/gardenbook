import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  plannedWorks: [
    {
      id: 1,
      workName: "Cięcie krzewów",
      workMaterial: "",
      workMatQuant: 0,
      workMatUnit: "",
      workDate: "2020-05-01",
      workDetails: "Wykonać do południa",
      workDone: false,
      workTime: 0,
      workValue: 0,
    },
    {
      id: 2,
      workName: "Prace porządkowe",
      workMaterial: "",
      workMatQuant: 0,
      workMatUnit: "",
      workDate: "2020-05-02",
      workDetails: "Sprzątnąć w garażu",
      workDone: false,
      workTime: 0,
      workValue: 0,
    },
    {
      id: 3,
      workName: "Podlewanie",
      workMaterial: "woda",
      workMatQuant: 100,
      workMatUnit: "l",
      workDate: "2020-04-25",
      workDetails: "Podlać połudionwe rabaty",
      workDone: false,
      workTime: 0,
      workValue: 0,
    },
  ],
  plants: [{ id: 1 }],
  materials: [{ id: 1 }],
  userData: [{}],
  accountSets: [{}],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        plannedWorks: state.plannedWorks,
        plants: state.plants,
        materials: state.materials,
        userData: state.userData,
        accountSets: state.accountSets,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
