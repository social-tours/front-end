import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents } from "./actions/index.js";

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
import Callback from "./components/UserComponents/Callback";
import Calendar from "./components/EventCalendar";
import UpdateEvent from "./components/ManageEvents/UpdateEvent.js";
import TheCreateEvent from "./components/EventComponents/CreateEvent.js";
//import TheCrudEvent from "./components/updateDeleteEvent.js";
import ManageEvents from "./components/ManageEvents/ManageEvents";
import Navigation from "./components/Navigation";
import { userHasEvent } from "./utils";
import AboutUsContact from "./components/AboutUsContact.js";
import Search from "./components/SearchComponents/Search";
import Checkout from "./components/PaymentComponents/Checkout";
import EventsDashboard from "./components/EventComponents/EventsDashboard";
import EventItem from "./components/EventComponents/EventItem";
import ScheduleDetails from "./components/ScheduleComponents/ScheduleDetails";
// import Calendar from "./components/EventCalendar";
import { API_ENDPOINT } from "./config/api";
//const API_ENDPOINT = "https://staging-a-socialtours.herokuapp.com";
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
							this.props.auth.isAuthenticated() ? (
								<EventsDashboard />
							) : (
								<NotFound />
							)
						}
					/>
					<Route path="/callback" component={Callback} />
					<Route path="/credits" component={Credits} />
					<Route path="/calendar" component={Calendar} />
					{/* <Route component={NotFound} /> Commented out so I can work on code without being 'authorized' on line 65*/}
					<Route path="/createEvent" component={TheCreateEvent} />
					{/* <Route exact path={`/events/:id`} component={UpdateEvent} /> */}
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
					<Route path="/eventsdashboard" component={EventsDashboard} />
					<Route path="/payment" component={Checkout} />
				</Switch>
				{this.props.events && (this.props.events.map(event => (
					<Route
						exact
						path={`/events/${event.id}`}
						key={event.id}
						render={props => <EventItem {...props} event={event} />}
					/>
				)))}
				{this.props.events && (this.props.events.map(event =>
					event.schedule.map(schedule => (
						<Route
							key={schedule.id}
							path={`/events/${schedule.event_id}/schedules/${schedule.id}`}
							render={props => (
								<ScheduleDetails {...props} event={event} schedule={schedule} />
							)}
						/>
					))
				))}
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
		fetchEvents
	}
)(App);
