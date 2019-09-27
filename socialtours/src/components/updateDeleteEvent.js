import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import EventFormStyles from "../components/DesignComponents/EventFormStyles.js";

import { fetchEvent, putEvent, deleteEvent } from "../actions/index.js";
const API = "https://staging-a-socialtours.herokuapp.com"; // need to get from backend

class UpdateDeleteEvent extends React.Component {
	state = {
		id: "",
		type: "",
		title: "",
		host_id: "", //FK to user_ID
		description: "",
		event_image: "",
		capacity: ""
	};

	componentDidMount = async () => {
		// const currentEvent = this.handleFetchEvent(); // this is commented out in case it breaks withouth it. This variable is never called but does contain the handleFetchEvent. 
		const event = this.props.event;
		this.setState({
			id: event.id,
			type: event.type,
			title: event.title,
			host_id: event.host_id,
			description: event.description,
			event_image: event.event_image,
			capacity: event.capacity
		});
		if (this.props.forUpdate) {
		}
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleFetchEvent = async (e, id) => {
		let updatedData = {
			...this.state
		};
		const event = await axios.get(API + `/api/events/${id}`);
		return event;
	};

	putEvent = async (e, id) => {
		e.preventDefault();
		let updatedData = {
			...this.state
		};
		delete updatedData.id;
		console.log("STUFF IM SENDING", updatedData);
		const myFunction = await axios.put(API + `/api/events/${id}`, updatedData);
		console.log("UPDATE RESULTS", myFunction.data);
	};

	deleteEvent = (e, id) => {
		this.props.deleteEvent(id);
		console.log("DELETE", deleteEvent);
	};

	myTestEventPost = async () => {
		const testEvent = {
			...this.state
		};
		const myFunction = await axios.post(API + "/api/events", testEvent);
		console.log(myFunction);
	};

	render() {
		return (
			<EventFormStyles>
				<form
				>
					<input
						name="type"
						placeholder={this.state.type}
						onChange={this.handleChange}
						value={this.state.type}
						type="number"
					/>
					<input
						name="title"
						placeholder={this.props.title}
						onChange={this.handleChange}
						value={this.state.title}
					/>
					<input
						name="host_ID"
						placeholder="host_ID"
						onChange={this.handleChange}
						value={this.state.host_ID}
						type="number"
					/>
					<input
						name="description"
						placeholder="description"
						onChange={this.handleChange}
						value={this.state.description}
					/>
					<input
						name="event_image"
						placeholder="event_image"
						onChange={this.handleChange}
						value={this.state.event_image}
					/>
					<input
						name="capacity"
						placeholder="capacity"
						onChange={this.handleChange}
						value={this.state.capacity}
						type="number"
					/>

					<button onClick={e => this.putEvent(e, this.props.event.id)}>
						Update This Event
					</button>
					<button onClick={e => this.deleteEvent(e, this.props.event.id)}>
						Delete This Event
					</button>
				</form>
			</EventFormStyles>
		);
	}
}

const mapStateToProps = state => {
	return {
		events: state.events,
		deletingEvent: state.deletingEvent
	};
};

export default connect(
	mapStateToProps,
	{ fetchEvent, putEvent, deleteEvent }
)(UpdateDeleteEvent);

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
