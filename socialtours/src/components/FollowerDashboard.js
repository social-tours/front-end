import React from "react";
import axios from "axios";
import styled from "styled-components";

class FollowerDashboard extends React.Component {
	state = {
		events: this.props.events
	};

	componentDidMount = () => {

	}

	render = () => {
		return (
			<div>
				<div className="events">

				</div>
				<div className="followed">

				</div>
			</div>
		)
	}

}

export default FollowerDashboard;
