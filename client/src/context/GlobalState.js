import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  works: [],
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
      const res = await axios.get("/works");

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

  function addUser(user) {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  }

  async function deleteMaterial(id) {
    try {
      await axios.delete(`/materials/${id}`);

      dispatch({
        type: "DELETE_MATERIAL",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "MATERIALS_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deletePlant(id) {
    try {
      await axios.delete(`/plants/${id}`);

      dispatch({
        type: "DELETE_PLANT",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "PLANTS_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteWork(id) {
    try {
      await axios.delete(`/works/${id}`);

      dispatch({
        type: "DELETE_WORK",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "WORKS_ERROR",
        payload: err.response.data.error,
      });
    }
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
        works: state.works,
        plants: state.plants,
        materials: state.materials,
        userData: state.userData,
        accountSets: state.accountSets,
        error: state.error,
        loding: state.loading,
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
        addUser,
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
