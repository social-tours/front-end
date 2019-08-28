import React, { Component } from "react";
import { connect } from "react-redux";

import Calendar from "react-calendar";

class EventCalendar extends Component {
	render() {
		return (
			<div data-testid="component-calendar">
				<Calendar />
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return state;
};

export default connect(
	mapStateToProps,
	null
)(EventCalendar);
