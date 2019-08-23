import axios from 'axios';

// export action...

// action types
export const types = {
    // Completed by Greg, 
    FETCH_EVENT: 'FETCH_EVENT',
    FETCH_EVENT_SUCCEEDED: 'FETCH_EVENT_SUCCEEDED',
    FETCH_EVENT_FAILED: 'FETCH_EVENT_FAILED',

    POST_EVENT: 'POST_EVENT',
    POST_EVENT_SUCCEEDED: 'POST_EVENT_SUCCEEDED',
    POST_EVENT_FAILED: 'POST_EVENT_FAILED',

    PUT_EVENT: 'PUT_EVENT',
    PUT_EVENT_SUCCEEDED: 'PUT_EVENT_SUCCEEDED',
    PUT_EVENT_FAILED: 'PUT_EVENT_FAILED',

    DELETE_EVENT: 'DELETE_EVENT',
    DELETE_EVENT_SUCCEEDED: 'DELETE_EVENT_SUCCEEDED',
    DELETE_EVENT_FAILED: 'DELETE_EVENT_FAILED'
}

const API = '' // need to get from backend

// get event, FETCHEVENT, SUCCEED, FAIL
export const fetchEvent = eventID => async dispatch => {
    dispatch({
        type: FETCH_EVENT
    }); //greg
    try {
        const event = await axios.get(API + `/events/${eventID}`)
        event.status === 200 ? dispatch({
            type: FETCH_EVENT_SUCCEEDED,
            payload: event.data
        }) : dispatch({
            type: FETCH_EVENT_FAILED,
            // payload: event.data
        })

    } catch (err) {
        //FETCH_FAILED
        dispatch({
            type: FETCH_EVENT_FAILED
        })
        console.log(err);
    }
}



// Post event
export const postEvent = eventID => async dispatch => {
    dispatch({
        type: POST_EVENT
    }); //greg
    try {
        const event = await axios.get(API + `/events/${eventID}`)
        event.status === 200 ? dispatch({
            type: POST_EVENT_SUCCEEDED,
            payload: event.data
        }) : dispatch({
            type: POST_EVENT_FAILED,
            // payload: event.data
        })

    } catch (err) {
        //POST_FAILED
        dispatch({
            type: POST_EVENT_FAILED
        })
        console.log(err);
    }
}


// Put event



// delete event