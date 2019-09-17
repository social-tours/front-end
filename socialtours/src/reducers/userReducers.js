import { types } from "../actions/userActions";

const initialState = {
	user: null,
	fetchingUser: false,
	updatingUser: false,
	deletingUser: false,
	error: null,
	errorStatusCode: null
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_USER_START:
			return {
				...state,
				fetchingUser: true,
				error: null,
				errorStatusCode: null
			};

		case types.FETCH_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				fetchingUser: false,
				error: null,
				errorStatusCode: null
			};

		case types.FETCH_USER_FAILURE:
			return {
				...state,
				user: null,
				fetchingUser: false,
				error: action.payload.data.error,
				errorStatusCode: action.payload.status
			};

		case types.UPDATE_USER_START:
			return {
				...state,
				updatingUser: true,
				error: null,
				errorStatusCode: null
			};

		case types.UPDATE_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				updatingUser: false,
				error: null,
				errorStatusCode: null
			};

		case types.UPDATE_USER_FAILURE:
			return {
				...state,
				user: null,
				updatingUser: false,
				error: action.payload.data.error,
				errorStatusCode: action.payload.status
			};

		case types.DELETE_USER_START:
			return {
				...state,
				deletingUser: true,
				error: null,
				errorStatusCode: null
			};

		case types.DELETE_USER_SUCCESS:
			return {
				...state,
				user: null,
				deletingUser: false,
				error: null,
				errorStatusCode: null
			};

		case types.DELETE_USER_FAILURE:
			return {
				...state,
				deletingUser: false,
				error: action.payload.data.error,
				errorStatusCode: action.payload.status
			};

		default:
			return state;
	}
};

export default userReducer;
