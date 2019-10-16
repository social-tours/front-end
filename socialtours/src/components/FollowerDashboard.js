import React from "react";
import axios from "axios";
import { API_ENDPOINT } from "../config/api";
import styled from "styled-components";

// TODO -- get userID from global state and send it in GET request to subscriptions

class FollowerDashboard extends React.Component {
	state = {
		events: [],
		followed: [],
		userId: 1
	};

	componentDidMount = () => {
		let newEvents = [];
		let newFollowed = [];

		axios
			.get(API_ENDPOINT + "/api/events")
			.then(res => {
				newEvents = res.data;
			})
			.catch(err => {
				console.log(err);
			});

		axios
			.get(API_ENDPOINT + `/api/subscriptions/${this.state.userId}`)
			.then(res => {
				newFollowed = res.data;
			})
			.catch(err => {
				console.log(err);
			});

		this.setState({
			events: newEvents,
			followed: newFollowed
		});
	};

	render = () => {
		return (
			<SiteWrapper>
				<Title>Follower Dashboard</Title>
				<div className="events">
					{this.state.events &&
						this.state.events.map(event => <div>{event.title}</div>)}
				</div>
				<div className="followed">
					{this.state.followed &&
						this.state.followed.map(person => (
							<div>
								{person.first_name} {person.last_name}
							</div>
						))}
				</div>
			</SiteWrapper>
		);
	};
}

const Title = styled.h1`
	margin-top: 35px;
`;

const SiteWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #011638;
	color: #fff;
`;

export default FollowerDashboard;