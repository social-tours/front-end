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
	}
	
	button {
    background-color: ${colors.grape};
    color: ${colors.putty};
    padding: 3% 25%;
	}
`;

export default EventFormStyles