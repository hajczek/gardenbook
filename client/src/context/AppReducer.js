export default (state, action) => {
  switch (action.type) {
    case "GET_WORKS":
      return {
        ...state,
        loading: false,
        works: action.payload,
      };
    case "GET_PLANTS":
      return {
        ...state,
        loading: false,
        plants: action.payload,
      };
    case "GET_MATERIALS":
      return {
        ...state,
        loading: false,
        materials: action.payload,
      };
    case "GET_USER":
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    case "DELETE_MATERIAL":
      return {
        ...state,
        materials: state.materials.filter(
          (material) => material.id !== action.payload
        ),
      };
    case "DELETE_PLANT":
      return {
        ...state,
        plants: state.plants.filter((plant) => plant.id !== action.payload),
      };
    case "DELETE_WORK":
      return {
        ...state,
        plannedWorks: state.plannedWorks.filter(
          (work) => work.id !== action.payload
        ),
      };
    case "ADD_MATERIAL":
      return {
        ...state,
        materials: [...state.materials, action.payload],
      };
    case "ADD_PLANT":
      return {
        ...state,
        plants: [...state.plants, action.payload],
      };
    case "ADD_WORK":
      return {
        ...state,
        plannedWorks: [...state.plannedWorks, action.payload],
      };
    case "EDIT_MATERIAL":
      return {
        ...state,
        materials: state.materials.filter(
          (material) => material.id === action.payload
        ),
      };
    case "EDIT_PLANT":
      return {
        ...state,
        plants: state.plants.filter((plant) => plant.id === action.payload),
      };
    case "EDIT_WORK":
      return {
        ...state,
        plannedWorks: state.plannedWorks.filter(
          (work) => work.id === action.payload
        ),
      };
    case "EDIT_USER_DATA":
      return {
        ...state,
        userData: state.userData.filter((data) => data.id === action.payload),
      };
    case "WORKS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "PLANTS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "MATERIALS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "USER_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
