import axios from "axios";
import { API_ENDPOINT } from "../config/api";

import { types } from "./types";

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
				payload: events.data.events
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
		const event = await axios.get(API_ENDPOINT + `/events/${eventID}`);
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
export const postEvent = eventID => async dispatch => {
	dispatch({
		type: types.POST_EVENT
	}); //greg
	try {
		const event = await axios.get(API_ENDPOINT + `/events/${eventID}`);
		event.status === 200
			? dispatch({
					type: types.POST_EVENT_SUCCESS,
					payload: event.data
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
export const putEvent = eventID => async dispatch => {
	dispatch({
		type: types.PUT_EVENT
	}); //greg
	try {
		const event = await axios.put(API_ENDPOINT + `/events/${eventID}`);
		event.status === 204
			? dispatch({
					type: types.PUT_EVENT_SUCCESS,
					payload: event.data
			  })
			: dispatch({
					type: types.PUT_EVENT_FAILED,
					payload: event.data
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
		const event = await axios.delete(API_ENDPOINT + `/events/${eventID}`);
		event.status === 204
			? dispatch({
					type: types.DELETE_EVENT_SUCCESS,
					payload: event.data
			  })
			: dispatch({
					type: types.DELETE_EVENT_FAILED,
					payload: event.data
			  });
	} catch (err) {
		//FETCH_FAILED
		dispatch({
			type: types.FETCH_EVENT_FAILED
		});
		console.log(err);
	}
};
