import { types } from "../actions/registerActions";

const initialState = {
	auth0User: "",
	user: "",
	fetchingUser: false,
	registeringUser: false,
	addingUser: false,
	error: null,
	errorStatusCode: null
};

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
				user: action.payload
			};

		case types.ADD_USER_FAILURE:
			return {
				...state,
        addingUser: false,
        user: "",
				error: action.payload,
				errorStatusCode: action.payload.status
			};
	}
};

export default registerReducer;
