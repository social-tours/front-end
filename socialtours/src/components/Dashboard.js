import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import CreateEvent from "./ManageEvents/createEvent";
import moment from "moment";
import { withRouter } from "react-router-dom";
import Loader from "react-loader";

//icons
import StarIcon from "@material-ui/icons/Star";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PublicIcon from "@material-ui/icons/Public";
import MicIcon from "@material-ui/icons/Mic";

import { colors } from "./DesignComponents/theme";
//import EventCalendar from "./EventCalendar";
import UpcomingEvents from "./ManageEvents/UpcomingEvents";
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
		}
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
				<Items>
					<Events>
						<DashHeader>Your Events</DashHeader>
						<UpcomingEvents />
					</Events>
					<NewEvent>
						<DashHeader>Create a New Event</DashHeader>
						<CreateEvent user={this.props.user} />
					</NewEvent>
				</Items>
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
	align-items: center;
	align-content: center;
	height: 95vh;
	width: 80%;
	background-color: ${colors.dirty_concord};
`;

const Items = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin: 25px auto;
	width: 90%;
`;

const Events = styled.div`
	width: 45%;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	background-color: ${colors.mint};
	text-align: center;
	//height: 100%;
	border-radius: 10px;
`;

const NewEvent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 45%;
	width: 45%;
	background-color: ${colors.mint};
	border: 1px solid ${colors.black_plum};
	box-shadow: #282c34 5px 5px 5px;
	border-radius: 10px;
`;

const DashHeader = styled.h2`
	font-weight: bold;
	font-size: 1.4rem;
	margin-top: 8%;
`;
