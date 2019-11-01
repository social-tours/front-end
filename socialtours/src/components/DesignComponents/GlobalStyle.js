import { createGlobalStyle } from "styled-components";
import "typeface-roboto";

import { color, fontStyles } from "./theme";
import "../../reset.css";

const GlobalStyle = createGlobalStyle`
@import url('https://use.fontawesome.com/releases/v5.0.13/css/all.css');

* {
	box-sizing: border-box;
}

html {
	//font-size: 62.5%;
}

body {
	margin: 0;
	font-family: ${fontStyles.defaultFont};
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

ul.inline, li.selected {
	border-bottom: 3px solid #337ab7;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
		monospace;
}


`;

export default GlobalStyle;
