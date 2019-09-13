import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ManageEvents.css";

class EventCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("THIS IS PROPS ", this.props.title);
		return (
			<div className="event-card">
				<p>ID#: {this.props.id}</p>
				<p>Title: {this.props.title}</p>
				<p>Description: {this.props.description}</p>
				<p>Time: {this.props.date}</p>
				<p>Location: {this.props.location}</p>
				<Link type="submit" to={`/events/${this.props.id}`}>
					EDIT / DELETE
				</Link>
			</div>
		);
	}
}

export default EventCard;
