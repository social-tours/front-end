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
import { getUserId } from "../../utils";

//const API = "https://staging-a-socialtours.herokuapp.com"; // need to get from backend

class UpdateEvent extends React.Component {
	state = {
		id: "",
		type: "",
		title: "",
		host_id: "", //FK to user_ID
		description: "",
		event_image: "",
		event: null
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.props.id !== prevProps.id) {
			this.fetchData(this.props.userID);
		}
	}

	componentDidMount = async () => {
		const event = await this.handleFetchEvent(this.props.match.params.id);
		console.log("CDM event: ", event);
		if (event) {
			this.prePopulateForm(event);
		}
	};

	prePopulateForm = event => {
		this.setState({
			id: event.id,
			type: event.type,
			title: event.title,
			host_id: event.host_id,
			description: event.description,
			event_image: event.event_image,
			event: event
		});
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleFetchEvent = async id => {
		try {
			const event = await axios.get(`${API_ENDPOINT}/api/events/${id}`);
			return event.data;
		} catch (err) {
			console.log("handleFetchEvent error: ", err);
		}
	};

	handlePutEvent = async e => {
		e.preventDefault();
		try {
			let updatedData = {
				...this.state
			};
			delete updatedData.event; // Remove unnecessary object to prevent db update errors
			const updateEvent = await axios.put(
				`${API_ENDPOINT}/api/events/${updatedData.id}`,
				updatedData
			);
			console.log("UPDATEEVENT: ", updateEvent);
			this.props.history.push(`/events/${updatedData.id}`);
		} catch (err) {
			console.log("handlePutEvent error: ", err);
		}
	};

	handleDeleteEvent = async (e, id) => {
		e.preventDefault();
		try {
			this.props.deleteEvent(id);
			this.props.history.push("/manageevents");
		} catch (err) {
			console.log("handleDeleteEvent error: ", err);
		}
	};

	// myTestEventPost = async () => {
	// 	const testEvent = {
	// 		...this.state
	// 	};
	// 	const myFunction = await axios.post(API_ENDPOINT + "/api/events", testEvent);
	// };

	getSchedules = () => {
		return [
			<Heading>Current Schedules</Heading>,
			<ScheduleEvent
				title={this.state.title}
				description={this.state.description}
				event_id={this.state.id}
				host_id={this.state.host_id}
			/>
		];
	};

	render() {
		const thisUser = getUserId() === this.state.host_id;
		//console.log("user host", this.props.userID, this.props.host_id);
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
					{thisUser ? (
						<button onClick={this.handlePutEvent}>Update This Event</button>
					) : (
						""
					)}
				</form>
				{this.state.event && (
					<EventDetails expanded={true} {...this.state.event} />
				)}
				{thisUser ? this.getSchedules() : ""}
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
	color: #fff;
	font-weight: bolder;
	margin: 10px auto;
`;
