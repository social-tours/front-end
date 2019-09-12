import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import EventCard from "./EventCard";

import { getSchedules } from "../../actions/schedules";
import "./ManageEvents.css";

class ManageEvents extends Component {
	componentDidMount() {
		this.props.getSchedules();
	}

	// forwardToEditDelete = e => {
	// 	// const id = this.props.schedules.id;
	// 	e.preventDefault();
	// 	this.props.history.push(`/events/${this.props.schedules.id}`);
	// 	console.log("FORWARD FUNCTION ID: ", this.props.schedules.id);
	// };

	render() {
		return (
			<div>
				<p className="events-title">Mangage Events</p>
				{this.props.schedules.length} total events are on your list
				<div className="events-container events-list">
					<div className="events-before">
						Past Events
						<ul>
							{this.props.schedules.map(schedule => {
								if (schedule.start_date_time < moment().format()) {
									return (
										<EventCard
											// onSubmit={this.props.history.push(`/events/${schedule.id}`)}
											id={schedule.id}
											key={schedule.id}
											title={schedule.title}
											description={schedule.description}
											date={schedule.start_date_time}
											location={schedule.location}
										/>
									);
								}
							})}
						</ul>
					</div>
					<div className="events-after">
						Upcoming Events
						<ul>
							{this.props.schedules.map(schedule => {
								if (schedule.start_date_time > moment().format()) {
									return (
										<EventCard
											// onSubmit={this.props.history.push(`/events/${schedule.id}`)}
											id={schedule.id}
											key={schedule.id}
											title={schedule.title}
											description={schedule.description}
											date={schedule.start_date_time}
											location={schedule.location}
										/>
									);
								}
							})}
						</ul>
					</div>
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
