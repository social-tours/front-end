import React from "react";
import { connect } from "react-redux";

import "./ManageEvents.css";

const EventCard = props => {
	console.log("THIS IS PROPS ", props.title);
	return (
		<div className="event-card">
			<p>{props.title}</p>
			<p>{props.description}</p>
			<p>• {props.date}</p>
			<p>• {props.location}</p>
		</div>
	);
};

export default connect()(EventCard);
