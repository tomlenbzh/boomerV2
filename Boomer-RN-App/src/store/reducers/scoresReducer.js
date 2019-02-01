const initState = {
  scores: null
};

const scoresReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_SCORES_SUCCESS":
      return {
        ...state,
        scores: action.response.data
      };

    case "GET_SCORES_ERROR":
      return {
        ...state,
        scores: null
      };
    default:
      return {
        ...state
      };
  }
  return state;
};

export default scoresReducer;
