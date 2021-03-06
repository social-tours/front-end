import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { API_ENDPOINT } from "../config/api";
import styled from "styled-components";
import { fetchEvents } from "../actions/eventActions";
import {
	getSubscriptionsByUserId,
	toggleMarketing
} from "../actions/subscriptionActions";
// TODO -- get userID from global state and send it in GET request to subscriptions

class FollowerDashboard extends React.Component {
	componentDidMount = () => {
		this.props.fetchEvents();
		this.props.getSubscriptionsByUserId();
	};

	render = () => {
		return (
			<SiteWrapper>
				<Wrapper>
					<Heading1>Follower Dashboard</Heading1>
					<DataWrapper className="events">
						<Heading2>Events list</Heading2>
						{this.props.events &&
							this.props.events.map(event => <Item>{event.title}</Item>)}
					</DataWrapper>
					<DataWrapper className="followed">
						<Heading2>Following</Heading2>
						<Item>Enable/disable notifications</Item>
						{this.props.subscriptions.map(sub => (
							<Item>
								<input
									id="checkid"
									type="checkbox"
									checked={sub.marketing_opt_in}
									onChange={() =>
										this.props.toggleMarketing(sub.id, sub.marketing_opt_in)
									}
								/>
								{sub.influencer_name}
							</Item>
						))}
					</DataWrapper>
				</Wrapper>
			</SiteWrapper>
		);
	};
}

const SiteWrapper = styled.div`
	width: 100%;
	height: 100vh;
	color: #fff;
`;
const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	display: flex;
	flex-wrap: wrap;
	font-size: 1.2em;
`;
const Item = styled.div`
	margin-top: 5px;
`;
const Heading1 = styled.h1`
	margin: 35px 0;
	text-align: center;
	flex: 0 0 100%;
	font-size: 1.4em;
`;
const Heading2 = styled.h2`
	font-size: 1.3em;
	text-decoration: underline;
`;
const DataWrapper = styled.div`
	max-width: 50%;
	float: left;
	flex: 1;
`;

const mapStateToProps = state => {
	return {
		events: state.eventReducer.events,
		subscriptions: state.subscriptionReducer.subscriptions
	};
};

export default connect(
	mapStateToProps,
	{ fetchEvents, getSubscriptionsByUserId, toggleMarketing }
)(FollowerDashboard);
