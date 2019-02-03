const initState = {
  scores: null,
  imgs: null
};

const scoresReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_SCORES_SUCCESS":
      return {
        ...state,
        scores: action.response.data
      };
    case "SET_IMGS":
      return {
        ...state,
        imgs: action.imgs
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
