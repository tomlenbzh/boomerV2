const initState = {
  authError: null,
  registerError: null,
  hasRegistered: false,
  userData: null
};

const authenticationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        authError: null,
        hasRegistered: true,
        userData: action.response.data
      };

    case 'SIGN_IN_ERROR':
      return {
        ...state,
        authError: 'Sign In Error : ' + action.error.response.data.message,
        hasRegistered: false,
        userData: null,
        profile: null
      };

    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        registerError: null,
        hasRegistered: true
      };

    case 'SIGN_UP_ERROR':
      return {
        ...state,
        registerError: 'Sign Up Error : ' + action.error.response.data.message,
        hasRegistered: false
      };

    case 'SIGN_OUT_SUCCESS':
      return {
        ...state,
        authError: null,
        registerError: null,
        userData: null,
        hasRegistered: false
      };

    case 'SIGN_OUT_ERROR':
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
  return state;
};

export default authenticationReducer;
