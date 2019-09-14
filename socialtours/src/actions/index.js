import axios from 'axios';

// action types
export const types = {
    FETCH_EVENTS: 'FETCH_EVENTS',
    FETCH_EVENTS_SUCCESS: 'FETCH_EVENTS_SUCCESS',
    FETCH_EVENTS_FAILED: 'FETCH_EVENTS_FAILED',

    FETCH_EVENT: 'FETCH_EVENT',
    FETCH_EVENT_SUCCESS: 'FETCH_EVENT_SUCCESS',
    FETCH_EVENT_FAILED: 'FETCH_EVENT_FAILED',

    POST_EVENT: 'POST_EVENT',
    POST_EVENT_SUCCESS: 'POST_EVENT_SUCCESS',
    POST_EVENT_FAILED: 'POST_EVENT_FAILED',

    PUT_EVENT: 'PUT_EVENT',
    PUT_EVENT_SUCCESS: 'PUT_EVENT_SUCCESS',
    PUT_EVENT_FAILED: 'PUT_EVENT_FAILED',

    DELETE_EVENT: 'DELETE_EVENT',
    DELETE_EVENT_SUCCESS: 'DELETE_EVENT_SUCCESS',
    DELETE_EVENT_FAILED: 'DELETE_EVENT_FAILED'
}

const API = 'https://staging-a-socialtours.herokuapp.com'

export const fetchEvents = () => async dispatch => {
    dispatch({
        type: types.FETCH_EVENTS,
    });
    try {
        const events = await axios.get(API + `/api/events`)
        // console.log(events)
        if (events.status === 200) {
            // console.log('Im Here')
            dispatch({
                type: types.FETCH_EVENTS_SUCCESS,
                payload: events.data
            })
        } else {
            dispatch({
                type: types.FETCH_EVENTS_FAILED,
            })
        }

    } catch (err) {
        dispatch({
            type: types.FETCH_EVENTS_FAILED
        })
        console.log(err);
    }
}

export const fetchEvent = id => async dispatch => {
    dispatch({
        type: types.FETCH_EVENT
    });
    try {
        const event = await axios.get(API + `/api/events/${id}`)
        event.status === 200 ? dispatch({
            type: types.FETCH_EVENT_SUCCESS,
            payload: event.data
        }) : dispatch({
            type: types.FETCH_EVENT_FAILED,
        })

    } catch (err) {
        dispatch({
            type: types.FETCH_EVENT_FAILED
        })
        console.log(err);
    }
}

export const postEvent = newEvent => async dispatch => {
    dispatch({
        type: types.POST_EVENT
    });
    try {
        const event = await axios.post(API + "/api/events", newEvent)
        event.status === 200 ? dispatch({
            type: types.POST_EVENT_SUCCESS,
            payload: event.data
        }) : dispatch({
            type: types.POST_EVENT_FAILED,
        })

    } catch (err) {
        dispatch({
            type: types.POST_EVENT_FAILED
        })
        console.log(err);
    }

}

// export const putEvent = (id, data) => async dispatch => {
//     dispatch({
//         type: types.PUT_EVENT
//     });
//     try {
//         const event = await axios.put(API + `/api/events/${id}`, data)
//         event.status === 204 ? dispatch({
//             type: types.PUT_EVENT_SUCCESS,
//             payload: event.data
//         }) : dispatch({
//             type: types.PUT_EVENT_FAILED,
//             payload: event.data
//         })

//     } catch (err) {
//         dispatch({
//             type: types.PUT_EVENT_FAILED
//         })
//         console.log(err);
//     }
// }

export const putEvent = (id) => async dispatch => {
    dispatch({
        type: types.PUT_EVENT
    });
    try {
        const event = await axios.put(API + `/api/events/${id}`)
        event.status === 204 ? dispatch({
            type: types.PUT_EVENT_SUCCESS,
            payload: event.data
        }) : dispatch({
            type: types.PUT_EVENT_FAILED,
            payload: event.data
        })

    } catch (err) {
        dispatch({
            type: types.PUT_EVENT_FAILED
        })
        console.log(err);
    }
}

export const deleteEvent = id => async dispatch => {
    dispatch({
        type: types.DELETE_EVENT
    });
    try {
        const event = await axios.delete(API + `/api/events/${id}`)
        event.status === 204 ? dispatch({
            type: types.DELETE_EVENT_SUCCESS,
            payload: event.data
        }) : dispatch({
            type: types.DELETE_EVENT_FAILED,
        })

    } catch (err) {
        dispatch({
            type: types.DELETE_EVENT_FAILED
        })
        console.log(err);
    }
}