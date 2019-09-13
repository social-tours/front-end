import { createGlobalStyle } from "styled-components";
import "typeface-roboto";

//import { colors, color, fontStyles, fontSizing } from "./theme";
import "../../reset.css";

const GlobalStyle = createGlobalStyle`

body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
		monospace;
}

html {
	box-sizing: border-box;
}

`;

export default GlobalStyle;
