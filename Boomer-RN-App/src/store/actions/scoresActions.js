import axios from "axios";

const getTopScores = () => dispatch =>
  axios
    .get("https://alexandremartins.net/top/")
    .then(response => {
      dispatch({ type: "GET_SCORES_SUCCESS", response });
    })
    .catch(error => {
      dispatch({ type: "GET_SCORES_ERROR" });
      throw error;
    });

export default getTopScores;
