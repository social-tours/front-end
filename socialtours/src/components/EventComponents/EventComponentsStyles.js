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
	padding: 10px;
	display: flex;
	width: 95%;
	max-width: 800px;
	align-content: center;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	background: ${color.secondaryBgShading};

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

			&.form-control {
				margin: 0;
			}

			@media ${breakpoints[1]} {
				width: 100%;
				margin: 0;
				padding: 10px;
			}
		}
	}

	button {
		background-color: ${colors.red};
		color: ${color.lightText};
		height: 35px;
		width: 85%;
		max-width: 150px;
		margin: 25px auto;
		border: 1px solid transparent;
		border-radius: 25px;
		font-size: ${fontSizing.s};
		font-weight: bold;
		text-transform: uppercase;
		cursor: pointer;

		@media ${breakpoints[0]} {
			font-size: ${fontSizing.xxs}
		}
	}
`;

export const FormContainer = styled.div`
	width: 100%;
	${flex("column", "center")};
	margin-top: 50px;
`

export const InputWrapper = styled.div`
	width: 100%;
	${flex("row", "center", "space-between")};
	padding: 0 10px;
	
	@media ${breakpoints[1]} {
		width: 90%;
		${flex("column")};
		margin: 10px 0;
		
		&.input-checkbox {
			${flex("row","center")};

			label {
				width: 100px;
			}

		}
	}

	label {
		width: 10%;
		font-size: ${fontSizing.s};

		@media ${breakpoints[1]} {
			width: 100%;
			margin: 0;
			margin-bottom: 4px;
		}
	}

	.date-time-field {
		label {
			width: 5%;
		}
	}
`;

export const EventInput = styled.input`
	background-color: ${props => (props.disabled ? "#162a4f" : "white")};
	color: ${props => (props.disabled ? "white" : "black")};
	margin: 10px auto;
	font-size: ${fontSizing.s};

`;

export const DashBoardContainer = styled.div`
	width: 90%;
	${flex("column", "center")};
	margin: 0 auto;
	padding: 20px;

	@media ${breakpoints[0]} {
		width: 95%;
		margin-top: 40px;
		padding: 10px;
	}

	header {
		width: 100%;
		${flex("row", "center", "space-between")};

		@media ${breakpoints[1]} {
      ${(flex("column-reverse", "center", "center"))};
    }
	}

	.tab-title {
		margin-top: 20px;
		padding: 10px;
		border-radius: 5px;
		cursor: pointer;
		font-size: ${fontSizing.s};
		font-weight: bold;
		color: ${color.lightText};
		text-transform: uppercase;
		word-spacing: 4px;

		${breakpoints[0]} {
			padding: 5px;
			font-size: ${fontSizing.xs};
		}

		&.selected {
			background: ${colors.light_blue};
		}
	}

	.tab {
		width: 100%;
		// padding: 20px;

		.items {
			${flex("row", "center", "space-around")};
			flex-wrap: wrap;
			margin: 10px;
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

export const EventList = styled.div`
	width: 100%;
	${flex("row", "center", "space-around")};
	flex-wrap: wrap;
`

export const Preview = styled.div`
	// width: 90%;
	// min-width: 300px;
	width: 250px;
	// ${flex("row", "center", "space-between")}
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
	margin: 35px auto;
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
	word-spacing: 4px;
`;

export const UpdateButton = styled(Button)`
	width: 150px;
	text-transform: uppercase;
`;

export const CEButton = styled.button`
	background-color: #247ba0;
		padding: 5px 10px;
		border: 1px solid transparent;
    border-radius: 25px;
    cursor: pointer;
		font-size: ${fontSizing.s};
		font-weight: bold;
    color: #FFFFFF;
    text-transform: uppercase;
		word-spacing: 4px;
		
	@media (max-width: 800px) {
		transform: translate(0);
		align-self: center;
	}
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
