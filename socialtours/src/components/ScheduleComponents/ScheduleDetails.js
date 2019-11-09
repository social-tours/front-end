import React, { Component } from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
import moment from "moment";
import Flatpickr from "react-flatpickr";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	EmailShareButton,
	// buttons above / icons below
	FacebookIcon,
	LinkedinIcon,
	TwitterIcon,
	EmailIcon
} from "react-share";

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
			delete updatedData.paid_event;
			console.log("SCHEDULE DATA TO UPDATE: ", updatedData);
			await this.props.updateSchedule(updatedData);
			await this.props.fetchEvents();
		} catch (err) {
			console.error(err);
		}
	};

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
									await this.props.fetchEvents();
									this.props.history.push(`/events/${this.props.event.id}`);
									onClose();
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
		document.title = "Schedule Informtion | Social Tours";
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

		const size = "2.5rem";
		const url = window.location.href;
		const subject =
			this.props.event.host_id === this.getUserId().id
				? `Join me at the upcoming "${title}" event`
				: `I'm attending the "${title}" event`;
		const hashtag = `#${title}`;
		const body = description;
		console.log("SHARED URL: ", url);

		return (
			<S.Container>
				{this.props.event.host_id === this.getUserId().id && (
					<header>
						<i className="far fa-edit" onClick={() => this.toggleEdit()}></i>
						<i
							className="fa fa-trash"
							onClick={() => this.handleDelete(id)}
						></i>
					</header>
				)}
				<S.Banner>
					<img src={this.props.event.event_image} alt="Event Image" />
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
						<S.EventDescription>{description}</S.EventDescription>
						<S.ScheduleDetailsWrapper>
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
						</S.ScheduleDetailsWrapper>
					</S.ScheduleSummary>
					<S.EventShareWrapper>
						<FacebookShareButton
							url={window.location.href}
							quote={subject}
							hashtag={hashtag}
						>
							<FacebookIcon size={size} />
						</FacebookShareButton>
						<TwitterShareButton url={url} title={subject} hashtag={hashtag}>
							<TwitterIcon size={size} />
						</TwitterShareButton>
						<LinkedinShareButton
							url={url} // this can be a public facing page in cavas#2 for followers to see
							title={subject}
							windowWidth={750}
							windowHeight={600}
						>
							<LinkedinIcon size={size} />
						</LinkedinShareButton>
						<EmailShareButton>
							<EmailIcon
								url={url}
								size={size}
								subject={subject}
								body={body}
								seperator={" "}
								openWindow={true}
							/>
						</EmailShareButton>
					</S.EventShareWrapper>
				</S.EventInfoWrapper>
				{!this.state.edit ? (
					!this.state.paid_event ? (
						<S.ScheduleButton primary>Register</S.ScheduleButton>
					) : (
						<S.ScheduleButton primary>Buy Tickets</S.ScheduleButton>
					)
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
