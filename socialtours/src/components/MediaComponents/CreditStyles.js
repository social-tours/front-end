import styled from "styled-components";
import { colorScheme, fontSizing, flex } from "../DesignComponents/theme";

export const Wrapper = styled.div`
	width: 90%;
	${flex("column", "center")}
	margin: 0 auto;
	margin-top: 50px;
`;

export const Table = styled.div`
	width: 100%;
	${flex("column", "center")}
	table {
		width: 90%;
		max-width: 600px;

		& * {
			border: 1px solid ${colorScheme.defaultBorderColor};
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
				color: blue;
			}

			@media @phone {
				font-size: ${fontSizing.xxxs};
			}
		}
	}
`;

export default Wrapper;
