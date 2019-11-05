import styled from "styled-components";

import {
	color,
	colors,
	fontSizing,
	flex,
	breakpoints,
	colorScheme
} from "../DesignComponents/theme";

export const Container = styled.div`
	width: 90%;
	${flex("column", "center")};
	margin: 0 auto;
	padding: 20px;
	padding-top: 50px;
	border: 1px solid ${colorScheme.defaultBorderColor};
	border-radius: 3px;
`;

export default Container;
