import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./ManageEvents.css";

class EventCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("THIS IS PROPS ", this.props.title);
		return (
			<div
				className="event-card"
				// onClick={this.props.history.push(`/events/${props.id}`)}
			>
				<p>Title: {this.props.title}</p>
				<p>Description: {this.props.description}</p>
				<p>Time: {this.props.date}</p>
				<p>Location: {this.props.location}</p>
				<button
					type="submit"
					// onClick={this.props.history.push(`/events/${this.props.title}`)}
				>
					EDIT / DELETE
				</button>
			</div>
		);
	}
}

export default connect()(EventCard);
