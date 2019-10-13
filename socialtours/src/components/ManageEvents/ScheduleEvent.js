import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import Loader from "react-loader";
import { connect } from "react-redux";

import EventFormStyles from "./EventFormStyles";
import { addSchedule } from "../../actions";

class ScheduleEvent extends Component {
	state = {
		location: "",
		city: "",
		postal: "",
		country: "",
		title: this.props.title || "",
		description: this.props.description || "",
		event_id: this.props.event_id || null,
		host_id: this.props.host_id || null,
		date: "",
		start_time: "",
		end_time: ""
	};

	handleDateChange = date => {
		console.log(date);
		this.setState({ date });
	};
	handleStartTimeChange = start_time => this.setState({ start_time });
	handleEndTimeChange = end_time => this.setState({ end_time });

	componentDidUpdate(prevProps) {
		if (prevProps.event_id != this.props.event_id) {
			this.setState({
				title: this.props.title,
				description: this.props.description,
				event_id: this.props.event_id,
				host_id: this.props.host_id
			});
		}
	}

	handleSubmit = e => {
		e.preventDefault();
		const {
			title,
			description,
			location,
			start_time,
			date,
			city,
			postal,
			country,
			event_id,
			host_id
		} = this.state;

		this.props.addSchedule({
			title,
			description,
			location,
			start_time,
			date,
			city,
			country,
			event_id,
			host_id,
			postal
		});
	};

	render() {
		if (this.state.event_id === "") return <Loader />;
		else
			return (
				<EventFormStyles>
					<ScheduleWrapper>
						<h2> Add schedule </h2>
						<form onClick={this.handleSubmit}>
							<input
								value={this.state.title}
								placeholder="Title"
								onChange={e => this.setState({ title: e.target.value })}
							/>
							<input
								value={this.state.description}
								placeholder="Description"
								onChange={e => this.setState({ description: e.target.value })}
							/>
							<input
								value={this.state.location}
								placeholder="Location"
								onChange={e => this.setState({ location: e.target.value })}
							/>
							<input
								value={this.state.city}
								placeholder="City"
								onChange={e => this.setState({ city: e.target.value })}
							/>
							<input
								value={this.state.postal}
								placeholder="Postal"
								onChange={e => this.setState({ postal: e.target.value })}
							/>
							<input
								value={this.state.country}
								placeholder="Country"
								onChange={e => this.setState({ country: e.target.value })}
							/>
							<PickerGroup>
								<label>Date</label>
								<DatePicker
									id="datePicker"
									selected={this.state.date}
									onChange={this.handleDateChange}
									value={this.state.date}
									showTimeSelect
									timeIntervals={15}
									timeCaption="time"
									dateFormat="MMMM d, yyyy h:mm aa"
								/>
							</PickerGroup>
							<button>Add Schedule</button>
						</form>
					</ScheduleWrapper>
				</EventFormStyles>
			);
	}
}

export default connect(
	null,
	{ addSchedule }
)(ScheduleEvent);

const ScheduleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 100%;
	border: 2px solid black;
	box-shadow: #282c34 2px 2px 2px;
	padding: 10px 0;
	input,
	button {
		align-self: center;
	}

	input {
		margin: 10px;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: bold;
		align-self: center;
		margin-bottom: 25px;
	}
`;

const PickerGroup = styled.div`
	display: flex;
	flex-direction: row;
	//flex-wrap: nowrap;
	justify-content: center;
	width: 100%;
	margin: 10px;
	align-self: center;
	align-content: center;
	label {
		font-weight: bolder;
		align-self: center;
		align-content: center;
	}
`;
