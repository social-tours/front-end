import axios from "axios";
import { API_ENDPOINT } from "../config/api";

export const types = {
	FETCH_USER_START: "FETCH_USER_START",
	FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
	FETCH_USER_FAILURE: "FETCH_USER_FAILURE",

	UPDATE_USER_START: "UPDATE_USER_START",
	UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
	UPDATE_USER_FAILURE: "UPDATE_USER_FAILURE",

	DELETE_USER_START: "DELETE_USER_START",
	DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
	DELETE_USER_FAILURE: "DELETE_USER_FAILURE"
};

export const fetchUser = id => async dispatch => {
	dispatch({ type: types.FETCH_USER_START });
	try {
		const user = await axios.get(`${API_ENDPOINT}/api/users/${id}`);
		dispatch({ type: types.FETCH_USER_SUCCESS, payload: user.data });
	} catch (err) {
		dispatch({ type: types.FETCH_USER_FAILURE, payload: err });
	}
};

export const updateUser = (id, data) => async dispatch => {
	dispatch({ type: types.UPDATE_USER_START });
	try {
		const user = await axios.put(`${API_ENDPOINT}/api/users/${id}`, data);
		dispatch({ type: types.UPDATE_USER_SUCCESS, payload: user.data });
	} catch (err) {
		dispatch({ type: types.UPDATE_USER_FAILURE, payload: err });
	}
};

export const deleteUser = id => async dispatch => {
	dispatch({ type: types.DELETE_USER_START });
	try {
		const data = await axios.delete(`${API_ENDPOINT}/api/users/${id}`);
		dispatch({ type: types.DELETE_USER_SUCCESS });
	} catch (err) {
		dispatch({ type: types.DELETE_USER_FAILURE, payload: err });
	}
};
