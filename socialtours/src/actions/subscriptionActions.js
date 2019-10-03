import axios from "axios";
import { API_ENDPOINT } from "../config/api"

const SUBSCRIPTIONS = "/api/subscriptions";

const SUCCESS = 200;

export const types ={
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
}   

export const getSubscriptions = () => async dispatch => {
    dispatchEvent({ type: types.FETCHING_SUBSCRIPTION });
    try {
        const subscriptions = await axios.get(API_ENDPOINT + SUBSCRIPTIONS);
        if (subscriptions.status === SUCCESS) {
            dispatch({
                type: types.FETCH_SUBSCRIPTION_SUCCESS,
                payload: subscriptions.data
            })
        } else {
            dispatch({
                type: types.FETCH_SUBSCRIPTION_FAILED
            })
        }
    } catch (err) {
        console.log("getSubscriptions() error: ", err)
    }
}