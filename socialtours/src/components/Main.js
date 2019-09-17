import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import LandingPage from "../components/LandingPage";

import Dashboard from "../components/Dashboard";

class Main extends Component {
	render() {
		return (
			<>
				<SiteWrapper>
					{this.props.auth.isAuthenticated() ? <Dashboard user={1} /> : <LandingPage />}
				</SiteWrapper>
			</>
		);
	}
}

const SiteWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #011638;
`;

const mapStateToProps = state => {
	return {
		auth: state.authReducer.auth
	};
};

export default connect(
	mapStateToProps,
	null
)(Main);
