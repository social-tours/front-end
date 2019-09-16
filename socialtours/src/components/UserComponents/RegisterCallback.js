import React, { Component } from "react";
import { connect } from "react-redux";

import { addUser } from "../../actions";

const LOGIN_SUCCESS_PAGE = "/";
//const LOGIN_FAILURE_PAGE = "/";

class RegisterCallback extends Component {
	/* eslint no-restricted-globals: 0 */
	componentDidMount() {
		console.log("RegisterCallback CDM props: ", this.props);
		this.props.auth.handleRegistration(this.props.addUser);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("CDU prevProps: ", prevProps);
		if (prevProps.newUser !== this.props.newUser) {
			location.pathname = LOGIN_SUCCESS_PAGE;
		}
	}

	render() {
		return <div>loading...</div>;
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
	{ addUser }
)(RegisterCallback);
