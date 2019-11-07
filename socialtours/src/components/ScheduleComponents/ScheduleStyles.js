import styled, { css } from "styled-components";

import {
	color,
	colors,
	fontSizing,
	flex,
	breakpoints,
  colorScheme
} from "../DesignComponents/theme";

import Button from "../DesignComponents/Button"

export const Container = styled.div`
	width: 90%;
  max-width: 600px;
	${flex('column', 'center')};
	margin: 50px auto;
	padding-bottom: 20px;
  border: 1px solid ${colorScheme.secondarytBorderColor};
	border-radius:3px;
	background: ${color.lightText};

	header {
		width: 100%;
		${flex('row', 'center', 'flex-end')};
		margin-bottom: 20px;
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
	max-width: 500px;

	img {
		margin: 0 auto;
		width: 100%;
		height: auto;
	}

`

export const EventInfoWrapper = styled.div`
		width: 100%;
		padding: 10px;
`

export const EventSummary = styled.div`
		width: 100%;
		${flex('row', 'center')};
		padding: 10px;
		border-bottom: 1px solid ${colorScheme.defaultBorderColor};
`

export const EventTitle = styled.h2`
	width: 80%;
	padding: 5px;
	font-size: ${fontSizing.l};

	div.subtitle {
		font-size: ${fontSizing.xs};
		color: ${colorScheme.defaultBorderColor};
	}
`

export const EventDate = styled.div`
		width: 20%;
		padding: 5px;
		${flex('column', 'center')};
		font-size: ${fontSizing.ml};
		& * {
			margin: 2px 0;
		}

		.event-month {
			font-size: ${fontSizing.sm};
			color: red;
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
`

export const UpdateButton = styled(Button)`
	width: 150px;
	text-transform: uppercase;
`

export const ScheduleButton = styled(Button)`
	width: 150px;
	color: ${color.lightText};
	background: ${colors.light_blue};
	text-transform: uppercase;
`

export const ConfirmAlertWrapper = styled.div`
	width: 100%;
	max-width: 600px;
	${flex('column', 'center')};
`

export const ButtonMenu = styled.div`
	width: 100%;
	${flex('row','center','space-between')};
	margin: 5px 0;

	button {
		width: 80px;
		border-radius: 10px;
		color: ${color.lightText};
		background: ${color.darkText};
		font-size: ${fontSizing.s};
		font-weight: bold;
	}
`

export default Container;
