import axios from "axios";
import jwt_decode from "jwt-decode";
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
		const user = await axios.post(`${API_ENDPOINT}/api/login`, creds);
		localStorage.setItem("api_token", user.data.token);
		console.log("success: ", user);
		// decoding json to get user id
		console.log(jwt_decode(localStorage.getItem("api_token")).id);
		dispatch({ type: types.LOGIN_SUCCESS });
	} catch (error) {
		console.log("login err: ", error);
		if (error.response && error.response.status === 401) {
		}
		dispatch({ type: types.LOGIN_FAILURE });
	}
};
