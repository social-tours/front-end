import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import styled from "styled-components";

import EventCard from "./EventCard";
import { getSchedules } from "../../actions/schedules";
import { fetchEvents } from "../../actions/eventActions";
import { getUserId } from "../../utils";
import {
	EventContainer,
	EventsWrapper,
	EventsContainerContainer,
	EventHeader,
	EventsTitle,
	EventSectionTitle,
	ManageEventsSub
} from "./ManageEventsStyles";

class ManageEvents extends Component {
	componentDidMount() {
		this.props.getSchedules();
		this.props.fetchEvents();
		console.log(this.props.eventsList);

		//console.log(getUserId());
	}

	render() {
		return (
			<EventsContainerContainer>
				<EventContainer>
					<EventHeader>
						<EventsTitle>Manage Events</EventsTitle>

						<ManageEventsSub>
							{this.props.schedules.length > 0 ? (
								<p>
									{this.props.eventsList.length} total events are on your list
								</p>
							) : (
								<></>
							)}
						</ManageEventsSub>
					</EventHeader>

					{/* masterlist below */}

					<EventSectionTitle>Upcoming Events</EventSectionTitle>
					<EventsWrapper>
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
					</EventsWrapper>

					<EventSectionTitle>Past Events</EventSectionTitle>
					<EventsWrapper>
						{this.props.events &&
							this.props.events.map(event => {
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
					</EventsWrapper>
				</EventContainer>
			</EventsContainerContainer>
		);
	}
}

const mapStateToProps = state => {
	//console.log("ManageEvents State: ", state);
	let { events } = state.eventReducer;
	let { schedules } = state.scheduleReducer;

	events = events.filter(event => event.host_id === getUserId());
	schedules = schedules.filter(schedule => schedule.host_id === getUserId());
	return {
		events: events,
		fetchingSchedule: state.fetchingSchedule,
		fetchingEvents: state.fetchingEvents,
		schedules: schedules
	};
};

export default connect(
	mapStateToProps,
	{ getSchedules, fetchEvents }
)(ManageEvents);
