import React, { Component } from "react";
import DatePicker from "react-date-picker";
import ReactTimePicker from "react-time-picker";

class ScheduleEvent extends Component {
	state = {
		location: "",
		date: "",
		start_time: "",
		end_time: ""
	};

	handleDateChange = date => this.setState({ date });
	handleStartTimeChange = start_time => this.setState({ start_time });
	handleEndTimeChange = end_time => this.setState({ end_time });

	render() {
		return (
			<div>
				<input
					value={this.state.location}
					onChange={e => this.setState({ location: e.target.value })}
				/>
				<DatePicker
					id="datePicker"
					onChange={this.handleDateChange}
					value={this.state.date}
				/>
				<ReactTimePicker
					value={this.state.start_time}
					onChange={this.handleStartTimeChange}
					id="startTimePicker"
				/>
				<ReactTimePicker
					id="endTimePicker"
					value={this.state.end_time}
					onChange={this.handleEndTimeChange}
				/>
				<button>Add Schedule</button>
			</div>
		);
	}
}

export default ScheduleEvent;
