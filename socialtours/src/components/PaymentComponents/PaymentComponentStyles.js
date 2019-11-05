import styled, { css } from "styled-components";
import {
	color,
	colors,
	colorScheme,
	fontSizing,
	flex,
	breakpoints
} from "../DesignComponents/theme";
import Button from "../DesignComponents/Button";
import * as S from "../DesignComponents/FormStyles";

export const PaymentContainer = styled.div`
	width: 600px;
	${flex("column", "center", "center")};
	margin: 50px auto 10px auto;

	.stripe-card-element {
		width: 100%;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid ${colorScheme.secondaryBorderColor};
	}
`;
export const PayButton = styled(Button)`
	width: 250px;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid ${color.primaryBgShading};
	font-weight: normal;
	font-size: ${fontSizing.xxs}
	background-color: ${colors.putty};
	color: black;
`;

export default PaymentContainer;
