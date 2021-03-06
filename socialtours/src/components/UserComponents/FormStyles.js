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
  margin: 0px auto 10px auto;
  padding-top 50px;
  border-radius: 5px;
  // box-shadow:  10px 10px 5px 0px rgba(0,0,0,0.75);
  font-size: ${fontSizing.sm};

  ${props =>
		props.something &&
		css`
			margin-top: 10px;
			padding-top: 0px;
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
    border-radius: 5px;
    ${flex("column", "center")};
    border: 1px solid ${colors.black_plum};
    background-color: ${colors.blue};
    background-image: linear-gradient(to bottom right, ${colors.blue}, ${
	colors.light_blue
});
    color: ${colors.white};


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
      background: ${colors.white};     
      color: #000;
      line-height: 1rem;
      ::placeholder {
        color: ${colors.black}
      }
    }

    label {
      width: 80%;
      margin-top: 0;
      font-size: ${fontSizing.sm}
    }

    p {
        font-size: ${fontSizing.sm}
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
		color: #fff;
	}
`;

export const FormButton = styled(Button)`
	width: 250px;
	padding: 10px;
	border-radius: 5px;
	font-weight: normal;
	font-size: ${fontSizing.sm};
	border: 1px solid ${colors.black};
	background-color: ${colors.red};
	color: black;
	${props =>
		props.socialIcon &&
		css`
			${flex("row", "center", "space-evenly")};
			padding: 1px 10px;
			background-color: ${colors.white};

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
	font-size: ${fontSizing.sm};
`;

export default FormContainer;
