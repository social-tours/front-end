import React, { Component } from "react";
import { connect } from "react-redux";

import Auth from "../../Auth";
import { login } from "../../actions";

const LOGIN_SUCCESS_PAGE = "/";

class Callback extends Component {
	/* eslint no-restricted-globals: 0 */
	componentDidMount() {
		const auth = new Auth();
		auth.handleAuthentication(this.props.login);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("CDU nextProps: ", prevProps)
		if (prevProps.auth.isLoggedIn !== this.props.auth.isLoggedIn) {
			location.pathname = LOGIN_SUCCESS_PAGE;
		}
	}

	render() {
		return <div>loading...</div>;
	}
}

const mapStateToProps = state => {
	return {
		auth: state.authReducer
	};
};

export default connect(
	mapStateToProps,
	{ login }
)(Callback);
