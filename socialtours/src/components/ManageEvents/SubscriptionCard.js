import React, { Component } from "react";

import { EventCardWrapper } from "./ManageEventsStyles";

class SubscriptionCard extends Component {
	constructor(props) {
		super(props);
	}

	// Methods

	render() {
		// Constants here

		return (
			<EventCardWrapper>
				<div>Your User ID#: {this.props.userId} </div>
				<div>You're subscribed to: {this.props.influencerId}</div>
			</EventCardWrapper>
		);
	}
}

export default SubscriptionCard;
