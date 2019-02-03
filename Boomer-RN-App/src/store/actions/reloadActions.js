const setReload = reload => async dispatch => {
  if (reload === true) {
    dispatch({ type: "RELOAD_TRUE" });
  } else {
    dispatch({ type: "RELOAD_FALSE" });
  }
};

export default setReload;
