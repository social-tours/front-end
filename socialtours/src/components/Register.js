import React, { Component } from "react";
import auth0 from "auth0-js";
import axios from "axios";

import { API_ENDPOINT } from "../config/api";

const webAuth = new auth0.WebAuth({
	domain: "dev-r8zrga7p.auth0.com",
	clientID: "mKqnZoQovxuLSlTUSIwjj4bcuMOH3aX1"
});

class Register extends Component {
	state = {
		email: "",
		first_name: "",
		last_name: "",
		password: "",
		phone: "",
		type: 1
	};

	handleInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	addUser = async token => {
		try {
			const newUser = {
				...this.state,
				auth0_token: token
			};

			const addUserData = await axios.post(
				`${API_ENDPOINT}/api/register`,
				newUser
			);
			console.log(`ADDED TO DATABASE: `, addUserData);
		} catch (err) {
			console.err(err.message);
		}
	};

	handleRegister = async e => {
		e.preventDefault();

		const auth0SignUp = await webAuth.signup(
			{
				connection: "Username-Password-Authentication",
				email: this.state.email,
				password: this.state.password,
				given_name: this.state.first_name,
				family_name: this.state.last_name,
				phone: this.state.phone,
				name: `${this.state.first_name} ${this.state.last_name}`
			},
			function(err) {
				if (err) {
					console.error(err);
					return alert("Something went wrong: " + err.message);
				} else {
					return alert("success signup without login!");
				}
			}
		);
		console.log("AUTH0 SIGN UP: ", auth0SignUp);

		if (auth0SignUp.headers["auth0-client"]) {
			this.addUser(auth0SignUp.headers["auth0-client"]);
		}
	};

	render() {
		return (
			<form onSubmit={this.handleRegister}>
				<input
					type="email"
					name="email"
					value={this.state.email}
					onChange={this.handleInput}
					placeholder="email"
				/>
				<br />

				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleInput}
					placeholder="password"
				/>
				<br />

				<input
					name="first_name"
					value={this.state.first_name}
					onChange={this.handleInput}
					placeholder="First Name"
				/>
				<br />

				<input
					name="last_name"
					value={this.state.last_name}
					onChange={this.handleInput}
					placeholder="Last Name"
				/>
				<br />

				<input
					type="tel"
					name="phone"
					value={this.state.phone}
					onChange={this.handleInput}
					placeholder="phone"
				/>
				<br />

				<button>Sign Up</button>
			</form>
		);
	}
}

export default Register;
