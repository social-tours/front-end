import axios from "axios";
import { API_ENDPOINT } from "../config/api";

import { types } from "./types";

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
