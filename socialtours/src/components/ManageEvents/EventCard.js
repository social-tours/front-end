import React from "react";
import { connect } from "react-redux";

const EventCard = props => {
	console.log("THIS IS PROPS ", props.title);
	return (
		<div className="EventCard">
			<div>
				<p>{props.title}</p>
				<p>{props.date}</p>
				<p>{props.location}</p>
			</div>
		</div>
	);
};

export default connect()(EventCard);
