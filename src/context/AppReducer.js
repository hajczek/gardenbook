export default (state, action) => {
  switch (action.type) {
    case "DELETE_MATERIAL":
      return {
        ...state,
        materials: state.materials.filter(
          (material) => material.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
