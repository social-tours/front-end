import styled from "styled-components";

import { colors } from "../DesignComponents/theme";

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

		border-width: 2px;
		border-color: black;
		border-style: solid;
	}
`;

export default EventFormStyles;
