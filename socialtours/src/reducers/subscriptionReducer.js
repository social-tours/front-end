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
		case types.UPDATE_SUBSCRIPTION_SUCCESS:
			let subToEdit = state.subscriptions.findIndex(
				sub => sub.id === action.updatedSub.id
			);
			// make a copy of the array to edit (dont want to mutate existing array)
			let copyArr = [...state.subscriptions];
			copyArr[subToEdit].marketing_opt_in = action.updatedSub.marketing_opt_in;

			return {
				...state,
				subscriptions: copyArr
			};
		default:
			return state;
	}
};

export default subscriptionReducer;
