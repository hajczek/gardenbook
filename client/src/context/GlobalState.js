// @ts-nocheck
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  works: [],
  plants: [],
  materials: [],
  users: [],
  posts: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getWorks() {
    try {
      const res = await axios.get('/works');

      dispatch({
        type: 'GET_WORKS',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'WORKS_ERROR',
        payload: err.response.data.err,
      });
    }
  }

  async function getPlants() {
    try {
      const res = await axios.get('/plants');

      dispatch({
        type: 'GET_PLANTS',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'PLANTS_ERROR',
        payload: err.response.data.err,
      });
    }
  }

  async function getMaterials() {
    try {
      const res = await axios.get('/materials');

      dispatch({
        type: 'GET_MATERIALS',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'MATERIALS_ERROR',
        payload: err.response.data.err,
      });
    }
  }

  async function getUsers() {
    try {
      const res = await axios.get('/users');

      dispatch({
        type: 'GET_USER',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'USER_ERROR',
        payload: err.response.data.err,
      });
    }
  }

  async function getPosts() {
    try {
      const res = await axios.get('/posts');

      dispatch({
        type: 'GET_POSTS',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'POSTS_ERROR',
        payload: err.response.data.err,
      });
    }
  }

  async function addMaterial(material) {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/materials', material, config);

      dispatch({
        type: 'ADD_MATERIAL',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'MATERIALS_ERROR',
        payload: err.response.data.err,
      });
    }
  }

  async function addPlant(plant) {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/plants', plant, config);

      dispatch({
        type: 'ADD_PLANT',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'PLANTS_ERROR',
        payload: err.response.data.err,
      });
    }
  }

  async function addWork(work) {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/works', work, config);

      dispatch({
        type: 'ADD_WORK',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'WORKS_ERROR',
        payload: err.response.data.err,
      });
    }
  }

  async function addUser(user) {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/users', user, config);

      dispatch({
        type: 'ADD_USER',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'USER_ERROR',
        payload: err.response.data.err,
      });
    }
  }

  async function addPost(post) {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/posts', post, config);

      dispatch({
        type: 'ADD_POST',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'POSTS_ERROR',
        payload: err.response.data.err,
      });
    }
  }

  async function deleteMaterial(id) {
    try {
      await axios.delete(`/materials/${id}`);

      dispatch({
        type: 'DELETE_MATERIAL',
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'MATERIALS_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function deletePlant(id) {
    try {
      await axios.delete(`/plants/${id}`);

      dispatch({
        type: 'DELETE_PLANT',
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'PLANTS_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function deleteWork(id) {
    try {
      await axios.delete(`/works/${id}`);

      dispatch({
        type: 'DELETE_WORK',
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'WORKS_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function deletePost(id) {
    try {
      await axios.delete(`/posts/${id}`);

      dispatch({
        type: 'DELETE_POST',
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'POSTS_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function editMaterial(id, material) {
    try {
      const res = await axios.put(`/materials/${id}`, material);

      dispatch({
        type: 'EDIT_MATERIAL',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'MATERIALS_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function editPlant(id, plant) {
    try {
      const res = await axios.put(`/plants/${id}`, plant);

      dispatch({
        type: 'EDIT_PLANT',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'PLANTS_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function editWork(id, work) {
    try {
      const res = await axios.put(`/works/${id}`, work);

      dispatch({
        type: 'EDIT_WORK',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'WORKS_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function editUserDetails(id, data) {
    try {
      const res = await axios.put(`/users/${id}`, data);

      dispatch({
        type: 'EDIT_USER_DATA',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'USER_ERROR',
        payload: err,
      });
    }
  }

  async function editPost(id, post) {
    try {
      const res = await axios.put(`/posts/${id}`, post);

      dispatch({
        type: 'EDIT_POST',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'POSTS_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        works: state.works,
        plants: state.plants,
        materials: state.materials,
        users: state.users,
        accountSets: state.accountSets,
        posts: state.posts,
        error: state.error,
        loding: state.loading,
        getWorks,
        getPlants,
        getMaterials,
        getUsers,
        getPosts,
        deleteMaterial,
        deletePlant,
        deleteWork,
        deletePost,
        addMaterial,
        addPlant,
        addWork,
        addUser,
        addPost,
        editMaterial,
        editPlant,
        editWork,
        editUserDetails,
        editPost,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
