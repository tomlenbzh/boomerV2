const initState = {
  reload: true
};

const scoresReducer = (state = initState, action) => {
  switch (action.type) {
    case "RELOAD_TRUE":
      return {
        ...state,
        reload: true
      };

    case "RELOAD_FALSE":
      return {
        ...state,
        reload: false
      };
    default:
      return {
        ...state
      };
  }
  return state;
};

export default scoresReducer;
