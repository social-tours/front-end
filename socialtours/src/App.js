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

import TheCreateEvent from './components/createEvent.js'
import UpdateDeleteEvent from './components/updateDeleteEvent.js'

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
				<Switch>
					<Route
						exact
						path="/"
						render={() => <Main auth={this.state.auth} />}
					/>
					<Route
						path="/protected"
						render={() =>
							this.state.auth.isAuthenticated() ? (
								<Protected auth={this.state.auth} />
							) : (
									<NotFound />
								)
						}
					/>
					<Route path="/callback" component={Callback} />
					<Route component={NotFound} />


				</Switch>
				<Route
					path="/createEvent" component={TheCreateEvent}
				/>

				{this.props.events.map(event => (
					<Route
						key={event.id}
						path={`/events/${event.id}`}
						render={props =>
							<UpdateDeleteEvent
								{...props}
								event={event}
							/>}
					/>))}


			</Router>
		);
	}
}
const mapStateToProps = state => {
	// console.log(state);
	return {
		events: state.eventReducer.events
	};
};
export default connect(
	mapStateToProps,
	{
		fetchEvents,
		getSchedules
	}
)(App);
