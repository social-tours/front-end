import React from 'react';
import { connect } from "react-redux";

import { fetchEvent, postEvent } from '../actions/index.js'

class TheCreateEvent extends React.Component {
    state = {
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

    render() {
        return (
            <form >
                <input name='title' placeholder='title' onChange={this.handleChange} value={this.state.title} />
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