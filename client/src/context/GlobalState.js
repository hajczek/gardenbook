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

  async function getWorks() {
    try {
      const res = await axios.get("/plannedWorks");

      dispatch({
        type: "GET_WORKS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "WORKS_ERROR",
        payload: err.response.data.err,
      });
    }
  }

  async function getPlants() {
    try {
      const res = await axios.get("/plants");

      dispatch({
        type: "GET_PLANTS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "PLANTS_ERROR",
        payload: err.response.data.err,
      });
    }
  }

  async function getMaterials() {
    try {
      const res = await axios.get("/materials");

      dispatch({
        type: "GET_MATERIALS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "MATERIALS_ERROR",
        payload: err.response.data.err,
      });
    }
  }

  async function getUser() {
    try {
      const res = await axios.get("/user");

      dispatch({
        type: "GET_USER",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "USER_ERROR",
        payload: err.response.data.err,
      });
    }
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
        getWorks,
        getPlants,
        getMaterials,
        getUser,
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
