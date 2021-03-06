import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import EventCard from "./EventCard";
import SubscriptionCard from "./SubscriptionCard";
import { getAllSchedules } from "../../actions/scheduleActions";
import { fetchEvents } from "../../actions/eventActions";
import { getUserId } from "../../utils";
import { getSubscriptions } from "../../actions/subscriptionActions";

import {
	EventContainer,
	EventsWrapper,
	EventsContainerContainer,
	EventHeader,
	EventsTitle,
	EventSectionTitle,
	ManageEventsSub,
	ManageEventsWrapper,
	EventsSection,
	EventsHeadline,
	CEButton
} from "./ManageEventsStyles";

class ManageEvents extends Component {
	componentDidMount() {
		this.props.getAllSchedules();
		this.props.fetchEvents();
		this.props.getSubscriptions();
	}

	render() {
		return (
			<EventsContainerContainer>
				<EventContainer>
					<EventHeader>
						<EventsHeadline>
							<EventsTitle>Manage Events</EventsTitle>
							<CEButton onClick={e => this.props.history.push("createEvent")}>
								Create New Event
							</CEButton>
						</EventsHeadline>
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

					<ManageEventsWrapper>
						<EventsSection>
							<EventSectionTitle>Scheduled Events</EventSectionTitle>
							<EventsWrapper>
								{this.props.scheduledEvents.map(schedule => (
									<EventCard
										id={schedule.id}
										userId={schedule.host_id}
										key={schedule.id}
										title={schedule.title}
										description={schedule.description}
										date={schedule.start_date_time}
										location={schedule.location}
									/>
								))}
							</EventsWrapper>
						</EventsSection>

						<EventsSection>
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
						</EventsSection>
					</ManageEventsWrapper>
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
		fetchingEvents: state.fetchingEvents,
		subscriptions: state.subscriptionReducer.subscriptions,
		scheduledEvents,
		unscheduledEvents
	};
};

export default connect(
	mapStateToProps,
	{ getAllSchedules, fetchEvents, getSubscriptions }
)(withRouter(ManageEvents));

// const ManageEventWrapper = styled.div`
// 	background-color: colors.putty
// `;
