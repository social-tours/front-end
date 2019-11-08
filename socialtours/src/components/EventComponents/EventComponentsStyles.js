import styled from "styled-components";

import {
	color,
	colors,
	fontSizing,
	flex,
	breakpoints,
	colorScheme
} from "../DesignComponents/theme";

import Button from "../DesignComponents/Button";

export const EventFormStyles = styled.div`
	margin: 0 auto;
	padding: 50px 0;
	display: flex;
	width: 95%;
	align-content: center;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	height: 100%;

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		align-content: center;
		margin-bottom: 25px;

		input {
			width: 80%;
			height: 35px;
			border: 1px solid ${colors.grape};
			padding-left: 10px;
			border-radius: 5px;
		}
	}

	// button {
	// 	background-color: ${colors.red};
	// 	color: ${colors.black};
	// 	height: 35px;
	// 	width: 85%;
	// 	max-width: 150px;
	// 	border-radius: 5px;
	// 	font-weight: bold;
	// 	margin: 25px auto;
	// 	align-self: flex-end;

	// 	border-width: 2px;
	// 	border-color: black;
	// 	border-style: solid;
	// }
`;

export const EventInput = styled.input`
	background-color: ${props => (props.disabled ? "#162a4f" : "white")};
	color: ${props => (props.disabled ? "white" : "black")};
	margin: 10px auto;
	font-size: ${fontSizing.s};
	border: 1px solid green;
`;

export const InputWrapper = styled.div`
	width: 100%;
	${flex("row","center","space-between")};

	label {
		width: 15%;
		font-size: ${fontSizing.s};
	}
`;

export const DashBoardContainer = styled.div`
	width: 90%;
	${flex("column", "center")};
	margin: 0 auto;
	padding: 20px;
	padding-top: 50px;
	border-radius: 3px;
	border: 1px solid #e5e5e5;

	.tab-title {
		padding: 10px;
		border-radius: 5px;
		cursor: pointer;
		font-size: ${fontSizing.s};
		font-weight: bold;
		color: ${color.lightText};
		text-transform: uppercase;
		word-spacing: 4px;

		&.selected {
			background: ${colors.light_blue};
		}
	}

	.tab {
		width: 100%;
		padding: 20px;

		& a {
			${flex("column","center","center")};
			text-decoration: none;
			color: ${color.lightText};
		}
	}

	ul {
		width: 100%;
		${flex("row", "center", "space-between")};
	}

	ul.inline {
		list-style: none;
		padding: 0;
		margin-bottom: 0;

		li {
			display: inline-block;
			margin: 0 auto;
			padding: 10px;
			border-bottom: 2px solid #eee;
			transition: all 0.5s;
			font-weight: 300;
			cursor: pointer;
			color: #aaa;
		}
	}
`;

export const Preview = styled.div`
	width: 90%;
	min-width: 300px;
	${flex("row", "center", "space-between")}
	margin: 10px 0;
	padding: 10px;
	border: 1px solid ${color.lightText};
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		border-color: transparent;
		background: ${colors.light_blue};
	}
`;

export const Container = styled.div`
	width: 100%;
	${flex("column", "center", "center")};
	max-width: 600px;
	margin: 50px auto;
	padding-bottom: 20px;
	border: 1px solid ${colorScheme.secondarytBorderColor};
	border-radius: 3px;
	background: ${color.secondaryBgShading};

	a {
		width: 100%;
		${flex("column", "center", "center")};
		margin: 10px 0;
		text-decoration: none;
		color: ${color.darkText};
	}

	header {
		width: 100%;
		${flex("row", "center", "flex-end")};
		padding: 10px;
		border-radius: 5px 5px 0 0;
		background: linear-gradient(to top, #cccccc 0%, #d6d6d6 1px, #ebebeb 100%);

		@media ${breakpoints[0]} {
			padding: 5px;
		}
		i {
			margin: 0 10px;
			font-size: ${fontSizing.xs};
			cursor: pointer;
		}

	}
`;

export const Banner = styled.div`
	width: 100%;

	img {
		margin: 0 auto;
		width: 100%;
		height: 200px;
		object-fit: cover;
	}
`;

export const EventSummary = styled.div`
	width: 100%;
	${flex("column", "center")};
	margin: 0 auto;
	padding: 10px;
	background: ${color.lightText};

	& * {
		margin: 5px 0;
	}
`;

export const EventTitle = styled.h2`
	font-size: ${fontSizing.l};

	div.subtitle {
		font-size: ${fontSizing.xs};
		color: ${colorScheme.defaultBorderColor};
	}
`;

export const EventDescription = styled.p`
	width: 100%;
	text-align: center;
	font-size: ${fontSizing.m};

`

export const EventShareWrapper = styled.div`
	width: 100%;
	${flex('row', 'center', 'flex-end')};
	margin-bottom: 10px;
	border-bottom: 1px solid ${colorScheme.secondaryBorderColor};
	background: ${color.lightText};

	svg {
		cursor: pointer;
	}
`

export const SchedulePreview = styled.div`
	width: 98%;
	${flex("row","center","space-between")};
	border: 1px solid ${colorScheme.secondaryBorderColor};
	border-radius: 5px;
	background: ${color.lightText};
	cursor: pointer;

	&:hover {
		border-color: transparent;
		color: ${color.lightText};
		background: ${colors.light_blue};
	}
`;

export const EventDate = styled.div`
	width: 20%;
	padding: 5px;
	${flex("column", "center")};
	font-size: ${fontSizing.ml};

	& * {
		margin: 2px 0;
		font-weight: bold;
	}

	.event-day {
		font-size: ${fontSizing.sm};
		color: ${colors.blue};

		&:hover {
			color: ${color.lightText};
		}
	}

	.event-date {
		font-size: ${fontSizing.s};	
	}
`;

export const LocationInfo = styled.div`
	width: 80%;
	${flex('column')}
	padding: 5px;

	.location {
		font-size: ${fontSizing.m};
		font-weight: bold;
	}

	.start-time {
		font-size: ${fontSizing.s};
	}
`

export const ScheduleSummary = styled.div`
	width: 100%;
	padding: 10px;
	text-align: center;

	.event-description {
		margin-bottom: 20px;
		font-size: ${fontSizing.sm};
	}

	.event-details {
		p {
			margin: 10px 0;
			font-size: ${fontSizing.s};
		}
	}
`;

export const ScheduleButton = styled(Button)`
	width: 200px;
	color: ${color.lightText};
	background: ${colors.light_blue};
	text-transform: uppercase;
`;

export const UpdateButton = styled(Button)`
	width: 150px;
	text-transform: uppercase;
`;

export const ConfirmAlertWrapper = styled.div`
	width: 100%;
	max-width: 600px;
	${flex("column", "center")};
`;

export const ButtonMenu = styled.div`
	width: 100%;
	${flex("row", "center", "space-between")};
	margin: 5px 0;

	button {
		width: 80px;
		border-radius: 10px;
		color: ${color.lightText};
		background: ${color.darkText};
		font-size: ${fontSizing.s};
		font-weight: bold;
	}
`;


export default EventFormStyles;
