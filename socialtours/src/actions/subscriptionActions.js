import axios from "axios";
import jwt_decode from "jwt-decode";
import { API_ENDPOINT } from "../config/api";

const SUBSCRIPTIONS = "/api/subscriptions";

const SUCCESS = 200;

export const types = {
	// GET
	FETCHING_SUBSCRIPTION: "FETCHING_SUBSCRIPTION",
	FETCH_SUBSCRIPTION_FAILED: "FETCH_SUBSCRIPTION_FAILED",
	FETCH_SUBSCRIPTION_SUCCESS: "FETCH_SUBSCRIPTION_SUCCESS",
	// POST
	INSERTING_SUBSCRIPTION: "INSERTING_SUBSCRIPTION",
	INSERT_SUBSCRIPTION_FAILED: "INSERT_SUBSCRIPTION_FAILED",
	INSERT_SUBSCRIPTION_SUCCESS: "INSERT_SUBSCRIPTION_SUCCESS",
	// PUT
	UPDATING_SUBSCRIPTION: "UPDATING_SUBSCRIPTION",
	UPDATE_SUBSCRIPTION_FAILED: "UPDATE_SUBSCRIPTION_FAILED",
	UPDATE_SUBSCRIPTION_SUCCESS: "UPDATE_SUBSCRIPTION_SUCCESS",
	//DELETE
	DELETING_SUBSCRIPTION: "DELETING_SUBSCRIPTION",
	DELETE_SUBSCRIPTION_FAILED: "DELETE_SUBSCRIPTION_FAILED",
	DELETE_SUBSCRIPTION_SUCCESS: "DELETE_SUBSCRIPTION_SUCCESS"
};

export const getSubscriptions = () => async dispatch => {
	dispatch({ type: types.FETCHING_SUBSCRIPTION });
	try {
		const subscriptions = await axios.get(API_ENDPOINT + SUBSCRIPTIONS);
		console.log("THIS IS SUBSCRIPTION-ACTION", subscriptions);
		if (subscriptions.status === SUCCESS) {
			dispatch({
				type: types.FETCH_SUBSCRIPTION_SUCCESS,
				payload: subscriptions.data
			});
		} else {
			dispatch({
				type: types.FETCH_SUBSCRIPTION_FAILED
			});
		}
	} catch (err) {
		console.log("getSubscriptions() error: ", err);
	}
};

export const getSubscriptionsByUserId = () => async dispatch => {
	let userId = jwt_decode(localStorage.getItem("api_token")).id;

	try {
		let subs = await axios.get(`${API_ENDPOINT}${SUBSCRIPTIONS}/${userId}`);
		subs.status === 200
			? dispatch({
					type: types.FETCH_SUBSCRIPTION_SUCCESS,
					payload: subs.data
			  })
			: dispatch({
					type: types.FETCH_SUBSCRIPTION_FAILED
			  });
	} catch (err) {
		dispatch({
			type: types.FETCH_SUBSCRIPTION_FAILED
		});
		console.log(err);
	}
};

export const toggleMarketing = (id, marketing_opt_in) => async dispatch => {
	let body = { marketing_opt_in: !marketing_opt_in };

	try {
		let sub = await axios.put(`${API_ENDPOINT}${SUBSCRIPTIONS}/${id}`, body);

		dispatch({
			type: types.UPDATE_SUBSCRIPTION_SUCCESS,
			updatedSub: sub.data
		});
	} catch (err) {
		console.log(err);
		return false;
	}
};
