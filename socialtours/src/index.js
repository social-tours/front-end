import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import "./index.css";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(null));

ReactDOM.render(<App />, document.getElementById("root"));
