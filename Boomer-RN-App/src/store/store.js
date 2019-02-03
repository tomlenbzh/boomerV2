import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import authenticationReducer from "./reducers/authenticationReducer";
import scoresReducer from "./reducers/scoresReducer";
import roomsReducer from "./reducers/roomsReducer";
import userReducer from "./reducers/userReducer";
import reloadReducer from "./reducers/reloadReducer";

const rootReducer = combineReducers({
  auth: authenticationReducer,
  rooms: roomsReducer,
  user: userReducer,
  scores: scoresReducer,
  imgs: scoresReducer,
  reload: reloadReducer
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
