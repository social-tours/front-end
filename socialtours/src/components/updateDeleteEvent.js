import React from 'react';
import { connect } from "react-redux";

import { postEvent, putEvent, deleteEvent } from '../actions/index.js'

class EventDetails extends React.Component {
    state = {
        // id: '',
        type: '',
        title: '',
        description: '',
        event_image: '',
        capacity: '',
        created_at: '',
        updated_at: ''
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
        // this.props.toggleAdding();
    }

    updateEvent = (e) => {
        e.preventDefault();
        let putEvent = {
            ...this.state,
            title: this.props.event.title
        }
        this.props.updateEvent(putEvent);
        // this.props.toggleUpdate();
    }

    deleteEvent = () => {
        this.props.deleteEvent(this.props.event)
        // this.props.toggleUpdate();
    }

    render() {
        return (
            <form onSubmit={this.props.forUpdate ? this.updateEvent : this.addEvent}>
                {/* <input name='id' placeholder='id' onChange={this.handleChange} value={this.state.id} /> */}
                {/* <input name='type' placeholder='type' onChange={this.handleChange} value={this.state.type} /> */}
                <input name='title' placeholder='title' onChange={this.handleChange} value={this.state.title} />
                <input name='description' placeholder='description' onChange={this.handleChange} value={this.state.description} />
                <input name='event_image' placeholder='event_image' onChange={this.handleChange} value={this.state.event_image} />
                <input name='capacity' placeholder='capacity' onChange={this.handleChange} value={this.state.capacity} />
                {/* <input name='created_at' placeholder='created_at' onChange={this.handleChange} value={this.state.created_at} />
                <input name='updated_at' placeholder='updated_at' onChange={this.handleChange} value={this.state.updated_at} /> */}
                {this.props.forUpdate ?
                    <div>
                        <button type='submit'>Update event</button>
                        <button onClick={this.deleteEvent}>Deleted event!</button>
                    </div>
                    :
                    <button type='submit'>Add event</button>
                }
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
    { postEvent, putEvent, deleteEvent }
)(EventDetails);


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