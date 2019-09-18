import eventReducer from "./eventReducer.js";
import authReducer from "./authReducer.js";
import scheduleReducer from "./scheduleReducer";
import registerReducer from "./registerReducer";
import userReducer from "./userReducers"

import { combineReducers } from "redux";

export default combineReducers({
	eventReducer,
	authReducer,
	scheduleReducer,
	registerReducer,
	userReducer
});
