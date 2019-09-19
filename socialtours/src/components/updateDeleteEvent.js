import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import EventFormStyles from "../components/DesignComponents/EventFormStyles.js";

import { fetchEvent, putEvent, deleteEvent } from "../actions/eventActions";
import { API_ENDPOINT } from "../config/api.js";
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

	componentDidUpdate(prevProps) {
		// Typical usage (don't forget to compare props):
		if (this.props.id !== prevProps.id) {
			this.fetchData(this.props.userID);
		}
	}

	componentDidMount = async () => {
		// How to populate fields with current data - 9/5/19
		const currentEvent = this.handleFetchEvent();
		// const events = await axios.get(API + `/api/events/1`)
		const res = await axios.get(
			API_ENDPOINT + `/api/events/${this.props.match.params.id}`
		);
		const event = res.data;
		console.log(event);

		// console.log('My CDM Props', event)
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
		// e.preventDefault();
		let updatedData = {
			...this.state
		};
		// return await this.props.fetchEvent(12)
		const event = await axios.get(API + `/api/events/${id}`);
		// console.log('CONSOLE LOG DATA', event)
		return event;
	};

	putEvent = async (e, id) => {
		e.preventDefault();
		let updatedData = {
			...this.state
		};
		delete updatedData.id;
		// updatedData.host_id = parseInt(updatedData.host_id, 10);
		// updatedData.capacity = parseInt(updatedData.capacity, 10);
		console.log("STUFF IM SENDING", updatedData);
		const myFunction = await axios.put(API + `/api/events/${id}`, updatedData);
		console.log("UPDATE RESULTS", myFunction.data);
		this.props.history.push(`/events/${id}`);
		// this.props.putEvent(id, updatedData);
		// this.props.toggleUpdate();
	};

	deleteEvent = async (e, id) => {
		e.preventDefault();
		// this.props.deleteEvent(this.props.event.id)
		//await axios.delete(API + `/api/events/2`);
		this.props.deleteEvent(id);
		// do something
		//alert("Event has been deleted");
		this.props.history.push("/manageevents");
		//console.log("DELETE", deleteEvent);
	};

	myTestEventPost = async () => {
		// to test the API, not plugged in when working
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
				// onSubmit = { this.handleFetchEvent }
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
						name="host_id"
						placeholder="host_id"
						onChange={this.handleChange}
						value={this.state.host_id}
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

					<button onClick={e => this.putEvent(e, this.props.match.params.id)}>
						Update This Event
					</button>
					<button onClick={e => this.deleteEvent(e, this.state.id)}>
						Delete This Event
					</button>
				</form>
			</EventFormStyles>
		);
	}
}

const mapStateToProps = state => {
	// console.log(state, 'hello from UpdateDeleteEvent');
	// console.log("MSTP update/delete", state)
	return {
		event: state.event,
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
