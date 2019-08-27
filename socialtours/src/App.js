import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import API_ENDPOINT from "./config/api";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usersData: []
		};
	}

	componentDidMount() {
		axios
			.get(`${API_ENDPOINT}/api/users`)

			.then(response => {
				this.setState({ usersData: response.data });
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Router>
				<div>
					<p>{this.state.usersData.length} users in database</p>
					<Route path="/login" component={Login} />
				</div>
			</Router>
		);
	}
}
export default App;
