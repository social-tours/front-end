import styled from "styled-components";

import { colors } from "./DesignComponents/theme";

const EventFormStyles = styled.div`
	margin: 20px auto;
	//margin-top: 50px;
	display: flex;
	width: 100%;
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
		}
	}

	button {
		background-color: ${colors.grape};
		color: ${colors.putty};
		height: 35px;
		width: 85%;
	}
`;

export default EventFormStyles;
