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

export const FormContainer = styled.div`
  width: 600px;
  ${flex("column", "center", "center")};
  margin: 50px auto 10px auto ;
  border-radius: 5px;
  border: 1px solid ${colorScheme.secondaryBorderColor}
  // box-shadow:  10px 10px 5px 0px rgba(0,0,0,0.75);
  font-size: ${fontSizing.sm};

  ${props =>
		props.something &&
		css`
			margin-top: 10px;
		`}

  @media ${breakpoints[0]} {
    width: 100%;
    font-size ${fontSizing.sm};
  }

  .windowFrame {
    width: 100%;
    margin: 0;
    padding: 10px;
    border-radius: 5px 5px 0 0;
    background: linear-gradient(to top, #cccccc 0%, #d6d6d6 1px, #ebebeb 100%);

    @media ${breakpoints[0]} {
      padding: 5px;
    }
  }  

  form {
    width: 100%;
    ${flex("column", "center")};
    background-color: ${colors.black_plum};
    color: ${colors.putty};


    @media ${breakpoints[0]} {
      width: 100%;
    }

    & *  {
      margin: 10px 0;
    }

    input {
      width: 80%;
      padding: 10px;
      border: 1px solid ${color.primaryBgShading};
      background: ${colors.dirty_concord};     
      color: white;
      line-height: 1rem;
      ::placeholder {
      	color: ${color.lightText}
      }
    }

    label {
      width: 80%;
      margin-top: 0;
      font-size: ${fontSizing.xxxs}
    }

    p {
        font-size: ${fontSizing.xxs}
    }

  }
`;

export const TextContainer = styled.div`
	width: 600px;
	${flex("column", "center", "center")};
	margin: 0 auto;

	p {
		font-size: ${fontSizing.xs};
		font-weight: bold;
		text-transform: uppercase;
	}
`;

export const FormButton = styled(Button)`
	width: 250px;
	padding: 10px;
	border-radius: 5px;
	font-weight: normal;
	font-size: ${fontSizing.xxs};
	border: 1px solid ${color.primaryBgShading};
	background-color: ${colors.putty};
	color: black;
	${props =>
		props.socialIcon &&
		css`
			${flex("row", "center", "space-evenly")};
			padding: 1px 10px;

			div:first-child {
				width: 20px;
			}

			img {
				width: 100%;
				height: auto;
			}
		`};
`;

export const MessageContainer = styled.div`
	text-align: center;
	font-size: ${fontSizing.xxs};
`;

export default FormContainer;
