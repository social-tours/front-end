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
		type: "",
		comm_preference: ""
	};

	/**
	 * Method to handle form input
	 * @returns new local state with form data
	 */
	handleInput = e => {
		this.setState({ [e.target.name]: e.target.value }, () => {
			console.log("first_name",this.state.first_name)
			console.log("last_name",this.state.last_name)
			console.log("phone_nbr",this.state.phone_nbr)
			console.log("PREFERENCE",this.state.comm_preference)
		});
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
				type,
				comm_preference
			} = this.props.user;
			this.setState({
				id,
				first_name,
				last_name,
				email,
				phone_nbr,
				password,
				type,
				comm_preference
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

					<div className="radio">

						<p>Select a communication preference: </p>
						<label>
							<input
								type="radio"
								name="comm_preference"
								value="0"
								checked={this.state.comm_preference === "0"}
								onChange={this.handleInput}
							/>
							Email
						</label>

						<label>
							<input
								type="radio"
								name="comm_preference"
								value="1"
								checked={this.state.comm_preference === "1"}
								onChange={this.handleInput}
							/>
							Text Message
						</label>

						<label>
							<input
								type="radio"
								name="comm_preference"
								value="2"
								checked={this.state.comm_preference === "2"}
								onChange={this.handleInput}
							/>
							Both
						</label>

						<label>
							<input
								type="radio"
								name="comm_preference"
								value="3"
								checked={this.state.comm_preference === "3"}
								onChange={this.handleInput}
							/>
							No Notifications
						</label>
						</div>

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
