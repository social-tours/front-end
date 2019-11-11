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
import { InputWrapper, ScheduleButton } from "../EventComponents/EventComponentsStyles"

export const PaymentContainer = styled.div`
	width: 90%;
	max-width: 500px;
	${flex("column", "center", "center")};
	margin: 50px auto 10px auto;
	padding: 20px;
	background: ${color.secondaryBgShading};

	form {
		width: 100%;
		${flex("column", "space-between", "center")};
		padding: 0 10px;
		border: 2px solid ${color.secondaryColor};
		border-radius: 10px;
		background: ${color.lightText};

		h3 {
			margin-top: 20px;
			margin-bottom: 10px;
			font-size: ${fontSizing.sm};
			font-weight: bold;
			text-transform: uppercase;
		}

		input {
			width: 80%;
			height: 35px;
			padding-left: 10px;
			border-radius: 5px;
			border: 1px solid ${colorScheme.secondaryBorderColor};
			font-size: ${fontSizing.m};

			@media ${breakpoints[1]} {
				width: 100%;
				padding: 10px;
			}
		}

		.product-price {
			width: 80%;
			font-size: ${fontSizing.m};
		}

		.product-description, .amount {
			font-size: ${fontSizing.ml};
			font-weight: bold;
		}

		.stripe-card-element {
			width: 100%;
			padding: 10px;
			border-radius: 5px;
			border: 1px solid ${colorScheme.secondaryBorderColor};
		}

		button {
			background-color: ${colors.red};
			color: ${color.lightText};
			height: 35px;
			width: 85%;
			max-width: 150px;
			margin: 25px auto;
			border: 1px solid transparent;
			border-radius: 25px;
			font-size: ${fontSizing.s};
			font-weight: bold;
			text-transform: uppercase;
			cursor: pointer;

			@media ${breakpoints[0]} {
				font-size: ${fontSizing.xxs}
			}		
	}

`;

export const PayInputWrapper = styled(InputWrapper)`
	${flex("row", "center", "space-between")};
	margin: 5px 0;
	padding: 0;
	background: ${color.lightText};

	label {
		width: 15%;
	}

	@media ${breakpoints[0]} {
		width: 90%;
		${flex("column")};
		margin: 10px 0;
		
		&.input-checkbox {
			${flex("row", "center")};

			label {
				width: 100px;
			}

		}
	}

`

export const ReceiptContainer = styled.div`
	width: 90%;
	max-width: 500px;
	${flex("column", "center", "center")};
	margin: 50px auto;
	padding: 20px;
	border: 2px solid ${color.secondaryColor};
	border-radius: 10px;
	background: ${color.secondaryBgShading};

	& * {
		margin: 10px 0;
	}

	h2 {
		font-size: ${fontSizing.l};
		font-weight: bold;
		text-transform: uppercase;
	}

`

export const PayButton = styled(ScheduleButton)`
`;

export default PaymentContainer;
