import eventReducer from "./eventReducer.js";
import authReducer from "./authReducer.js";
import registerReducer from "./registerReducer";

import { combineReducers } from "redux";

export default combineReducers({
	eventReducer,
	authReducer,
	registerReducer
});
