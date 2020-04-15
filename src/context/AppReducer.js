export default (state, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
