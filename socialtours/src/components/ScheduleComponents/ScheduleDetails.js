import React, { Component } from "react";
import moment from "moment";

import * as S from "./ScheduleStyles";

class ScheduleDetails extends Component {
	componentDidMount() {
		document.title = "Schedule Details | Social Tours";
	}

	render() {
		console.log("Schedule Details render: ", this.props.schedule);
		const {
			title,
			description,
			start_date_time,
			location,
			city,
			postal_code,
			country
		} = this.props.schedule;
		return (
			<S.Container>
				<p>{title}</p>
				<p>{description}</p>
				<p>{moment(start_date_time).format("MMMM Do YYYY, h:mm:ss a")}</p>
				<p>{location}</p>
				<p>{city}</p>
				<p>{postal_code}</p>
				<p>{country}</p>
				<button>Buy Tickets</button>
			</S.Container>
		);
	}
}

export default ScheduleDetails;
