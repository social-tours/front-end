import { types } from "../actions/registerActions";

const initialState = {
	auth0User: "",
	newUser: "",
	registeringUser: false,
	addingUser: false,
	error: null,
	errorStatusCode: null
};

/**
 * Function to manage state of user registration
 * @param {object} state
 * @param {object} action
 * @returns {object} new state
 */
const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.REGISTER_START:
			return {
				...state,
				registeringUser: true
			};

		case types.REGISTER_SUCCESS:
			return {
				...state,
				auth0User: action.payload,
				registeringUser: false
			};

		case types.REGISTER_FAILURE:
			return {
				...state,
				auth0User: "",
				registeringUser: false,
				error: action.payload,
				errorStatusCode: action.payload.status
			};

		case types.ADD_USER_START:
			return {
				...state,
				addingUser: true
			};

		case types.ADD_USER_SUCCESS:
			return {
				...state,
				addingUser: false,
				newUser: action.payload
			};

		case types.ADD_USER_FAILURE:
			return {
				...state,
				addingUser: false,
				newUser: "",
				error: action.payload,
				errorStatusCode: action.payload.status
			};

		default:
			return state;
	}
};

export default registerReducer;
