import styled, { css } from "styled-components";
import { color, colorScheme, fontSizing, breakpoints } from "./theme";

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 25px;
  font-size: ${fontSizing.s};
  font-weight: bold;
  cursor: pointer;

  @media ${breakpoints[0]} {
    font-size: ${fontSizing.xxs}
  }

  ${props =>
		props.primary &&
		css`
			background: ${color.accent};
		`}

  ${props =>
		props.transparent &&
		css`
			background: transparent;
			border: 1px solid ${colorScheme.secondaryBorderColor};
		`}

  ${props =>
		props.add &&
		css`
			color: ${color.lightText};
			background: coral;
		`}

  ${props =>
		props.update &&
		css`
			color: ${color.lightText};
			background: coral;
		`}

  ${props =>
		props.delete &&
		css`
			color: ${color.lightText};
			background: ${color.danger};
		`}


`;

export default Button;
