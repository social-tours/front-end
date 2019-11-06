import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import moment from "moment";
import Flatpickr from "react-flatpickr";

import * as S from "./ScheduleStyles";

class ScheduleDetails extends Component {
	state = {
		edit: false,
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

	handleUpdate = e => {
		e.preventDefault();
	};

	componentDidMount() {
		document.title = "Schedule Details | Social Tours";
	}

	render() {
		const {
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
								{moment(start_date_time).format("MMMM Do YYYY, h:mm:ss a")} -{" "}
								{moment(end_date_time).format("h:mm:ss a")}
							</p>
							<p>
								{!this.state.edit ? location :
									<input
									name="location"
									value={this.state.location}
									placeholder="location"
									onChange={this.handleInput}
									/>
								}
								- {!this.state.edit ? city :
									<input
										name="city"
										value={this.state.city}
										placeholder="city"
										onChange={this.handleInput}
									/>
								} {!this.state.edit ? postal_code : 
									<input
										name="postal_code"
										value={this.state.postal_code}
										placeholder="zip code"
										onChange={this.handleInput}
									/>
								}
							</p>
						</div>
					</S.ScheduleSummary>
				</S.EventInfoWrapper>
				<S.PayButton primary>Buy Tickets</S.PayButton>
			</S.Container>
		);
	}
}

export default ScheduleDetails;
