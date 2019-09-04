import { types } from "../actions/index.js";

const { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } = types;

const initialState = {
	loginError: null,
	loggingIn: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START: {
			return {
				...state,
				loginError: null,
				loggingIn: true
			};
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				loggingIn: false
			};
		}
		case LOGIN_FAILURE: {
			return {
				...state,
				loginError: "failed login",
				loggingIn: false
			};
		}

		default:
			return state;
	}
};
export default authReducer;
