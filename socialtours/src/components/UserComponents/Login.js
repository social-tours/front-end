import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions";

import * as S from "./FormStyles";

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
				{this.props.loginError && <p>Error on login, try again</p>}
				<S.FormContainer>
					<form onSubmit={this.handleLogin}>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={this.state.credentials.email}
							onChange={this.handleChange}
						/>
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={this.state.credentials.password}
							onChange={this.handleChange}
						/>
						<S.FormButton primary>Log in</S.FormButton>
					</form>
				</S.FormContainer>
				<S.TextContainer>
					<p>or</p>
				</S.TextContainer>
				<S.FormContainer>
					<form>
						<S.FormButton
							onClick={this.props.auth.googleLogin}
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
							<div>Login with Google</div>
						</S.FormButton>
					</form>
				</S.FormContainer>
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
