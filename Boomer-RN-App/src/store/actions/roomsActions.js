import axios from "axios";

const getRooms = () => async dispatch =>
  axios
    .get(`https://alexandremartins.net/rooms`)
    .then(response => {
      dispatch({ type: "GET_ROOMS_SUCCESS", response });
    })
    .catch(error => {
      dispatch({ type: "GET_ROOMS_ERROR" });
      throw error;
    });

export default getRooms;
