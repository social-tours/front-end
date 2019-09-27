import React, { Component } from "react";
import { connect } from "react-redux";

import { auth0SignUp, addUser } from "../../actions";

import * as S from "./FormStyles";
class Register extends Component {
	state = {
		email: "",
		first_name: "",
		last_name: "",
		password: "",
		phone_nbr: "",
		type: 1,
		auth0_token: "",
		comm_preference: ""
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
				name: `${this.state.first_name} ${this.state.last_name}`,
				comm_preference: this.state.comm_preference
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
			<>
				<S.FormContainer>
					<form>
						<p>Register</p>
						<input
							name="first_name"
							value={this.state.first_name}
							onChange={this.handleInput}
							placeholder="First Name"
							required
						/>
						<input
							name="last_name"
							value={this.state.last_name}
							onChange={this.handleInput}
							placeholder="Last Name"
							required
						/>
						<input
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.handleInput}
							placeholder="Email"
							required
						/>
						<input
							type="tel"
							name="phone_nbr"
							value={this.state.phone_nbr}
							onChange={this.handleInput}
							placeholder="Phone Number"
						/>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleInput}
							placeholder="Password"
						/>
						<label htmlFor="password">Minimum length is 8 characters</label>

						<div class="radio">

						<p>Select a communication preference: </p>
						<label>
							<input
								type="radio"
								name="comm_preference"
								value="emails"
								checked={this.state.comm_preference === "emails"}
								onChange={this.handleInput}
							/>
							Email
						</label>

						<label>
							<input
								type="radio"
								name="comm_preference"
								value="sms"
								checked={this.state.comm_preference === "sms"}
								onChange={this.handleInput}
							/>
							Text Message
						</label>

						<label>
							<input
								type="radio"
								name="comm_preference"
								value="both"
								checked={this.state.comm_preference === "both"}
								onChange={this.handleInput}
							/>
							Both
						</label>

						<label>
							<input
								type="radio"
								name="comm_preference"
								value="none"
								checked={this.state.comm_preference === "none"}
								onChange={this.handleInput}
							/>
							No Notifications
						</label>
						</div>

						<S.FormButton onClick={this.handleRegister} add>
							Sign Up
						</S.FormButton>
					</form>
				</S.FormContainer>
				<S.TextContainer>
					<p>or</p>
				</S.TextContainer>
				<S.FormContainer something>
					<form>
						<S.FormButton
							onClick={this.handleGoogleRegistration}
							transparent
							socialIcon
						>
							<div>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
									alt="Google Logo"
									className="socialIcon"
								/>
							</div>
							<div>Sign up with Google</div>
						</S.FormButton>
					</form>
				</S.FormContainer>
			</>
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
