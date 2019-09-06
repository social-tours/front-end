import auth0 from "auth0-js";
import axios from "axios";
import { API_ENDPOINT } from "../config/api";

export const types = {
	REGISTER_START: "REGISTER_START",
	REGISTER_SUCCESS: "REGISTER_SUCCESS",
	REGISTER_FAILURE: "REGISTER_FAILURE",

	ADD_USER_START: "ADD_USER_START",
	ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
	ADD_USER_FAILURE: "ADD_USER_FAILURE"
};
/**
 * Function to register new user to Auth0
 * @param {object} userSignUp
 * @returns {object} Auth0 user profile
 */
export const auth0SignUp = userSignUp => async dispatch => {
	const webAuth = new auth0.WebAuth({
		domain: "dev-r8zrga7p.auth0.com",
		clientID: "mKqnZoQovxuLSlTUSIwjj4bcuMOH3aX1"
	});

	dispatch({ type: types.REGISTER_START });

	try {
		const addAuth0User = await webAuth.signup(userSignUp, err => {
			if (err) throw err;
		});
		dispatch({ type: types.REGISTER_SUCCESS, payload: addAuth0User });
	} catch (err) {
		dispatch({ type: types.REGISTER_FAILURE, payload: err });
	}
};

/**
 * Function to add new user to API database
 * @param {object} user
 * @returns {object} new user record
 */
export const addUser = user => async dispatch => {
	dispatch({ type: types.ADD_USER_START });
	try {
		const addUserData = await axios.post(`${API_ENDPOINT}/api/register`, user);
		dispatch({ type: types.ADD_USER_SUCCESS, payload: addUserData.data });
	} catch (err) {
		dispatch({ type: types.ADD_USER_FAILURE, payload: err });
	}
};
