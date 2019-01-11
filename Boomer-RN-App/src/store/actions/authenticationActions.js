import axios from "axios";
// import { API_URL } from "../../environment";

export const signIn = credentials => (dispatch, getState) =>
  axios
    .post(`/auths/login`, credentials, {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => {
      dispatch({ type: "SIGN_IN_SUCCESS", response });
    })
    .catch(error => {
      dispatch({ type: "SIGN_IN_ERROR", error });
      throw error;
    });

export const signUp = credentials => (dispatch, getState) =>
  axios
    .post(`/auths/signup`, credentials, {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => {
      dispatch({ type: "SIGN_UP_SUCCESS", response });
    })
    .catch(error => {
      dispatch({ type: "SIGN_UP_ERROR", error });
      throw error;
    });

export const signOut = () => (dispatch, getState) =>
  axios
    .get(`/auths/logout`)
    .then(response => {
      dispatch({ type: "SIGN_OUT_SUCCESS", response });
    })
    .catch(error => {
      dispatch({ type: "SIGN_OUT_ERROR" });
      throw error;
    });
