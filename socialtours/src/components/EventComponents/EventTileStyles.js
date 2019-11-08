import styled from "styled-components";

import {
	color,
	colors,
	fontSizing,
	flex,
	breakpoints,
	colorScheme
} from "../DesignComponents/theme";

export const EventInfoContainer = styled.div`
	width: 200px;
  height: 200px;
  ${flex("column", "center")};
  margin: 10px;
	border-radius: 5px;
  cursor: pointer;
  background: ${color.lightText};
`;

export const Banner = styled.div`
  width: 100%;
  height: 150px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-align: center;

	img {
		margin: 0 auto;
		width: 100%;
		height: 100%;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
	}
`;

export const EventSummary = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 5px;
	background: ${color.lightText};

`;

export const EventTitle = styled.h2`
	width: 100%;
  padding: 10px;
  font-size: ${fontSizing.s};
  font-weight: bold;
  color: ${colors.black};
`;

export default EventInfoContainer;
