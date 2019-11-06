import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Search from "../Search";

import { fetchEvents, getSubscriptionsByUserId } from "../../actions/";
import Panel from "./Panel";
import Tabs from "./Tabs";
import * as S from "./EventFormStyles";

class EventsDashboard extends Component {
	state = {
		userId: null
	};

	handleFetchEvents() {
		this.props.fetchEvents();
	}

	handleFetchSubscriptions() {
		this.props.getSubscriptionsByUserId();
	}

	getUserId() {
		if (localStorage.getItem("api_token")) {
			return jwtDecode(localStorage.getItem("api_token"));
		}
	}

	componentDidMount() {
		document.title = "Events Dashboard | Social Tours";
		this.handleFetchEvents();
		this.handleFetchSubscriptions();
		const userId = this.getUserId().id;
		this.setState({ userId });
	}

	render() {
		return (
			<>
				<Search />

				<S.DashBoardContainer>
					<Tabs>
						<Panel title="My Events">
							{this.props.events
								.filter(event => event.host_id === this.state.userId)
								.map(event => (
									<Link key={event.id} to={`/events/${event.id}`}>
										<S.Preview key={event.id}>{event.title}</S.Preview>
									</Link>
								))}
						</Panel>
						<Panel title="Influencer Events">
							{this.props.events
								.filter(event =>
									this.props.subscriptions
										.map(sub => sub.influencer_id)
										.includes(event.host_id)
								)
								.map(event => (
									<Link key={event.id} to={`/events/${event.id}`}>
										<S.Preview key={event.id}>{event.title}</S.Preview>
									</Link>
								))}
						</Panel>
						<Panel title="All Events">
							{this.props.events.map(event => (
								<Link key={event.id} to={`/events/${event.id}`}>
									<S.Preview key={event.id}>{event.title}</S.Preview>
								</Link>
							))}
						</Panel>
					</Tabs>
				</S.DashBoardContainer>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		events: state.eventReducer.events,
		subscriptions: state.subscriptionReducer.subscriptions
	};
};

export default connect(
	mapStateToProps,
	{ fetchEvents, getSubscriptionsByUserId }
)(EventsDashboard);
