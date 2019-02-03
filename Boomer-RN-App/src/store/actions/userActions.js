import axios from "axios";

const getUserData = pseudo => dispatch =>
  axios
    .get(`https://alexandremartins.net/user/${pseudo}`)
    .then(response => {
      dispatch({ type: "GET_USER_DATA_SUCCESS", response });
    })
    .catch(error => {
      dispatch({ type: "GET_USER_DATA_ERROR" });
      throw error;
    });

export default getUserData;
