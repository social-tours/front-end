import eventReducer from "./eventReducer.js";
import authReducer from "./authReducer.js";

import { combineReducers } from "redux";

export default combineReducers({
	eventReducer,
	authReducer
});
