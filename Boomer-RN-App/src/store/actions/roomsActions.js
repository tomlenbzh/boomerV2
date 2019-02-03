import axios from "axios";

export const getRooms = () => async (dispatch, getState) =>
  axios
    .get(`https://alexandremartins.net/rooms`)
    .then(response => {
      dispatch({ type: "GET_ROOMS_SUCCESS", response });
    })
    .catch(error => {
      dispatch({ type: "GET_ROOMS_ERROR" });
      throw error;
    });
