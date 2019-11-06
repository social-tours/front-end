import axios from "axios";
import { API_ENDPOINT } from "../config/api";

const SUCCESS = 200;

export const types = {
	// GET ALL
	FETCH_ALL_SCHEDULES_START: "FETCH_ALL_SCHEDULES_START",
	FETCH_ALL_SCHEDULES_FAILED: "FETCH_ALL_SCHEDULES_FAILED",
	FETCH_ALL_SCHEDULES_SUCCESS: "FETCH_ALL_SCHEDULES_SUCCESS",

	// GET
	FETCH_SCHEDULE_START: "FETCH_SCHEDULE_START",
	FETCH_SCHEDULE_FAILED: "FETCH_SCHEDULE_FAILED",
	FETCH_SCHEDULE_SUCCESS: "FETCH_SCHEDULE_SUCCESS",

	// POST
	INSERT_SCHEDULE_START: "INSERT_SCHEDULE_START",
	INSERT_SCHEDULE_FAILED: "INSERT_SCHEDULE_FAILED",
	INSERT_SCHEDULE_SUCCESS: "INSERT_SCHEDULE_SUCCESS",
	// PUT
	UPDATE_SCHEDULE_START: "UPDATE_SCHEDULE_START",
	UPDATE_SCHEDULE_FAILED: "UPDATE_SCHEDULE_FAILED",
	UPDATE_SCHEDULE_SUCCESS: "UPDATE_SCHEDULE_SUCCESS",
	// DELETE
	DELETE_SCHEDULE_START: "DELETE_SCHEDULE_START",
	DELETE_SCHEDULE_FAILED: "DELETE_SCHEDULE_FAILED",
	DELETE_SCHEDULE_SUCCESS: "DELETE_SCHEDULE_SUCCESS"
};

export const getAllSchedules = () => async dispatch => {
	dispatch({ type: types.FETCH_ALL_SCHEDULES_START });
	try {
		const schedules = await axios.get(`${API_ENDPOINT}/api/schedules`);
		if (schedules.status === SUCCESS) {
			dispatch({
				type: types.FETCH_ALL_SCHEDULES_SUCCESS,
				payload: schedules.data
			});
		} else throw err
	} catch (err) {
		console.log(err);
		dispatch({
			type: types.FETCH_ALL_SCHEDULES_FAILED,
			payload: err
		});
	}
};

export const getSchedule = id => async dispatch => {
	dispatch({ type: FETCH_SCHEDULE_START })
	try {
		const schedule = await axios.get(`${API_ENDPOINT}/api/schedules/${id}`);
		if (schedule.status === SUCCESS) {
			dispatch({
				type: types.FETCH_SCHEDULE_SUCCESS,
				payload: schedule.data
			});
		} else throw err
	} catch (err) {
		console.log(err);
		dispatch({
			type: types.FETCH_SCHEDULE_FAILED,
			payload: err
		});
	}
}

export const addSchedule = schedule => async dispatch => {
	dispatch({ type: types.INSERTING_SCHEDULE });
	try {
		const res = await axios.post(`${API_ENDPOINT}/api/schedules`, schedule);
		console.log("Adding schedule", schedule, res);
		if (res.status === SUCCESS) {
			dispatch({
				type: types.INSERT_SCHEDULE_SUCCESS,
				payload: res.data
			});
		} else throw err
	} catch (err) {
		console.log(err);
		dispatch({
			type: types.FETCH_SCHEDULE_FAILED,
			payload: err
		});
	}
};

export const updateSchedule = schedule => async dispatch => {
	dispatch({ type: UPDATE_SCHEDULE_START })
	try {
		const res = await axios.get(`${API_ENDPOINT}/api/schedules/${schedule.id}`, schedule);
		if (res.status === SUCCESS) {
			dispatch({
				type: types.UPDATE_SCHEDULE_SUCCESS,
				payload: res.data
			});
		} else throw err
	} catch (err) {
		console.log(err);
		dispatch({
			type: types.UPDATE_SCHEDULE_FAILED,
			payload: err
		});
	}
}

export const deleteSchedule = id => async dispatch => {
	dispatch({ type: DELETE_SCHEDULE_START })
	try {
		const schedule = await axios.delete(`${API_ENDPOINT}/api/schedules/${id}`);
		if (schedule.status === SUCCESS) {
			dispatch({
				type: types.DELETE_SCHEDULE_SUCCESS
			});
		} else throw err
	} catch (err) {
		console.log(err);
		dispatch({
			type: types.DELETE_SCHEDULE_FAILED,
			payload: err
		});
	}
}

// Shape of schedule
//
// id: 1,
// event_id: 1, // FK ID in 'Events' table
// sequence: 1,
// title: "Bifunkal Event Schedule",
// description: "Blues band from Chicago",
// location: "House of Blues",
// city: "Chicago",
// postal_code: "60654",
// country: "USA",
// start_date_time: "2019-09-25 05:00 PM",
// end_date_time: "2019-09-25 08:00 PM"
