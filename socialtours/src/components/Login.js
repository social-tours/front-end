import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";

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

	handleLogin = async e => {
		e.preventDefault();

		this.props.auth.login(this.state.credentials);

		this.props.login(this.state.credentials);
	};

	render() {
		return (
			<>
				<button onClick={this.props.auth.googleLogin}>
					Log in with Google
				</button>
				<p>or</p>
				{this.props.loginError && <p>Error on login, try again</p>}
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
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggingIn: state.authReducer.isLoggingIn,
		loginError: state.authReducer.loginError,
		auth: state.authReducer.auth
	};
};

export default connect(
	mapStateToProps,
	{ login }
)(Login);
