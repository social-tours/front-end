import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import {
	fetchEvent,
	postEvent,
	putEvent,
	deleteEvent
} from "../actions/index.js";
const API = "https://staging-a-socialtours.herokuapp.com"; // need to get from backend

class TheCrudEvent extends React.Component {
	state = {
		id: "",
		type: 1, // hardcoded for testing
		title: "",
		host_id: 2, //FK to user_ID, hardcoded for now to get to work
		description: "",
		event_image: "",
		capacity: ""
		// created_at: '',
		// updated_at: ''
	};

	componentDidMount() {
		const currentEvent = this.handleFetchEvent();
		// this.setState({
		//     id: 12,
		//     title: currentEvent.title,
		//     description: currentEvent.description,
		//     event_image: currentEvent.event_image,
		//     capacity: currentEvent.capacity
		// })
		// if (this.props.forUpdate) {
		// }
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleFetchEvent = async () => {
		// e.preventDefault();
		// return await this.props.fetchEvent(12)
		const event = await axios.get(API + `/api/events/12`);
		console.log("CONSOLE LOG DATA", event);
		return event;
	};

	addEvent = e => {
		e.preventDefault();
		const newEvent = this.state;
		// console.log(newEvent, 'Hello from addEvent')
		this.props.postEvent(newEvent);
		// this.props.toggleAdding();
	};

	updateEvent = async (e, id) => {
		e.preventDefault();
		let updatedData = {
			...this.state
		};
		delete updatedData.id;
		// console.log("STUFF IM SENDING", updatedData)
		const myFunction = await axios.put(API + "/api/events/12", updatedData);
		console.log("UPDATE RESULTS", myFunction);
		// this.props.updatedData(id, updatedData);
		// this.props.toggleUpdate();
	};

	deleteEvent = () => {
		this.props.deleteEvent(this.props.event);
		// this.props.toggleUpdate();
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
			<form>
				{/* onSubmit={this.props.forUpdate ? this.updateEvent : this.addEvent} goes to form*/}
				{/* <input name='id' placeholder='id' onChange={this.handleChange} value={this.state.id} /> */}
				<input
					name="type"
					placeholder="type"
					onChange={this.handleChange}
					value={this.state.type}
					type="number"
				/>
				<input
					name="title"
					placeholder="title"
					onChange={this.handleChange}
					value={this.state.title}
				/>
				<input
					name="host_ID"
					placeholder="host_ID"
					onChange={this.handleChange}
					value={this.state.host_ID}
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
				{/* {this.props.forUpdate ?
                    <div>
                        <button type='submit'>Update event</button>
                        <button onClick={this.deleteEvent}>Deleted event!</button>
                    </div>
                    :
                } */}
				<button onClick={e => this.updateEvent(e, this.state.id)}>
					Update Event
				</button>
			</form>
		);
	}
}

const mapStateToProps = state => {
	// console.log(state, 'hello from TheCrudEvent');
	return {
		events: state.events
	};
};

export default connect(
	mapStateToProps,
	{ fetchEvent, postEvent, putEvent, deleteEvent }
)(TheCrudEvent);

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