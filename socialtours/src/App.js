import React, { Component } from "react";
import Auth from "./Auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents } from "./actions/index.js";
import { getSchedules } from "./actions/schedules";

import "./App.css";
// import Login from "./components/Login";

import Main from "./components/Main";
import Protected from "./components/Protected";
import NotFound from "./components/NotFound";
import Callback from "./components/Callback";
import Calendar from "./components/EventCalendar";

// import Calendar from "./components/EventCalendar";
class App extends Component {
	state = {
		auth: new Auth()
	};

	componentDidMount() {
		this.props.fetchEvents();
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
					<Route path="/calendar" component={Calendar} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	}
}
const mapStateToProps = state => {
	//console.log(state);
	return state;
};
export default connect(
	mapStateToProps,
	{
		fetchEvents,
		getSchedules
	}
)(App);
