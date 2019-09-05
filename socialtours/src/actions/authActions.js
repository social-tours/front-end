import axios from "axios";
import { API_ENDPOINT } from "../config/api";

// action types
export const types = {
	LOGIN_START: "LOGIN_START",
	LOGIN_SUCCESS: "LOGIN_SUCCESS",
	LOGIN_FAILURE: "LOGIN_FAILURE"
};

export const login = creds => async dispatch => {
	dispatch({ type: types.LOGIN_START });

	try {
		await axios.post(`${API_ENDPOINT}/api/login`, creds);
		// localStorage.setItem("token", res.data.payload);
		console.log("success");
		dispatch({ type: types.LOGIN_SUCCESS });
	} catch (error) {
		console.log("login err: ", error);
		if (error.response && error.response.status === 401) {
			// localStorage.removeItem("token");
		}
		dispatch({ type: types.LOGIN_FAILURE });
	}
};
