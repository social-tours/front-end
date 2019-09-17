import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import CreateEvent from "./createEvent";
import moment from "moment";
import { withRouter } from "react-router-dom";
import Loader from "react-loader";

//icons
import StarIcon from "@material-ui/icons/Star";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PublicIcon from "@material-ui/icons/Public";
import MicIcon from "@material-ui/icons/Mic";

import { colors } from "./DesignComponents/theme";
import EventCalendar from "./EventCalendar";
import { fetchEvents } from "../actions";

class Dashboard extends React.Component {
	state = {
		events: this.props.events
	};

	componentDidMount() {
		this.props.fetchEvents();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.events != this.props.events) {
			this.setState({
				events: this.props.events
			});
			this.getNextEvent();
		}
	}

	getNextEvent() {
		let { events } = this.state;
		const nextEvent = {};

		if (events.length === 0) return;
		if (!this.props.user) return;

		events.forEach(event => {
			if (event.host_id === this.props.user && event.schedule.length > 0) {
				event.schedule.forEach(event => {
					if (nextEvent == {}) nextEvent = event;
					else if (
						event.start_date_time > moment().format() &&
						event.start_date_time < nextEvent.start_date_time
					) {
						nextEvent = event;
					}
				});
			}
		});
	}

	render() {
		if (this.state.events.length === 0)
			return (
				<DashWrapper>
					<Loader />
				</DashWrapper>
			);

		return (
			<DashWrapper>
				<LeftItems>
					<NewEvent>
						<DashHeader>Create a New Event</DashHeader>
						<CreateEvent user={this.props.user} />
					</NewEvent>
					<CalendarWrapper user={this.props.user}>
						<EventCalendar />
					</CalendarWrapper>
				</LeftItems>
				<NextEvent>
					<DashHeader>Info on Next Event</DashHeader>
					<EventItem>
						<StarIcon /> <span>Event Type</span>
					</EventItem>
					<EventItem>
						<EventNoteIcon /> <span>Date</span>
					</EventItem>
					<EventItem>
						<PublicIcon /> <span>Location</span>
					</EventItem>
					<EventItem>
						<MicIcon /> <span>Name/Title of Event</span>
					</EventItem>
					<DashButton>Details</DashButton>
				</NextEvent>
			</DashWrapper>
		);
	}
}

const mapStateToProps = ({ scheduleReducer, eventReducer }) => {
	return {
		events: eventReducer.events
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ fetchEvents }
	)(Dashboard)
);

const DashWrapper = styled.div`
	margin: 35px auto;
	display: flex;
	max-width: 1000px;
	height: 95vh;
	width: 80%;
	background-color: ${colors.dirty_concord};
`;

const LeftItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
`;

const NewEvent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 6%;
	margin-bottom: 5%;
	margin-left: 20%;
	//padding-bottom: 5%;
	height: 45%;
	width: 55%;
	background-color: ${colors.mint};
	border: 1px solid ${colors.black_plum};
	box-shadow: #282c34 5px 5px 5px;
`;

const CalendarWrapper = styled.div`
	width: 100%;
	//margin-top: 3%;
	margin-bottom: 6%;
	margin-left: 20%;
	//height: 45%;
	width: 55%;
	background-color: ${colors.mint};
	border: 1px solid ${colors.black_plum};
	box-shadow: #282c34 5px 5px 5px;
`;

const NextEvent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 48%;
	height: 90%;
	margin-top: 3%;
	margin-right: 15%;
	padding-bottom: 5%;
	background-color: ${colors.mint};
	border: 1px solid ${colors.black_plum};
	box-shadow: #282c34 5px 5px 5px;
`;

const DashButton = styled.button`
	background-color: ${colors.grape};
	color: ${colors.putty};
	padding: 3% 25%;
`;

const DashHeader = styled.h2`
	font-weight: bold;
	font-size: 1.4rem;
	margin-top: 8%;
`;

const EventItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: center;
	align-items: center;
	margin-top: 10%;
	margin-left: 15%;
	width: 100%;
	span {
		margin-left: 10%;
	}
`;
