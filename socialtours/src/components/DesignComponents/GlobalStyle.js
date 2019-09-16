import { createGlobalStyle } from "styled-components";
import "typeface-roboto";

import { fontStyles } from "./theme";
import "../../reset.css";

const GlobalStyle = createGlobalStyle`

* {
	box-sizing: border-box;
}

// html {
// 	font-size: 62.5%;
// }

body {
	margin: 0;
	font-family: ${fontStyles.defaultFont};
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
		monospace;
}


`;

export default GlobalStyle;
