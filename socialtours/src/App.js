import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents } from "./actions/index.js";
import { getSchedules } from "./actions/schedules";

import "./App.css";
import Login from "./components/UserComponents/Login";
import Register from "./components/UserComponents/Register";
import RegisterCallback from "./components/UserComponents/RegisterCallback";
import Profile from "./components/UserComponents/Profile";

import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import FollowerDashboard from "./components/FollowerDashboard";
import Credits from "./components/MediaComponents/Credits";
import Protected from "./components/Protected";
import NotFound from "./components/NotFound";
import Opt from "./components/Opt";
import Callback from "./components/UserComponents/Callback";
import Calendar from "./components/EventCalendar";
import UpdateDeleteEvent from "./components/updateDeleteEvent.js";
import TheCreateEvent from "./components/createEvent.js";
import TheCrudEvent from "./components/updateDeleteEvent.js";
import ManageEvents from "./components/ManageEvents/ManageEvents";
import Navigation from "./components/Navigation";
import { userHasEvent } from "./utils";
import AboutUsContact from "./components/AboutUsContact.js";
import Search from "./components/Search";

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
				<Navigation
					logout={this.props.auth.logout}
					authenticated={this.props.auth.isAuthenticated}
				/>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route path="/register/callback" component={RegisterCallback} />
					<Route path="/profile" component={Profile} />
					<Route
						path="/protected"
						render={() =>
							this.props.auth.isAuthenticated() ? <Main /> : <NotFound />
						}
					/>
					<Route path="/callback" component={Callback} />
					<Route path="/credits" component={Credits} />
					<Route path="/calendar" component={Calendar} />
					{/* <Route component={NotFound} /> Commented out so I can work on code without being 'authorized' on line 65*/}
					<Route path="/createEvent" component={TheCreateEvent} />
					<Route path={`/events/:id`} component={UpdateDeleteEvent} />
					<Route
						exact
						path="/ManageEvents"
						render={() =>
							userHasEvent(this.props.events) ? <ManageEvents /> : <NotFound />
						}
					/>
					<Route path="/search" component={Search} />
					<Route path="/FollowerDash" component={FollowerDashboard} />
					<Route path="/AboutUsContact" component={AboutUsContact} />
					<Route path="/opt" component={Opt} />
				</Switch>
			</Router>
		);
	}
}
const mapStateToProps = state => {
	// console.log(state);
	return {
		events: state.eventReducer.events,
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
