import axios from "axios";
import { API_ENDPOINT } from "../config/api";

const EVENTS = "/api/events";

const SUCCESS = 200;

export const types = {
	// GET
	FETCHING_EVENT: "FETCHING_EVENT",
	FETCH_EVENT_FAILED: "FETCH_EVENT_FAILED",
	FETCH_EVENT_SUCCESS: "FETCG_EVENT_SUCCESS",
	// POST
	INSERTING_EVENT: "INSERTING_EVENT",
	INSERT_EVENT_FAILED: "INSERT_EVENT_FAILED",
	INSERT_EVENT_SUCCESS: "INSERT_EVENT_SUCCESS",
	// PUT
	UPDATING_EVENT: "UPDATING_EVENT",
	UPDATE_EVENT_FAILED: "UPDATE_EVENT_FAILED",
	UPDATE_EVENT_SUCCESS: "UPDATE_EVENT_SUCCESS",
	// DELETE
	DELETING_EVENT: "DELETING_EVENT",
	DELETE_EVENT_FAILED: "DELETE_EVENT_FAILED",
	DELETE_EVENT_SUCCESS: "DELETE_EVENT_SUCCESS"
};

export const getEvents = () => async dispatch => {
	dispatch({ type: types.FETCHING_EVENT });
	try {
		const schedules = await axios.get(API_ENDPOINT + EVENTS);
		console.log("THIS IS GETEVENTS ACTION ", schedules);
		if (schedules.status === SUCCESS) {
			dispatch({
				type: types.FETCH_EVENT_SUCCESS,
				payload: schedules.data
			});
		} else {
			dispatch({
				type: types.FETCH_EVENT_FAILED
			});
		}
	} catch (err) {
		console.log(err);
	}
};
