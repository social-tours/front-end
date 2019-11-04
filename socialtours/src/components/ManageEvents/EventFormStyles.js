import styled from "styled-components";

import { color, colors, fontSizing, flex, breakpoints } from "../DesignComponents/theme";

export const EventFormStyles = styled.div`
	margin: 50px auto;
	//margin-top: 50px;
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
		height: 100%;
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

		border-width: 2px;
		border-color: black;
		border-style: solid;
	}
`;

export const DashBoardContainer = styled.div`
	width: 90%;
	${flex('column', 'center')};
	margin: 0 auto;
	margin-top 50px;
	padding: 20px;
	border-radius:3px;
	border: 1px solid #e5e5e5;
	
	.tab-title {
		cursor: pointer;

		&.selected {
			padding-bottom: 5px;
			border-bottom: 3px solid #337ab7;
		}
	}
  
	.tab {
		width: 100%;
		padding: 20px;
	}

	ul {
		width: 100%;
		${flex('row', 'center', 'space-between')};
	}

	ul.inline{
		list-style:none;
		padding: 0;
		margin-bottom:0;

		li {
			display: inline-block;
			margin: 0 auto;
			padding: 10px;
			border-bottom: 2px solid #eee;
			transition: all .5s;
			font-weight: 300;
			cursor: pointer;
			color: #aaa;
		}
	}	
`

export const Preview = styled.div`
	width: 90%;
	min-width: 300px;
	${flex('row', 'center', 'space-between')}
	margin: 10px 0;
	padding: 10px;
	border: 1px solid ${color.defaultFontColor};
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`

export default EventFormStyles;
