import { types } from "../actions/subscriptionActions";

const initialState = {
	fetchingSubscription: false,
	subscriptionError: false,
	subscriptions: []
};

const subscriptionReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCHING_SUBSCRIPTION:
			return { ...state, fetchingSubscription: true };
		case types.FETCH_SUBSCRIPTION_FAILED:
			return { ...state, fetchingSubscription: false, subscriptionError: true };
		case types.FETCH_SUBSCRIPTION_SUCCESS:
			return {
				...state,
				fetchingSubscription: false,
				subscriptionError: false,
				subscriptions: action.payload
			};
		default:
			return state;
	}
};

export default subscriptionReducer;
