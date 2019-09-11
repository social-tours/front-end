import React from "react";
import { connect } from "react-redux";

import "./ManageEvents.css";

const EventCard = props => {
	console.log("THIS IS PROPS ", props.title);
	return (
		<div className="event-card">
			<p>Title: {props.title}</p>
			<p>Description: {props.description}</p>
			<p>Time: {props.date}</p>
			<p>Location: {props.location}</p>
		</div>
	);
};

export default connect()(EventCard);
