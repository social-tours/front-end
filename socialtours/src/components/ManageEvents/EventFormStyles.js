import styled from "styled-components";

import {
	color,
	colors,
	fontSizing,
	flex,
	breakpoints
} from "../DesignComponents/theme";

const EventFormStyles = styled.div`
	margin: 0 auto;
	padding: 50px 0;
	display: flex;
	width: 100%;
	max-width: 300px;
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

		input {
			width: 80%;
			height: 35px;
			border: 1px solid ${colors.grape};
			padding-left: 10px;
			border-radius: 5px;
		}
	}

	button {
		background-color: ${colors.red};
		color: ${colors.black};
		height: 35px;
		width: 85%;
		border-radius: 5px;
		font-weight: bold;
		border: 2px solid ${colors.black};
	}
`;

export const DashBoardContainer = styled.div`
	width: 90%;
	${flex("column", "center")};
	margin: 20px auto 0;
	padding: 20px;
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

export default EventFormStyles;
