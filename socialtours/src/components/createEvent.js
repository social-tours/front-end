import React from 'react';
import { connect } from "react-redux";
// import axios from 'axios'; // for myTestEventPost

import { fetchEvent, postEvent } from '../actions/index.js'
// const API = 'https://staging-a-socialtours.herokuapp.com' // for myTestEventPost

class TheCreateEvent extends React.Component {
    state = {
        id: '',
        type: 1, // hardcoded for testing
        title: '',
        host_id: 2, //FK to user_ID, hardcoded for now to get to work
        description: '',
        event_image: '',
        capacity: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addEvent = (e) => {
        e.preventDefault();
        const newEvent = this.state;
        this.props.postEvent(newEvent);
    }

    // myTestEventPost = async () => {// to test the API, not plugged in when working
    //     const testEvent = {
    //         ...this.state
    //     }
    //     const myFunction = await axios.post(API + "/api/events", testEvent)
    //     console.log(myFunction)
    // }

    render() {
        return (
            <form >
                <input name='type' placeholder='type' onChange={this.handleChange} value={this.state.type} type='number' />
                <input name='title' placeholder='title' onChange={this.handleChange} value={this.state.title} />
                <input name='host_ID' placeholder='host_ID' onChange={this.handleChange} value={this.state.host_ID} />
                <input name='description' placeholder='description' onChange={this.handleChange} value={this.state.description} />
                <input name='event_image' placeholder='event_image' onChange={this.handleChange} value={this.state.event_image} />
                <input name='capacity' placeholder='capacity' onChange={this.handleChange} value={this.state.capacity} type='number' />
                <button onClick={(e) => this.addEvent(e, this.state.id)}>Create Event</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.events
    }
}

export default connect(
    mapStateToProps,
    { fetchEvent, postEvent }
)(TheCreateEvent);


// ** Event Details - Objects in WireFrame ** 
// Wir
// Date Of Event - Where is Date Of Event? Didnt Wilfred just add to DB?
// Event Type - 
// Location - Location is not in the DB but is in the wireframe for Event Details
// Topic/ Event Name 
// Event Image
// Shareable Social Media Link
// Event Description
// Event and Delete buttons