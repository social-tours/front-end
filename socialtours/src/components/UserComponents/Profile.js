import React, { Component } from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";

import { fetchUser, updateUser, deleteUser } from "../../actions";

import * as S from "./FormStyles";
class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: null,
			email: "",
			first_name: "",
			last_name: "",
			password: "",
			phone_nbr: "",
			type: "",
			isUpdated: false
		};

		this.buttonDOM = React.createRef()
	}

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
		const {
			id,
			email,
			first_name,
			last_name,
			phone_nbr,
			password,
			type
		} = this.state;

		const updatedData = {
			id,
			first_name,
			last_name,
			email,
			phone_nbr,
			password,
			type
		};
		this.props.updateUser(this.state.id, updatedData);
		this.buttonDOM.current.blur()
	};

	componentDidMount() {
		this.getUserId();
		console.log("CDM getUserID: ", this.getUserId());
		console.log("CDM this.props.user", this.props.user);
		if (this.getUserId()) {
			this.prePopulateForm(this.getUserId().id);
			console.log("CDM this.props.user AFTER prepopulate: ", this.props.user);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		//console.log("CDU this.props.user", this.props.user);
		if (prevProps.user && prevProps.user !== this.props.user) {
			console.log("CDU prevProps.user", prevProps.user);
			console.log("CDU this.props.user has changed", this.props.user);
			this.setState({ isUpdated: true });
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
					<S.FormButton onClick={this.handleUpdate} ref={this.buttonDOM} update> 
						Save Changes
					</S.FormButton>
					{this.state.isUpdated && (
						<S.MessageContainer>User settings updated</S.MessageContainer>
					)}
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
