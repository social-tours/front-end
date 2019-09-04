import React, { Component } from "react";
import { connect } from "react-redux";

import Calendar from "react-calendar";
import { getSchedules } from "../actions/schedules";

class EventCalendar extends Component {
	state = {};
	componentDidMount() {
		console.log("CDM");
		this.props.getSchedules();
	}

	render() {
		return (
			<div data-testid="component-calendar">
				<Calendar />
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("eventCalendar, mstp", state);
	return state;
};

export default connect(
	mapStateToProps,
	{ getSchedules }
)(EventCalendar);
