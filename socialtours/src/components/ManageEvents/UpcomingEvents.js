import React from "react";
import { useSelector } from "react-redux";
import Loader from "react-loader";

import EventDetails from "./EventDetails";
import { getUserId } from "../../utils";

const UpcomingEvents = props => {
	const events = useSelector(state => state.eventReducer.events);

	if (events && events.length > 0) {
		let contents = events.map(event => {
			if (getUserId() == event.host_id) return <EventDetails {...event} />;
		});
		return contents;
	} else return <Loader />;
};

export default UpcomingEvents;
