import styled from "styled-components";
import {
	colors,
	colorScheme,
	fontSizing,
	flex
} from "../DesignComponents/theme";

export const Wrapper = styled.div`
	width: 90%;
	${flex("column", "center")}
	margin: 0 auto;
	padding-top: 50px;
`;

export const Table = styled.div`
	width: 100%;
	${flex("column", "center")}
	table {
		color: ${colors.white};
		width: 90%;
		max-width: 600px;
		background-image: linear-gradient(
			to bottom right,
			${colors.blue},
			${colors.light_blue}
		);

		& * {
			border: 1px solid ${colors.black};
		}

		th {
			font-size: ${fontSizing.xxs};
			font-weight: bold;
			padding: 10px;

			@media @phone {
				font-size: ${fontSizing.xxs};
				padding: 0;
			}
		}

		td {
			padding: 10px;
			font-size: ${fontSizing.xxxs};

			@media @phone {
				font-size: ${fontSizing.xxxs};
			}
		}

		a {
			font-size: ${fontSizing.xxxs};
			border: 0;

			&:link,
			&:visited {
				color: ${colors.white};
			}

			@media @phone {
				font-size: ${fontSizing.xxxs};
			}
		}
	}
`;

export default Wrapper;
