import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import EventCard from "./EventCard";

import { getSchedules } from "../../actions/schedules";
import "./ManageEvents.css";

class ManageEvents extends Component {
	state = {
		// to parse before/after events and map them seperately within their own components
		eventsBefore: [],
		eventsAfter: []
	};

	componentDidMount() {
		this.props.getSchedules();
	}

	render() {
		return (
			<div>
				<p className="events-title">Mangage Events</p>
				{console.log("EVENTS BEFORE ", this.eventsBefore)}
				<div className="events-container events-list">
					<div className="events-list">
						<ul>
							{this.props.schedules.length} events are populating{" "}
							{/* just for testing everything is being mapped  */}
							{this.props.schedules.map(schedule => {
								return (
									<EventCard
										id={schedule.id}
										key={schedule.id}
										title={schedule.title}
										description={schedule.description}
										date={schedule.start_date_time}
										location={schedule.location}
									/>
								);
							})}
						</ul>
					</div>

					<div className="events-left">left container</div>

					<div className="events=right">right container</div>
				</div>
			</div>
		);
	}
}

const mapStateToPops = state => {
	console.log("ManageEvents State: ", state);
	return {
		events: state.events,
		fetchingSchedule: state.fetchingSchedule,
		schedules: state.scheduleReducer.schedules
	};
};

export default connect(
	mapStateToPops,
	{ getSchedules }
)(ManageEvents);
