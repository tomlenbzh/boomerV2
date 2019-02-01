const initState = {
  userInfos: null
};

const roomsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_USER_DATA_SUCCESS":
      console.log("Success user");
      return {
        ...state,
        userInfos: action.response.data.data
      };

    case "GET_USER_DATA_ERROR":
      console.log("Fail user");
      return {
        ...state
      };
    default:
      return { ...state };
  }
  return state;
};

export default roomsReducer;
