import React, { Component } from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
import moment from "moment";
import Flatpickr from "react-flatpickr";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { updateSchedule, deleteSchedule, fetchEvents } from "../../actions";
import * as S from "./ScheduleStyles";

class ScheduleDetails extends Component {
	state = {
		edit: false,
		paid_event: this.props.event.paid_event,
		id: this.props.schedule.id,
		title: "",
		description: "",
		start_date_time: new Date(),
		end_date_time: new Date(),
		location: "",
		city: "",
		postal_code: ""
	};

	getUserId() {
		if (localStorage.getItem("api_token")) {
			return jwtDecode(localStorage.getItem("api_token"));
		}
	}

	prePopulateForm = () => {
		const {
			title,
			description,
			start_date_time,
			end_date_time,
			location,
			city,
			postal_code
		} = this.props.schedule;

		this.setState({
			title,
			description,
			start_date_time,
			end_date_time,
			location,
			city,
			postal_code
		});
	};

	toggleEdit() {
		if (this.props.event.host_id === this.getUserId().id) {
			this.setState(
				prevState => ({ edit: !prevState.edit }),
				() => this.prePopulateForm()
			);
		} else console.log("Not authorized to edit.");
	}

	handleInput = e => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};

	handleUpdate = async e => {
		e.preventDefault();
		try {
			const updatedData = this.state;
			delete updatedData.edit;
			console.log("SCHEDULE DATA TO UPDATE: ", updatedData);
			await this.props.updateSchedule(updatedData);
			await this.props.fetchEvents();
		} catch (err) {
			console.error(err);
		}
	};

	// handleDelete = id => {
	// 	confirmAlert({
	// 		title: "Confirm to delete",
	// 		buttons: [
	// 			{
	// 				label: "Delete",
	// 				onClick: async () => {
	// 					await this.props.deleteSchedule(id)
	// 					this.props.history.push(`/events/${this.props.event.id}`)
	// 				}
	// 			},
	// 			{
	// 				label: "Cancel"
	// 			}
	// 		]
	// 	});
	// };

	handleDelete = id => {
		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<S.ConfirmAlertWrapper>
						<h1>Confirm delete</h1>
						<S.ButtonMenu>
							<button
								onClick={async () => {
									await this.props.deleteSchedule(id);
									this.props.history.push(`/events/${this.props.event.id}`);
								}}
							>
								Delete
							</button>
							<button onClick={onClose}>Cancel</button>
						</S.ButtonMenu>
					</S.ConfirmAlertWrapper>
				);
			}
		});
	};
	componentDidMount() {
		document.title = "Schedule Details | Social Tours";
	}

	render() {
		const {
			id,
			title,
			description,
			start_date_time,
			end_date_time,
			location,
			city,
			postal_code
		} = this.props.schedule;

		return (
			<S.Container>
				{this.props.event.host_id === this.getUserId().id && (
					<header>
						<i className="far fa-edit" onClick={() => this.toggleEdit()}></i>
						<i className="fa fa-trash" onClick={() => this.handleDelete()}></i>
					</header>
				)}
				<S.Banner>
					<img src={this.props.event.event_image} />
				</S.Banner>
				<S.EventInfoWrapper>
					<S.EventSummary>
						<S.EventDate>
							<p className="event-month">
								{moment(start_date_time).format("MMM")}
							</p>
							<p className="event-date">
								{moment(start_date_time).format("Do")}
							</p>
						</S.EventDate>
						<S.EventTitle>{title}</S.EventTitle>
					</S.EventSummary>
					<S.ScheduleSummary>
						<p className="event-description">{description}</p>
						<div className="event-details">
							<p>
								{!this.state.edit ? (
									moment(start_date_time).format("MMMM Do YYYY, h:mm:ss a")
								) : (
									<Flatpickr
										data-enable-time
										name="start_date_time"
										onChange={date => this.setState({ start_date_time: date })}
										value={this.state.start_date_time}
										options={{
											altInput: true,
											altFormat: "F j, Y h:i K",
											dateFormat: "Y-m-d h:i K"
										}}
									/>
								)}{" "}
								-{" "}
								{!this.state.edit ? (
									moment(end_date_time).format("h:mm:ss a")
								) : (
									<Flatpickr
										data-enable-time
										name="end_date_time"
										onChange={date => this.setState({ end_date_time: date })}
										value={this.state.end_date_time}
										options={{
											altInput: true,
											altFormat: "F j, Y h:i K",
											dateFormat: "Y-m-d h:i K"
										}}
									/>
								)}
							</p>
							<p>
								{!this.state.edit ? (
									location
								) : (
									<input
										name="location"
										value={this.state.location}
										placeholder="location"
										onChange={this.handleInput}
									/>
								)}
								-{" "}
								{!this.state.edit ? (
									city
								) : (
									<input
										name="city"
										value={this.state.city}
										placeholder="city"
										onChange={this.handleInput}
									/>
								)}{" "}
								{!this.state.edit ? (
									postal_code
								) : (
									<input
										name="postal_code"
										value={this.state.postal_code}
										placeholder="zip code"
										onChange={this.handleInput}
									/>
								)}
							</p>
						</div>
					</S.ScheduleSummary>
				</S.EventInfoWrapper>
				{!this.state.edit ? (
					!this.state.paid_event ? (
						<S.ScheduleButton primary>Register</S.ScheduleButton>
					) : <S.ScheduleButton primary>Buy Tickets</S.ScheduleButton>
				) : (
					<S.UpdateButton update onClick={this.handleUpdate}>
						Save Changes
					</S.UpdateButton>
				)}
			</S.Container>
		);
	}
}

export default connect(
	null,
	{ updateSchedule, deleteSchedule, fetchEvents }
)(ScheduleDetails);
