import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchEvent, postEvent } from "../actions/index.js";
import EventFormStyles from "./EventFormStyles.js";
import jwt_decode from "jwt-decode";

class TheCreateEvent extends React.Component {
	state = {
		type: 1, // hardcoded for testing
		title: "",
		// id 2 as fallback while register token not working yet
		host_id: localStorage.getItem("api_token")
			? jwt_decode(localStorage.getItem("api_token")).id
			: 2,
		description: "",
		event_image: "",
		capacity: ""
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	redirect() {
		this.props.history.push("/ManageEvents");
		console.log("redirect handler used!");
	}

	addEvent = e => {
		e.preventDefault();
		const newEvent = this.state;
		this.props.postEvent(newEvent);
	};

	render() {
		return (
			<EventFormStyles>
				<form>
					<input
						name="title"
						placeholder="title"
						onChange={this.handleChange}
						value={this.state.title}
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
					<button
						onClick={e => {
							this.addEvent(e, this.state.id);
							this.redirect();
						}}
					>
						Create Event
					</button>
				</form>
			</EventFormStyles>
		);
	}
}

const mapStateToProps = state => {
	return {
		events: state.events
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ fetchEvent, postEvent }
	)(TheCreateEvent)
);
