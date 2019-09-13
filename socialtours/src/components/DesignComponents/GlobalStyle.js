import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { color, fontStyles, fontSizing } from './theme'

const GlobalStyle = createGlobalStyle`
${normalize}
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i,900|Roboto:400,500,700');
@import url('https://fonts.googleapis.com/css?family=Lato|Montserrat:400,500,600,700');
@import url('https://use.fontawesome.com/releases/v5.0.13/css/all.css');

* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body * {
  font-family: ${fontStyles.defaultFont};
}

body {
  color: ${color.darkText};
  font-family: ${fontStyles.defaultFont}  
}

h1, h2, h3, h4, h5 {
  font-family: ${fontStyles.headingFont};
  
}

h1 {
  font-size: ${fontSizing.ml};
  font-weight: bold;
}

h2 {
  font-size: ${fontSizing.m};
  font-weight: bold;
}

h3 {
  font-size: ${fontSizing.s};
  font-weight: bold;
}

h4 {
  font-size: ${fontSizing.xs};
  font-weight: bold;
}

p {
  font-size: ${fontSizing.xs};
  line-height: 1.4;
}

img {
    width: 100%;
    height: auto;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

`

export default GlobalStyle
