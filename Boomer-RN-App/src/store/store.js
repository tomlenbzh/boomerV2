import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import authenticationReducer from "./reducers/authenticationReducer";

const rootReducer = combineReducers({
  auth: authenticationReducer
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
