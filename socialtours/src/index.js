import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import './index.css';
import thunk from "redux-thunk";

import { ThemeProvider } from "styled-components";
import theme from "./components/DesignComponents/theme";
import GlobalStyle from "./components/DesignComponents/GlobalStyle";

import rootReducer from "./reducers";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<GlobalStyle />
			<App />
		</Provider>
	</ThemeProvider>,
	document.getElementById("root")
);
