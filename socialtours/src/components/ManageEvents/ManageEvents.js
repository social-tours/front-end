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
	}

	render() {
		return (
			<EventsContainerContainer>
				<EventContainer>
					<EventHeader>
						<EventsTitle>Manage Events</EventsTitle>

						<ManageEventsSub>
							{this.props.scheduledEvents.length > 0 ||
							this.props.unscheduledEvents.length > 0 ? (
								<p>
									{this.props.scheduledEvents.length +
										this.props.unscheduledEvents.length}{" "}
									total events are on your list
								</p>
							) : (
								<></>
							)}
						</ManageEventsSub>
					</EventHeader>

					{/* masterlist below */}

					<EventSectionTitle>Scheduled Events</EventSectionTitle>
					<EventsWrapper>
						{this.props.scheduledEvents.map(schedule => {
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

					<EventSectionTitle>Unscheduled Events</EventSectionTitle>
					<EventsWrapper>
						{this.props.unscheduledEvents &&
							this.props.unscheduledEvents.map(event => {
								if (event.schedule.length === 0)
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
	let scheduledEvents = [],
		unscheduledEvents = [];

	//let { schedules } = state.scheduleReducer;

	events = events.filter(event => {
		if (event.host_id === getUserId()) {
			if (event.schedule.length > 0) scheduledEvents.push(event);
			else unscheduledEvents.push(event);
		}
	});
	return {
		scheduledEvents,
		unscheduledEvents,
		fetchingEvents: state.fetchingEvents
	};
};

export default connect(
	mapStateToProps,
	{ getSchedules, fetchEvents }
)(ManageEvents);
