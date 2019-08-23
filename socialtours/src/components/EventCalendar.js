import React, { Component } from "react";

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

export default EventCalendar;
