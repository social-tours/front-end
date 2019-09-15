import React from "react";
import styled from "styled-components";
//icons
import StarIcon from "@material-ui/icons/Star";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PublicIcon from "@material-ui/icons/Public";
import MicIcon from "@material-ui/icons/Mic";

import { colors } from "./DesignComponents/theme";
import EventCalendar from "./EventCalendar";

const Dashboard = () => {
	return (
		<DashWrapper>
			<LeftItems>
				<NewEvent>
					<DashHeader>Create a New Event</DashHeader>
					<DashButton>Create</DashButton>
				</NewEvent>
				<CalendarWrapper>
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
};

export default Dashboard;

const DashWrapper = styled.div`
	margin: 35px auto;
	display: flex;
	max-width: 1000px;
	height: 95vh;
	width: 80%;
	background-color: ${colors.putty};
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
	padding-bottom: 5%;
	height: 45%;
	width: 55%;
	background-color: ${colors.mint};
	border: 1px solid ${colors.black_plum};
	box-shadow: #282c34 5px 5px 5px;
`;

const CalendarWrapper = styled.div`
	width: 100%;
	margin-top: 5%;
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
