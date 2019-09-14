import { types } from "../actions/authActions";
import Auth from "../Auth";

const initialState = {
	loginError: null,
	loggingIn: false,
	auth: new Auth()
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN_START: {
			return {
				...state,
				loginError: null,
				loggingIn: true
			};
		}
		case types.LOGIN_SUCCESS: {
			return {
				...state,
				loggingIn: false
			};
		}
		case types.LOGIN_FAILURE: {
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
