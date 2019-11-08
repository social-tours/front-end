import styled from "styled-components";
import { color, colors, flex, fontSizing } from "../DesignComponents/theme";

export const Section = styled.div`
	box-sizing: border-box;
	display: flex;
	width: 400px;
	//padding-top: 60px;
	// height: 140px;
	// margin: 0 auto;
  flex-wrap: wrap;

`;

export const SearchBarContainer = styled.div`
  width: 100%;
  ${flex("row", "center")};
  padding: 5px 10px;
  border: 1px solid ${color.primaryBgShading};
  border-radius: 25px;
  background: ${colors.white};

  i {
    width: 20%;
    color: ${color.primaryDark};
    font-size: ${fontSizing.ml};
    font-weight: bold;
  }

`

export const SearchBar = styled.input`
	width: 75%;
  border: none;
  line-height: 1rem;
  font-size: ${fontSizing.m};
	::placeholder {
		color: ${color.grayShade};
	}
`;

export const SearchBtn = styled.div`
	cursor: pointer;
	// display: flex;
	// justify-content: center;
	// align-items: center;
  width: 80px;
  border: 1px solid transparent;
	border-top-radius: 25px;
  border-bottom-radius: 25px;
	padding: 10px;
	background-color: ${colors.red};
`;

export const SearchResults = styled.div`
	width: 300px;
	background-image: linear-gradient(
		to bottom right,
		${colors.blue},
		${colors.light_blue}
	);
	border: 1px solid ${colors.black};
	color: ${colors.white};
	margin: 10px auto 0;
	padding: 0 10px;
`;

export const SearchResult = styled.div`
	margin: 10px 0;
	display: flex;
	justify-content: space-between;
`;

export default Section;
