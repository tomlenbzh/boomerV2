const initState = {
  rooms: null,
  getRoomsError: null
};

const roomsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ROOMS_SUCCESS":
      return {
        ...state,
        getRoomsError: action.error,
        rooms: action.response.data
      };

    case "GET_ROOMS_ERROR":
      return {
        ...state,
        getRoomsError: null,
        rooms: null
      };
    default:
      return {
        ...state
      };
  }
};

export default roomsReducer;
