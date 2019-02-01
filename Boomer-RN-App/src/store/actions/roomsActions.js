import axios from "axios";

export const getRooms = () => async (dispatch, getState) =>
  axios
    .get(`https://alexandremartins.net/rooms`)
    .then(response => {
      dispatch({ type: "GET_ROOMS_SUCCESS", response });
      // console.log("response : ", response.data);
    })
    .catch(error => {
      dispatch({ type: "GET_ROOMS_ERROR" });
      // console.log("error : ", error);
      throw error;
    });
