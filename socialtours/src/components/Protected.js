import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "../config/api";
import axios from "axios";

import Dashboard from "./Dashboard";

export default class Secret extends Component {
	state = {
		users: ""
	};

	componentDidMount() {
		axios
			.get(
				`${API_ENDPOINT}/api/users`
				// for accessing protected endpoint later
				// ,{
				//   headers: {
				//     Authorization: 'Bearer ' + localStorage.getItem('access_token')
				//   },
				// }
			)

			.then(response => {
				this.setState({ users: response.data });
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<Link to="/">Home</Link>
				<p>secret authenticated place</p>
				<p>{this.state.users.length} users in database</p>
				{this.state.users.length > 0 &&
					this.state.users.map(user => (
					<div key={user.id}>
						<h4>{`${user.first_name} ${user.last_name}`}</h4>
						<p>ID: {user.id}</p>
						<p>Registered at: {user.created_at}</p>
					</div>
				))}
			</div>
		);
	}
}
