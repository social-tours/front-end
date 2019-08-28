import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import API_ENDPOINT from "./config/api";
import { fetchEvents } from './actions/index.js'
import { connect } from 'react-redux';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usersData: []
		};
	}

<<<<<<< HEAD
    componentDidMount() {
        this.props.fetchEvents()
        axios
            .get(`${API_ENDPOINT}/api/users`)
=======
	componentDidMount() {
		axios
			.get(`${API_ENDPOINT}/api/users`)
>>>>>>> 1cc0465365fd1b605b8a99c91807b24f9485ffec

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
export default connect(null, { fetchEvents })(App);
