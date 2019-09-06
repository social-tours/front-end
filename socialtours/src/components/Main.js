import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Main extends Component {
	render() {
		return (
			<>
				{/* show logout button when logged in */}
				{this.props.auth.isAuthenticated() && (
					<button onClick={this.props.auth.logout}>logout</button>
				)}
				<p>
					<Link to="/protected">Protected page</Link>
				</p>
			</>
		);
	}
}
