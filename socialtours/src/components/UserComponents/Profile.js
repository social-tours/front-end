import React, { Component } from "react";
import { connect } from "react-redux";

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

  /**
   * Method to pre-populate the form with user data
   * @returns user profile information
   */
  prePopulateForm = async id => {
    await this.props.fetchUser(id)
    if (this.props.user) {
      const { id, email, first_name, last_name, phone_nbr, type } = this.props.user
      this.setState({
        id,
        first_name,
        last_name,
        email,
        phone_nbr,
        type
      })
    }
  }

  handleUpdate = e => {
    e.preventDefault();
    this.props.updateUser(this.state.id, this.state)
  }



	render() {
		return (
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
					<S.FormButton onClick={this.handleUpdate} Update>
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
