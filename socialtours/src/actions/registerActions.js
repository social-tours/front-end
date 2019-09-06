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

export const auth0SignUp = user => dispatch => {
	const webAuth = new auth0.WebAuth({
		domain: "dev-r8zrga7p.auth0.com",
		clientID: "mKqnZoQovxuLSlTUSIwjj4bcuMOH3aX1"
	});

	dispatch({ type: REGISTER_START });

	webAuth
		.signup(user, err => {
			if (err) throw err;
		})
		.then(res => {
			console.log(res);
			dispatch({ type: REGISTER_SUCCESS, payload: res });
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: REGISTER_FAILURE, payload: err });
		});
};

export const addUser = user => async dispatch => {
	dispatch({ type: ADD_USER_START });
	try {
		const addUserData = await axios.post(
			`${API_ENDPOINT}/api/register`,
			newUser
		);
		console.log(addUserData);
		dispatch({ type: ADD_USER_SUCCESS, payload: addUserData });
	} catch (err) {
		console.log(err);
		dispatch({ type: ADD_USER_FAILURE, payload: err });
	}
};
