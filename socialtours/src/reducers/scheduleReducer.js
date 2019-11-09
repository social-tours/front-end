import { types } from "../actions/scheduleActions";

const initialState = {
	fetchingAllSchedules: false,
	fetchingSchedule: false,
	addingSchedule: false,
	updatingSchedule: false,
	deletingSchedule: false,
	schedules: [],
	schedule: null,
	error: false
};

const scheduleReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_ALL_SCHEDULES_START:
			return { ...state, fetchingAllSchedules: true };
		case types.FETCH_ALL_SCHEDULES_FAILED:
			return {
				...state,
				fetchingAllSchedules: false,
				error: action.payload
			};
		case types.FETCH_ALL_SCHEDULES_SUCCESS:
			return {
				...state,
				fetchingAllSchedules: false,
				error: false,
				schedules: action.payload
			};
		case types.FETCH_SCHEDULE_START:
			return {
				...state, fetchingSchedule: true
			}
		case types.FETCH_SCHEDULE_SUCCESS:
			return {
				...state,
				fetchingSchedule: false,
				schedule: action.payload
			}
		case types.FETCH_SCHEDULE_FAILED:
			return {
				...this.state,
				fetchingSchedule: false,
				error: action.payload
			}
	
		case types.ADD_SCHEDULE_START:
			return {
				...state, addingSchedule: true
			}
		case types.ADD_SCHEDULE_SUCCESS:
			return {
				...state,
				addingSchedule: false,
				schedule: action.payload
			}
		case types.ADD_SCHEDULE_FAILED:
			return {
				...this.state,
				addingSchedule: false,
				error: action.payload
			}
		
		case types.UPDATE_SCHEDULE_START:
			return {
				...state, updatingSchedule: true
			}
		case types.UPDATE_SCHEDULE_SUCCESS:
			return {
				...state,
				updatingSchedule: false,
				schedule: action.payload
			}
		case types.UPDATE_SCHEDULE_FAILED:
			return {
				...this.state,
				updatingSchedule: false,
				error: action.payload
			}
		
		case types.DELETE_SCHEDULE_START:
			return {
				...state, deletingSchedule: true
			}
		case types.DELETE_SCHEDULE_SUCCESS:
			return {
				...state,
				deletingSchedule: false,
				schedule: null
			}
		case types.DELETE_SCHEDULE_FAILED:
			return {
				...this.state,
				deletingSchedule: false,
				error: action.payload
			}
	
		default:
			return state;
	}
};

export default scheduleReducer;
