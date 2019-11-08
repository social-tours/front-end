import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import moment from "moment";
import Flatpickr from "react-flatpickr";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import ScheduleEvent from "../ScheduleComponents/ScheduleEvent";

import {
	fetchEvents,
	fetchEvent,
	putEvent,
	deleteEvent,
	addSchedule
} from "../../actions";
import * as S from "./EventComponentsStyles";

class EventItem extends Component {
	state = {
		edit: false,
		addSchedule: false,
		id: this.props.event.id,
		type: "",
		title: "",
		host_id: "",
		description: "",
		event_image: "",
		paid_event: false,
		price: "",
		schedule: []
	};

	getUserId() {
		if (localStorage.getItem("api_token")) {
			return jwtDecode(localStorage.getItem("api_token"));
		}
	}

	prePopulateForm = () => {
		const {
			type,
			title,
			host_id,
			description,
			event_image,
			paid_event,
			price,
			schedule
		} = this.props.event;

		this.setState({
			type,
			title,
			host_id,
			description,
			event_image,
			paid_event,
			price,
			schedule
		});
	};

  toggleEdit() {
		if (this.props.event.host_id === this.getUserId().id) {
			this.setState(
				prevState => ({ edit: !prevState.edit }),
				() => this.prePopulateForm()
			);
		} else console.log("Not authorized to perform function.");
	}

	toggleAddSchedule = e => {
		e.preventDefault()
		this.setState(
			prevState => ({ addSchedule: !prevState.addSchedule })
		);
		// if (this.props.event.host_id === this.getUserId().id) {
		// 	this.setState(
		// 		prevState => ({ addSchedule: !prevState.addSchedule }),
		// 		() => this.prePopulateForm()
		// 	);
		// } else console.log("Not authorized to perform function.");
	}

	handleInput = e => {
		e.preventDefault();
		console.log("handleInput: ", e.target.name, e.target.value)
		this.setState({ [e.target.name]: e.target.value });
	};

	handleCheckedInput = e => {
		e.preventDefault()
		this.setState(prevState => (
			{ paid_event: !prevState.paid_event }
		), () => console.log("paid_event: ", this.state.paid_event))
	}

	handleFetchEvent = async id => {
		try {
			await this.props.fetchEvent(id);
			this.setState({ schedule: this.props.schedule });
		} catch (err) {
			console.log("Fetch event: ", { message: err });
		}
	};

	handleEditEvent = async e => {
		e.preventDefault();
		try {
			const updatedData = this.state;
			console.log("EVENT DATA TO UPDATE: ", updatedData);
			await this.props.putEvent(updatedData);

			// reset form fields
			this.setState({
				edit: false,
				addSchedule: false,
				id: this.props.event.id,
				type: "",
				title: "",
				host_id: "",
				description: "",
				event_image: "",
				paid_event: false,
				price: "",
				schedule: []
			});
		} catch (err) {
			console.log("Fetch event: ", { message: err });
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

	// componentDidMount() {
	// 	// if (this.props.event.id) {
	// 	// 	this.handleFetchEvent(this.props.event.id);
	// 	// }
	// }

	render() {
		const {
			id,
			type,
			title,
			host_id,
			description,
			event_image,
			paid_event,
			price
		} = this.props.event;
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
				{!this.state.edit ? (
					<div>
					<S.Banner>
						<img src={event_image} alt="Event Image" />
					</S.Banner>
					<S.EventSummary>
						<S.EventTitle>{title}</S.EventTitle>
						<S.EventDescription>{description}</S.EventDescription>
					</S.EventSummary>
					</div>
				) : (
						<S.EventFormStyles>
							<form>
								<S.InputWrapper>
									<label>Event Type</label>
									<S.EventInput
										name="type"
										placeholder={this.state.type}
										onChange={this.handleInput}
										value={this.state.type}
										type="number"
									/>
								</S.InputWrapper>
								<S.InputWrapper>
									<label>Title</label>
									<S.EventInput
										name="title"
										placeholder={this.props.title}
										onChange={this.handleInput}
										value={this.state.title}
									/>
								</S.InputWrapper>
								<S.InputWrapper>
									<label>Host ID</label>
									<S.EventInput
										name="host_id"
										placeholder="host_id"
										onChange={this.handleInput}
										value={this.state.host_id}
										type="number"
									/>
								</S.InputWrapper>
								<S.InputWrapper>
									<label>Description</label>
									<S.EventInput
										name="description"
										placeholder="description"
										onChange={this.handleInput}
										value={this.state.description}
									/>
								</S.InputWrapper>
								<S.InputWrapper>
									<label>Event Image</label>
									<S.EventInput
										name="event_image"
										placeholder="event image url"
										onChange={this.handleInput}
										value={this.state.event_image}
									/>
								</S.InputWrapper>
								<S.InputWrapper>
									<label>Paid Event</label>
									<S.EventInput
										name="paid_event"
										placeholder="paid event"
										onChange={this.handleCheckedInput}
										value={this.state.paid_event}
										type="checkbox"
									/>
								</S.InputWrapper>
								<S.InputWrapper>
									<label>Price</label>
									<S.EventInput
										name="price"
										placeholder="price"
										onChange={this.handleInput}
										value={this.state.price}
										type="number"
									/>
								</S.InputWrapper>
								<S.UpdateButton update onClick={this.handleUpdate}>
										Save Changes
								</S.UpdateButton>
							</form>
						</S.EventFormStyles>	
				)}

				{/* {this.state.edit ? (
					<S.UpdateButton update onClick={this.handleUpdate}>
						Save Changes
					</S.UpdateButton>
				) : (
					""
				)} */}
				{this.props.event.host_id === this.getUserId().id && (
					<S.ScheduleButton onClick={e => this.toggleAddSchedule(e)}>+ Schedule Event</S.ScheduleButton>
				)}
				{this.state.addSchedule && (
					<ScheduleEvent
						title={title}
						description={description}
						event_id={id}
						host_id={host_id}
						toggleAddSchedule={this.toggleAddSchedule}
					/>
				)}
				{this.props.event.schedule &&
					this.props.event.schedule.length > 0 &&
					this.props.event.schedule.map(schd => {
						let date = new Date(schd.start_date_time);
						return (
							<Link to={`/events/${schd.event_id}/schedules/${schd.id}`}>
								<S.SchedulePreview key={schd.id}>
									<S.EventDate>
										<p className="event-day">{moment(date).format("ddd")}</p>
										<p className="event-date">
											{moment(date).format("MMM Do")}
										</p>
									</S.EventDate>
									<S.LocationInfo>
										<p className="location">{`${schd.location}, ${schd.city}, ${schd.country}`}</p>
										<p className="start-time">
											{moment(date).format("h:mm:ss a")}
										</p>
									</S.LocationInfo>
								</S.SchedulePreview>
							</Link>
						);
					})}
			</S.Container>
		);
	}
}

const mapStateToProps = state => {
	return {
		schedule: state.eventReducer.event.schedule
	};
};

export default connect(
	mapStateToProps,
	{ fetchEvents, fetchEvent, putEvent, deleteEvent, addSchedule }
)(EventItem);
