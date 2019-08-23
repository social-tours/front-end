import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents, postEvents } from "../actions/index.js";


class EventsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: '',
            type: '',
            location: '',
            description: ''
        }
    }

    addEvents = () => {
        this.props.postEvents({
            name: this.state.name,
            date: this.state.date,
            type: this.state.type,
            location: this.state.location,
            description: this.state.description
        })
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addEvents}>
                    <input onChange={this.handleChange}
                        placeholder="name"
                        value={this.state.name}
                        name="name"
                    />
                    <input onChange={this.handleChange}
                        placeholder="date"
                        value={this.state.date}
                        name="date"
                    />
                    <input onChange={this.handleChange}
                        placeholder="type"
                        value={this.state.type}
                        name="type"
                    />
                    <input onChange={this.handleChange}
                        placeholder="location"
                        value={this.state.location}
                        name="location"
                    />
                    <input onChange={this.handleChange}
                        placeholder="description"
                        value={this.state.description}
                        name="description"
                    />
                    <button type="submit">Add Event</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps, {
    getEvents, postEvents
})(EventsForm);