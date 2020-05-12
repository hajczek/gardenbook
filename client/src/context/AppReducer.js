export default (state, action) => {
  switch (action.type) {
    case "GET_WORKS":
      return {
        ...state,
        plannedWorks: state.plannedWorks.filter(
          (work) => work.id !== action.payload
        ),
      };
    case "GET_PLANTS":
      return {
        ...state,
        plants: state.plants.filter((plant) => plant.id !== action.payload),
      };
    case "GET_MATERIALS":
      return {
        ...state,
        materials: state.materials.filter(
          (material) => material.id !== action.payload
        ),
      };
    case "GET_USER":
      return {
        ...state,
        userData: state.userData.filter((user) => user.id !== action.payload),
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
        materials: [action.payload, ...state.materials],
      };
    case "ADD_PLANT":
      return {
        ...state,
        plants: [action.payload, ...state.plants],
      };
    case "ADD_WORK":
      return {
        ...state,
        plannedWorks: [action.payload, ...state.plannedWorks],
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
    default:
      return state;
  }
};
