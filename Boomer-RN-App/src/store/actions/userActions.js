import axios from "axios";

export const getUserData = pseudo => (dispatch, getState) => axios
    .get('https://alexandremartins.net/auths/top//user/' + pseudo)
    .then(response => {
      dispatch({ type: 'GET_USER_DATA_SUCCESS', response });
    })
    .catch(error => {
      dispatch({ type: 'GET_USER_DATA_ERROR' });
      throw error;
    });
