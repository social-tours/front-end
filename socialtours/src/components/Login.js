import React, { Component } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../config/api";

class Login extends Component {
	state = {
		credentials: {
			email: "",
			password: ""
		}
	};

	handleChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};

	handleLogin = e => {
		e.preventDefault();
		// convert to async await
		axios
			.post(`${API_ENDPOINT}/api/login`, this.state.credentials)
			.then(res => {
				console.log("success");
			})
			.catch(err => {
				console.log("login err: ", err);
				if (err.response && err.response.status === 401) {
					// localStorage.removeItem("token");
				}
			});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleLogin}>
					<input
						type="email"
						name="email"
						placeholder="email"
						value={this.state.credentials.email}
						onChange={this.handleChange}
					/>
					<input
						type="password"
						name="password"
						placeholder="password"
						value={this.state.credentials.password}
						onChange={this.handleChange}
					/>
					<button>Log in</button>
				</form>
			</div>
		);
	}
}

export default Login;
