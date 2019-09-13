import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LandingPage from "../components/LandingPage";

import Navigation from "../components/Navigation";
import Dashboard from "../components/Dashboard";

export default class Main extends Component {
	render() {
		return (
			<>
				{/* show logout button when logged in */}
				{/*{this.props.auth.isAuthenticated() && (*/}
				{/*	<button onClick={this.props.auth.logout}>logout</button>*/}
				{/*)}*/}
				{/*<p>*/}
				{/*	<Link to="/protected">Protected page</Link>*/}
				{/*</p>*/}
				<SiteWrapper>
					<Navigation />
					{/*<Dashboard />*/}
					<LandingPage />
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
