import React, { Component } from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";

import { fetchUser, updateUser, deleteUser } from "../../actions";

import * as S from "./FormStyles";
class Profile extends Component {
	state = {
		id: null,
		email: "",
		first_name: "",
		last_name: "",
		password: "",
		phone_nbr: "",
		type: ""
	};

	/**
	 * Method to handle form input
	 * @returns new local state with form data
	 */
	handleInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	getUserId() {
		if (localStorage.getItem("api_token")) {
			return jwtDecode(localStorage.getItem("api_token"));
		}
	}

	/**
	 * Method to pre-populate the form with user data
	 * @returns user profile information
	 */
	prePopulateForm = async id => {
		await this.props.fetchUser(id);
		if (this.props.user) {
			const {
				id,
				email,
				first_name,
				last_name,
				phone_nbr,
				password,
				type
			} = this.props.user;
			this.setState({
				id,
				first_name,
				last_name,
				email,
				phone_nbr,
				password,
				type
			});
		}
	};

	/**
	 * Method to update user data
	 * @returns updated user information in props
	 */
	handleUpdate = e => {
		e.preventDefault();
		this.props.updateUser(this.state.id, this.state);
	};

	componentDidMount() {
		this.getUserId();
		console.log("CDM getUserID: ", this.getUserId());
		if (this.getUserId()) {
			this.prePopulateForm(this.getUserId().id);
		}
	}

	render() {
		return (
			<S.FormContainer>
				<form>
					<p>User Profile</p>
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

					<p>Select a communication preference<p/>
					<input
						type="radio"
						name="email"
						value={this.state.email}
						onChange={this.handleInput}
					/>
					<label htmlFor="email">Email</label>

					<input
						type="radio"
						name="sms"
						value={this.state.password}
						onChange={this.handleInput}
					/>
					<label htmlFor="sms">Text Messages</label>

					<input
						type="radio"
						name="both"
						value={this.state.password}
						onChange={this.handleInput}
					/>
					<label htmlFor="both">Both please!</label>

					<input
						type="radio"
						name="none"
						value={this.state.password}
						onChange={this.handleInput}
					/>
					<label htmlFor="none">Don't tell me about any upcoming events for anyone I follow</label>

					<S.FormButton onClick={this.handleUpdate} update>
						Save Changes
					</S.FormButton>
				</form>
			</S.FormContainer>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.userReducer.user,
		error: state.userReducer.error,
		auth: state.authReducer.auth
	};
};

export default connect(
	mapStateToProps,
	{ fetchUser, updateUser, deleteUser }
)(Profile);
