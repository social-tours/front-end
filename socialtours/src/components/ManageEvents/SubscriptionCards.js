import React, { Component } from "react";
import { Link } from "react-router-dom";

import SubscriptionCard from "./SubscriptionCard";

import { EventCardWrapper } from "./ManageEventsStyles";



class SubscriptionCards extends Component {
	constructor(props) {
		super(props);
	}
	

	render() {
		

		return (
			<EventCardWrapper>
				{/* TODO: map the individual Subscription Cards here. */}
				<SubscriptionCard/>
			</EventCardWrapper>
		);
	}
}

export default SubscriptionCards;
