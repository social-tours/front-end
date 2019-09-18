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

	render() {
		return (
			<div className="events-wrapper">
				<div className="events-header">
					<p className="events-title">Mangage Events</p>
					{this.props.schedules.length > 0 ? (
						<p>{this.props.schedules.length} total events are on your list</p>
					) : (
						<></>
					)}
				</div>
				<div className="events-container events-list">
					<div className="events-before">
						Past Events
						<ul>
							{this.props.schedules.map(schedule => {
								if (schedule.start_date_time < moment().format()) {
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
		schedules: state.scheduleReducer.schedules
	};
};

export default connect(
	mapStateToProps,
	{ getSchedules }
)(ManageEvents);
