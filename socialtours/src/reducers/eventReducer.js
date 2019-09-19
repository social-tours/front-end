// import eventReducer from './eventReducer.js'

import { types } from "../actions/eventActions";

const {
	FETCH_EVENTS,
	FETCH_EVENTS_SUCCESS,
	FETCH_EVENTS_FAILURE,

	FETCH_EVENT,
	FETCH_EVENT_SUCCESS,
	FETCH_EVENT_FAILURE,

	POST_EVENT,
	POST_EVENT_SUCCESS,
	POST_EVENT_FAILURE,

	DELETE_EVENT,
	DELETE_EVENT_SUCCESS,
	DELETE_EVENT_FAILURE,

	PUT_EVENT,
	PUT_EVENT_SUCCESS,
	PUT_EVENT_FAILURE
} = types;

const initialState = {
	events: [],
	fetchingEvents: false,
	addingEvent: false,
	updatingEvent: false,
	deletingEvent: false,
	error: null
};

const eventReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_EVENTS:
			return {
				...state,
				fetchingEvents: true
			};
		case FETCH_EVENTS_SUCCESS:
			// console.log("FETCH EVENT SUCCESS: ", action.payload)
			return {
				...state,
				fetchingEvents: false,
				events: [...action.payload]
			};
		case FETCH_EVENTS_FAILURE:
			return {
				...state,
				fetchingEvents: false,
				error: action.payload
			};

		case FETCH_EVENT:
			return {
				...state,
				fetchingEvents: true
			};
		case FETCH_EVENT_SUCCESS:
			return {
				...state,
				fetchingEvents: false,
				events: action.payload
			};
		case FETCH_EVENT_FAILURE:
			return {
				...state,
				fetchingEvents: false,
				error: action.payload
			};

		case POST_EVENT:
			return {
				...state,
				addingEvent: true
			};
		case POST_EVENT_SUCCESS:
			return {
				...state,
				addingEvent: false,
				events: action.payload
			};
		case POST_EVENT_FAILURE:
			return {
				...state,
				addingEvent: false,
				error: action.payload
			};

		case DELETE_EVENT:
			return {
				...state,
				deletingEvent: true
			};
		case DELETE_EVENT_SUCCESS:
			console.log("DELETE EVENT SUCCESS: ", action.payload);
			return {
				...state,
				deletingEvent: false,
				events: action.payload
			};
		case DELETE_EVENT_FAILURE:
			console.log("DELETE EVENT FAILURE: ", action.payload);
			return {
				...state,
				deletingEvent: false,
				error: action.payload
			};
		case PUT_EVENT:
			return {
				...state,
				updatingEvent: true
			};
		case PUT_EVENT_SUCCESS:
			console.log("PUT EVENT SUCCESS: ", action.payload);
			return {
				...state,
				updatingEvent: false,
				events: action.payload
			};
		case PUT_EVENT_FAILURE:
			console.log("PUT EVENT FAILURE: ", action.payload);

			return {
				...state,
				updatingEvent: false,
				error: action.payload
			};

		default:
			return state;
	}
};
export default eventReducer;
