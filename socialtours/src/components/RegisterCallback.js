import React, { Component } from "react";

export default class RegisterCallback extends Component {
	componentDidMount() {
		this.props.auth.handleAuthentication("/register");
	}

	render() {
		return <div>loading...</div>;
	}
}
