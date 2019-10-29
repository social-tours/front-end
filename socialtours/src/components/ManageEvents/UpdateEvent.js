import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";
//import EventFormStyles from "../components/DesignComponents/EventFormStyles.js";

import ScheduleEvent from "./ScheduleEvent";
import EventDetails from "./EventDetails";

import EventFormStyles from "./EventFormStyles";

import { fetchEvent, putEvent, deleteEvent } from "../../actions/eventActions";
import { API_ENDPOINT } from "../../config/api.js";
const API = "https://staging-a-socialtours.herokuapp.com"; // need to get from backend

class UpdateEvent extends React.Component {
	state = {
		id: "",
		type: "",
		title: "",
		host_id: "", //FK to user_ID
		description: "",
		event_image: ""
		event: {}
	};

	componentDidUpdate(prevProps) {
		if (this.props.id !== prevProps.id) {
			this.fetchData(this.props.userID);
		}
	}

	componentDidMount = async () => {
		// const currentEvent = this.handleFetchEvent();
		const res = await axios.get(
			API_ENDPOINT + `/api/events/${this.props.match.params.id}`
		);
		const event = res.data;

		this.setState({
			id: event.id,
			type: event.type,
			title: event.title,
			host_id: event.host_id,
			description: event.description,
			event_image: event.event_image
			event
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
		const myFunction = await axios.put(API + `/api/events/${id}`, updatedData);
		this.props.history.push(`/events/${id}`);
	};

	deleteEvent = async (e, id) => {
		e.preventDefault();
		this.props.deleteEvent(id);
		this.props.history.push("/manageevents");
	};

	myTestEventPost = async () => {
		const testEvent = {
			...this.state
		};
		const myFunction = await axios.post(API + "/api/events", testEvent);
	};

	render() {
		return (
			<EventFormStyles>
				<form>
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
					<button onClick={e => this.putEvent(e, this.props.match.params.id)}>
						Update This Event
					</button>
				</form>
				<Heading>Current Schedules</Heading>
				{this.state.event && (
					<EventDetails expanded={true} {...this.state.event} />
				)}
				<ScheduleEvent
					title={this.state.title}
					description={this.state.description}
					event_id={this.state.id}
					host_id={this.state.host_id}
				/>
			</EventFormStyles>
		);
	}
}

const mapStateToProps = state => {
	return {
		event: state.event,
		deletingEvent: state.deletingEvent
	};
};

export default connect(
	mapStateToProps,
	{ fetchEvent, putEvent, deleteEvent }
)(UpdateEvent);

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

const Heading = styled.h2`
	font-size: 1.5rem;
	font-weight: bolder;
	margin: 10px auto;
`;
