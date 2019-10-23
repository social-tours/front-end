import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import LandingPage from "../components/LandingPage";
import { userHasEvent } from "../utils";
import FollowerDashboard from "./FollowerDashboard";
import Dashboard from "../components/Dashboard";

class Main extends Component {
	render() {
		let component;

		// if authenticated and has at least one event
		if (this.props.auth.isAuthenticated() && userHasEvent(this.props.events)) {
			component = <Dashboard user={2} />;
		} else if (this.props.auth.isAuthenticated()) {
			component = <FollowerDashboard />;
		} else {
			component = <LandingPage />;
		}

		return (
			<>
				<SiteWrapper>{component}</SiteWrapper>
			</>
		);
	}
}

const SiteWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #ffffff;
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
