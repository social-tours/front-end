import React, { Component } from "react";
import Flatpickr from "react-flatpickr";
import styled from "styled-components";
import Loader from "react-loader";
import { connect } from "react-redux";

import "../../../node_modules/flatpickr/dist/themes/light.css";
import EventFormStyles from "./EventFormStyles";
import { addSchedule } from "../../actions";

class ScheduleEvent extends Component {
	state = {
		location: "",
		city: "",
		postal_code: "",
		country: "",
		capacity: null,
		title: this.props.title || "",
		description: this.props.description || "",
		event_id: this.props.event_id || null,
		start_date_time: new Date(),
		end_date_time: new Date()
	};

	handleDateChange = date => {
		//console.log(start_date_time);
		date = date[0];
		this.setState({
			start_date_time: date,
			end_date_time: date
		});
	};

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
		console.log(e);
		e.preventDefault();
		let {
			title,
			description,
			location,
			start_date_time,
			end_date_time,
			capacity,
			city,
			postal_code,
			country,
			event_id
		} = this.state;

		start_date_time = start_date_time.toUTCString();
		end_date_time = end_date_time.toUTCString();

		this.props.addSchedule({
			title,
			description,
			location,
			start_date_time,
			end_date_time,
			capacity,
			city,
			country,
			event_id,
			postal_code
		});

		this.setState({
			location: "",
			city: "",
			postal_code: "",
			country: "",
			capacity: null,
			title: this.props.title || "",
			description: this.props.description || "",
			event_id: this.props.event_id || null,
			start_date_time: new Date(),
			end_date_time: new Date()
		});
	};

	render() {
		if (this.state.event_id === "") return <Loader />;
		else
			return (
				<EventFormStyles>
					<ScheduleWrapper>
						<h2> Add schedule </h2>
						<form onSubmit={this.handleSubmit}>
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
								value={this.state.postal_code}
								placeholder="Postal"
								onChange={e => this.setState({ postal_code: e.target.value })}
							/>
							<input
								value={this.state.capacity}
								placeholder="Capacity"
								onChange={e => this.setState({ capacity: e.target.value })}
							/>
							<input
								value={this.state.country}
								placeholder="Country"
								onChange={e => this.setState({ country: e.target.value })}
							/>
							<PickerGroup>
								<label>Date</label>
								<Flatpickr
									data-enable-time
									onChange={date => this.handleDateChange(date)}
									value={this.state.start_date_time}
									options={{
										altInput: true,
										altFormat: "F j, Y h:i K",
										dateFormat: "Y-m-d h:i K"
									}}
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
