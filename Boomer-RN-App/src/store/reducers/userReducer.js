const initState = {
  userInfos: null
};

const roomsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_USER_DATA_SUCCESS":
      return {
        ...state,
        userInfos: action.response.data.data
      };

    case "GET_USER_DATA_ERROR":
      return {
        ...state
      };
    default:
      return { ...state };
  }
  return state;
};

export default roomsReducer;
