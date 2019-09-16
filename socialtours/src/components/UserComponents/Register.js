import React, { Component } from "react";
import { connect } from "react-redux";

import { auth0SignUp, addUser } from "../../actions";

import { FormContainer } from "./RegisterFormStyles";

class Register extends Component {
	state = {
		email: "",
		first_name: "",
		last_name: "",
		password: "",
		phone_nbr: "",
		type: 1,
		auth0_token: ""
	};

	/**
	 * Method to handle form input
	 * @returns new local state with form data
	 */
	handleInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	/**
	 * Method to invoke Auth0 new user registration
	 * and adding user to API database
	 * @returns new global state with new Auth0 and user information
	 */
	handleRegister = async e => {
		e.preventDefault();
		console.log("AUTH0 SIGNUP: ", this.props.registeringUser);
		try {
			const newSignUp = {
				connection: "Username-Password-Authentication",
				email: this.state.email,
				password: this.state.password,
				given_name: this.state.first_name,
				family_name: this.state.last_name,
				phone: this.state.phone_nbr,
				name: `${this.state.first_name} ${this.state.last_name}`
			};

			await this.props.auth0SignUp(newSignUp);

			if (this.props.auth0User.headers["auth0-client"]) {
				this.setState({
					auth0_token: this.props.auth0User.headers["auth0-client"]
				});
				const newUser = {
					...this.state
				};
				await this.props.addUser(newUser);

				await this.props.auth.login({
					email: this.state.email,
					password: this.state.password
				});
			} else {
				console.log("DID NOT ADD TO DATABASE: ", this.props.error);
				return this.props.error;
			}
		} catch (err) {
			console.log(err);
			return this.props.error;
		}
	};

	/**
	 * Method to invoke new user registration
	 * using Google login
	 */
	handleGoogleRegistration = e => {
		this.props.auth.registerWithGoogle(e);
	};

	render() {
		return (
				<form>
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
						name="phone_nbr"
						value={this.state.phone_nbr}
						onChange={this.handleInput}
						placeholder="phone"
					/>
					<br />

					<button onClick={this.handleRegister}>Sign Up</button>
					<br />
					<button onClick={this.handleGoogleRegistration}>Google</button>
				</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		registeringUser: state.registerReducer.registeringUser,
		addingUser: state.registerReducer.addingUser,
		auth0User: state.registerReducer.auth0User,
		newUser: state.registerReducer.newUser,
		error: state.registerReducer.error,
		auth: state.authReducer.auth
	};
};

export default connect(
	mapStateToProps,
	{ auth0SignUp, addUser }
)(Register);
