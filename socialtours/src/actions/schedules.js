import axios from "axios";
import { API_ENDPOINT } from "../config/api";

const SCHEDULES = "/api/schedules";

const SUCCESS = 200;

export const types = {
	// GET
	FETCHING_SCHEDULE: "FETCHING_SCHEDULE",
	FETCH_SCHEDULE_FAILED: "FETCH_SCHEDULE_FAILED",
	FETCH_SCHEDULE_SUCCESS: "FETCG_SCHEDULE_SUCCESS",
	// POST
	INSERTING_SCHEDULE: "INSERTING_SCHEDULE",
	INSERT_SCHEDULE_FAILED: "INSERT_SCHEDULE_FAILED",
	INSERT_SCHEDULE_SUCCESS: "INSERT_SCHEDULE_SUCCESS",
	// PUT
	UPDATING_SCHEDULE: "UPDATING_SCHEDULE",
	UPDATE_SCHEDULE_FAILED: "UPDATE_SCHEDULE_FAILED",
	UPDATE_SCHEDULE_SUCCESS: "UPDATE_SCHEDULE_SUCCESS",
	// DELETE
	DELETING_SCHEDULE: "DELETING_SCHEDULE",
	DELETE_SCHEDULE_FAILED: "DELETE_SCHEDULE_FAILED",
	DELETE_SCHEDULE_SUCCESS: "DELETE_SCHEDULE_SUCCESS"
};

export const getSchedules = () => async dispatch => {
	dispatch({ type: types.FETCHING_SCHEDULE });
	try {
		const schedules = await axios.get(API_ENDPOINT + SCHEDULES);
		if (schedules.status === SUCCESS) {
			dispatch({
				type: types.FETCH_SCHEDULE_SUCCESS,
				payload: schedules.data
			});
		} else {
			dispatch({
				type: types.FETCH_SCHEDULE_FAILED
			});
		}
	} catch (err) {
		console.log(err);
	}
};
