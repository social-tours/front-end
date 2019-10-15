import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { API_ENDPOINT } from "../config/api";
import styled from "styled-components";
import { fetchEvents } from "../actions/eventActions";

// TODO -- get userID from global state and send it in GET request to subscriptions

class FollowerDashboard extends React.Component {
	state = {
		events: [],
		followed: [],
		userId: 1
	};

	componentDidMount = () => {
		this.props.fetchEvents();
	};

	render = () => {
		return (
			<Wrapper>
				<Heading1>Follower Dashboard</Heading1>
				<DataWrapper className="events">
					<Heading2>Events list</Heading2>
					{this.props.events &&
						this.props.events.map(event => <div>{event.title}</div>)}
				</DataWrapper>
				<DataWrapper className="followed">
					<Heading2>Following</Heading2>
					{this.state.followed &&
						this.state.followed.map(person => (
							<div>
								{person.first_name} {person.last_name}
							</div>
						))}
				</DataWrapper>
			</Wrapper>
		);
	};
}

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	color: #fff;
	display: flex;
	flex-wrap: wrap;
`;
const Heading1 = styled.h1`
	margin: 35px 0;
	text-align: center;
	flex: 0 0 100%;
	font-size: 1.2em;
`;
const Heading2 = styled.h2`
	font-size: 1.1em;
	text-decoration: underline;
`;
const DataWrapper = styled.div`
	flex: 1;
`;

const mapStateToProps = state => {
	return {
		events: state.eventReducer.events
	};
};

export default connect(
	mapStateToProps,
	{ fetchEvents }
)(FollowerDashboard);
