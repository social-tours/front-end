import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents } from "./actions/index.js";
import { getSchedules } from "./actions/schedules";

import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import RegisterCallback from "./components/RegisterCallback";

import Main from "./components/Main";
import Protected from "./components/Protected";
import NotFound from "./components/NotFound";
import Callback from "./components/Callback";
import Calendar from "./components/EventCalendar";

import TheCrudEvent from "./components/updateDeleteEvent.js";
import ManageEvents from "./components/ManageEvents/ManageEvents";
import Navigation from "./components/Navigation";

// import Calendar from "./components/EventCalendar";
//import API_ENDPOINT from "./config/api";
const API_ENDPOINT = "https://staging-a-socialtours.herokuapp.com";
class App extends Component {
	state = {
		usersData: []
	};

	componentDidMount() {
		this.props.fetchEvents();
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
				<Navigation authenticated={this.props.auth.isAuthenticated()} />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/register/callback" component={RegisterCallback} />
					<Route
						path="/protected"
						render={() =>
							this.props.auth.isAuthenticated() ? <Protected /> : <NotFound />
						}
					/>
					<Route path="/callback" component={Callback} />
					<Route path="/calendar" component={Calendar} />
					{/* <Route component={NotFound} /> Commented out so I can work on code without being 'authorized' on line 65*/}
					<Route path="/events" component={TheCrudEvent} />
					<Route exact path="/ManageEvents" component={ManageEvents} />
					<Login />
				</Switch>
			</Router>
		);
	}
}
const mapStateToProps = state => {
	//console.log(state);
	return {
		auth: state.authReducer.auth
	};
};
export default connect(
	mapStateToProps,
	{
		fetchEvents,
		getSchedules
	}
)(App);
