import axios from "axios";
import { API_ENDPOINT } from "../config/api";

// action types
export const types = {
	// Completed by Greg,
	FETCH_EVENTS: "FETCH_EVENTS",
	FETCH_EVENTS_SUCCESS: "FETCH_EVENTS_SUCCESS",
	FETCH_EVENTS_FAILED: "FETCH_EVENTS_FAILED",

	// Completed by Greg,
	FETCH_EVENT: "FETCH_EVENT",
	FETCH_EVENT_SUCCESS: "FETCH_EVENT_SUCCESS",
	FETCH_EVENT_FAILED: "FETCH_EVENT_FAILED",

	// Completed by Michael,
	POST_EVENT: "POST_EVENT",
	POST_EVENT_SUCCESS: "POST_EVENT_SUCCESS",
	POST_EVENT_FAILED: "POST_EVENT_FAILED",

	// Completed by Greg,
	PUT_EVENT: "PUT_EVENT",
	PUT_EVENT_SUCCESS: "PUT_EVENT_SUCCESS",
	PUT_EVENT_FAILED: "PUT_EVENT_FAILED",

	// Completed by Greg,
	DELETE_EVENT: "DELETE_EVENT",
	DELETE_EVENT_SUCCESS: "DELETE_EVENT_SUCCESS",
	DELETE_EVENT_FAILED: "DELETE_EVENT_FAILED",

	LOGIN_START: "LOGIN_START",
	LOGIN_SUCCESS: "LOGIN_SUCCESS",
	LOGIN_FAILURE: "LOGIN_FAILURE"
};

// get event list, FETCHEVENT, SUCCEED, FAIL
export const fetchEvents = () => async dispatch => {
	dispatch({
		type: types.FETCH_EVENTS
	});
	try {
		const events = await axios.get(API_ENDPOINT + `/api/events`);
		console.log(events);
		if (events.status === 200) {
			console.log("Im Here");
			dispatch({
				type: types.FETCH_EVENTS_SUCCESS,
				payload: events.data
			});
		} else {
			dispatch({
				type: types.FETCH_EVENTS_FAILED
			});
		}
	} catch (err) {
		//types.FETCH_FAILED
		dispatch({
			type: types.FETCH_EVENTS_FAILED
		});
		console.log(err);
	}
};

// get event, FETCHEVENT, SUCCEED, FAIL
export const fetchEvent = eventID => async dispatch => {
	dispatch({
		type: types.FETCH_EVENT
	}); //greg
	try {
		const event = await axios.get(API_ENDPOINT + `/api/events/${eventID}`);
		event.status === 200
			? dispatch({
					type: types.FETCH_EVENT_SUCCESS,
					payload: event.data
			  })
			: dispatch({
					type: types.FETCH_EVENT_FAILED
					// payload: event.data
			  });
	} catch (err) {
		//types.FETCH_FAILED
		dispatch({
			type: types.FETCH_EVENT_FAILED
		});
		console.log(err);
	}
};

// Post event
export const postEvent = event => async dispatch => {
	dispatch({
		type: types.POST_EVENT
	}); //greg
	try {
		const newEvent = await axios.post(API_ENDPOINT + `/api/events`, event);
		const events = await axios.get(API_ENDPOINT + `/api/events/`);
		newEvent.status === 201 && events.status === 200
			? dispatch({
					type: types.POST_EVENT_SUCCESS,
					payload: events.data
			  })
			: dispatch({
					type: types.POST_EVENT_FAILED
					// payload: event.data
			  });
	} catch (err) {
		//POST_FAILED
		dispatch({
			type: types.POST_EVENT_FAILED
		});
		console.log(err);
	}
};

// Put event
export const putEvent = event => async dispatch => {
	dispatch({
		type: types.PUT_EVENT
	}); //greg
	try {
		const res = await axios.put(API_ENDPOINT + `/api/events/${event.id}`, event);
		console.log("UPDATE EVENT ACTION CREATOR: ", res)
		res.status === 200
			? dispatch({
					type: types.PUT_EVENT_SUCCESS,
					payload: res.data
			  })
			: dispatch({
					type: types.PUT_EVENT_FAILED,
					payload: res.data
			  });
	} catch (err) {
		//FETCH_FAILED
		dispatch({
			type: types.PUT_EVENT_FAILED
		});
		console.log(err);
	}
};

// delete event
export const deleteEvent = eventID => async dispatch => {
	dispatch({
		type: types.DELETE_EVENT
	}); //greg
	try {
		const event = await axios.delete(API_ENDPOINT + `/api/events/${eventID}`);
		const events = await axios.get(API_ENDPOINT + `/api/events/`);
		event.status === 200
			? dispatch({
					type: types.DELETE_EVENT_SUCCESS,
					payload: events.data
			  })
			: dispatch({
					type: types.DELETE_EVENT_FAILED
			  });
	} catch (err) {
		//FETCH_FAILED
		dispatch({
			type: types.FETCH_EVENT_FAILED
		});
		console.log(err);
	}
};
