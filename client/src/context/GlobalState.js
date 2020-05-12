import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  plannedWorks: [],
  plants: [],
  materials: [],
  userData: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Functions
  function deleteMaterial(id) {
    dispatch({
      type: "DELETE_MATERIAL",
      payload: id,
    });
  }

  function deletePlant(id) {
    dispatch({
      type: "DELETE_PLANT",
      payload: id,
    });
  }

  function deleteWork(id) {
    dispatch({
      type: "DELETE_WORK",
      payload: id,
    });
  }

  function addMaterial(material) {
    dispatch({
      type: "ADD_MATERIAL",
      payload: material,
    });
  }

  function addPlant(plant) {
    dispatch({
      type: "ADD_PLANT",
      payload: plant,
    });
  }

  function addWork(work) {
    dispatch({
      type: "ADD_WORK",
      payload: work,
    });
  }

  function editMaterial(id) {
    dispatch({
      type: "EDIT_MATERIAL",
      payload: id,
    });
  }

  function editPlant(id) {
    dispatch({
      type: "EDIT_PLANT",
      payload: id,
    });
  }

  function editWork(id) {
    dispatch({
      type: "EDIT_WORK",
      payload: id,
    });
  }

  function editUserData(id) {
    dispatch({
      type: "EDIT_USER_DATA",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        plannedWorks: state.plannedWorks,
        plants: state.plants,
        materials: state.materials,
        userData: state.userData,
        accountSets: state.accountSets,
        deleteMaterial,
        deletePlant,
        deleteWork,
        addMaterial,
        addPlant,
        addWork,
        editMaterial,
        editPlant,
        editWork,
        editUserData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
