import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import EventCard from "./EventCard";

import { getSchedules } from "../../actions/schedules";
import { fetchEvents } from "../../actions/eventActions";
import "./ManageEvents.css";

class ManageEvents extends Component {
	componentDidMount() {
		this.props.getSchedules();
		this.props.fetchEvents();
	}

	render() {
		return (
			<div className="events-wrapper">
				<div className="events-header">
					<p className="events-title">Manage Events</p>

					{this.props.schedules.length > 0 ? (
						<p>{this.props.eventsList.length} total events are on your list</p>
					) : (
						<></>
					)}
				</div>

				{/* masterlist below */}

				<div className="events-container events-list">
					<div className="events-all">
						Your Events
						<ul>
							<ul>
								{this.props.eventsList.map(event => {
									return (
										<EventCard
											id={event.id}
											key={event.id}
											title={event.title}
											capacity={event.capacity}
											description={event.description}
											// commenting out below for now
											// id={schedule.id}
											// key={schedule.id}
											// title={schedule.title}
											// description={schedule.description}
											// date={schedule.start_date_time}
											// location={schedule.location}
										/>
									);
								})}
							</ul>
						</ul>
					</div>

					<div className="events-after">
						Upcoming Events
						<ul>
							{this.props.schedules.map(schedule => {
								if (schedule.start_date_time > moment().format()) {
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
								}
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("ManageEvents State: ", state);
	return {
		events: state.events,
		fetchingSchedule: state.fetchingSchedule,
		fetchingEvents: state.fetchingEvents,
		schedules: state.scheduleReducer.schedules,
		eventsList: state.eventReducer.events
	};
};

export default connect(
	mapStateToProps,
	{ getSchedules, fetchEvents }
)(ManageEvents);
