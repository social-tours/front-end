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
		let user = await axios.post(`${API_ENDPOINT}/api/login`, creds);
		console.log("success");
		localStorage.setItem("token", user.data.token);
		// decoding json to get user id
		console.log(jwt_decode(localStorage.getItem("token")).userId);

		dispatch({ type: types.LOGIN_SUCCESS });
	} catch (error) {
		console.log("login err: ", error);
		if (error.response && error.response.status === 401) {
		}
		dispatch({ type: types.LOGIN_FAILURE });
	}
};
