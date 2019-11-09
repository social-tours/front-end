import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { fetchEvents, getSubscriptionsByUserId } from "../../actions/";

import EventTile from "./EventTile";
import Search from "../SearchComponents/Search";
import Carousel from "./Carousel";
import Panel from "./Panel";
import Tabs from "./Tabs";
import * as S from "./EventComponentsStyles.js";

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
				<Carousel {...this.props} />
				<S.DashBoardContainer>
					<header>
						<Search />
						<S.CEButton onClick={e => this.props.history.push("createEvent")}>
							<i className="fa fa-plus"></i> Create New Event
						</S.CEButton>
					</header>
					<Tabs>
						<Panel title="My Events">
							{this.props.events
								.filter(event => event.host_id === this.state.userId)
								.map(event => (
									<EventTile key={event.id} event={event} />
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
									<EventTile key={event.id} event={event} />
								))}
						</Panel>
						<Panel title="All Events">
							{this.props.events.map(event => (
								<EventTile key={event.id} event={event} />
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

export default withRouter(connect(
	mapStateToProps,
	{ fetchEvents, getSubscriptionsByUserId }
)(EventsDashboard));
