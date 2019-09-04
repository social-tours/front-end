import eventReducer from "./eventReducer.js";
import scheduleReducer from "./scheduleReducer";

import { combineReducers } from "redux";

export default combineReducers({
	eventReducer,
	scheduleReducer
});
