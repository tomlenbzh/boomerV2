import axios from "axios";

export const getTopScores = () => (dispatch, getState) =>
  axios
    .get("https://alexandremartins.net/top/")
    .then(response => {
      dispatch({ type: "GET_SCORES_SUCCESS", response });
    })
    .catch(error => {
      dispatch({ type: "GET_SCORES_ERROR" });
      throw error;
    });

export const setImgs = imgs => dispatch => {
  dispatch({ type: "SET_IMGS", imgs });
};
