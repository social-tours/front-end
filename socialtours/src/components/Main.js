import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import LandingPage from "../components/LandingPage";
import { userHasEvent } from "../utils";

import Dashboard from "../components/Dashboard";

class Main extends Component {
	render() {
		return (
			<>
				<SiteWrapper>
					{/* if authenticated and has at least one event */}
					{this.props.auth.isAuthenticated() &&
					userHasEvent(this.props.events) ? (
						<Dashboard user={2} />
					) : (
						<LandingPage />
					)}
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
		auth: state.authReducer.auth,
		events: state.eventReducer.events
	};
};

export default connect(
	mapStateToProps,
	null
)(Main);
