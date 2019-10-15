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
				<h1>Follower Dashboard</h1>
				<div className="events">
					{this.props.events &&
						this.props.events.map(event => <div>{event.title}</div>)}
				</div>
				<div className="followed">
					{this.state.followed &&
						this.state.followed.map(person => (
							<div>
								{person.first_name} {person.last_name}
							</div>
						))}
				</div>
			</Wrapper>
		);
	};
}

const Wrapper = styled.div`
	margin-top: 35px;
	color: #fff;
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
