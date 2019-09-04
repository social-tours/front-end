import { types } from "../actions/schedules";

const initialState = {
	fetchingSchedule: false,
	scheduleError: false,
	schedules: []
};

const scheduleReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCHING_SCHEDULE:
			return { ...state, fetchingSchedule: true };
		case types.FETCH_SCHEDULE_FAILED:
			return { ...state, fetchingSchedule: false, scheduleError: true };
		case types.FETCH_SCHEDULE_SUCCESS:
			return {
				...state,
				fetchingSchedule: false,
				scheduleError: false,
				schedules: action.payload
			};
		default:
			return state;
	}
};

export default scheduleReducer;
