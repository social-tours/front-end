import React, { Component } from "react";
import moment from "moment";

import * as S from "./ScheduleStyles";

class ScheduleDetails extends Component {

  componentDidMount() {
    document.title = "Schedule Details | Social Tours"
  }

  render() {
		const {
			title,
			description,
			start_date_time,
			location,
			city
		} = this.props.schedule;
		return (
			<S.Container>
				<S.Banner>
					<img src={this.props.event.event_image} />
					</S.Banner>
				<S.EventInfoWrapper>
					<S.EventSummary>
						<S.EventDate>
							<p className="event-month">{moment(start_date_time).format("MMM")}</p>
							<p className="event-date">{moment(start_date_time).format("Do")}</p>
						</S.EventDate>
						<S.EventTitle>
							{title}
						</S.EventTitle>
					</S.EventSummary>
					<S.ScheduleSummary>
						<p className="event-description">{description}</p>
						<div className="event-details">
							<p>{moment(start_date_time).format("MMMM Do YYYY, h:mm:ss a")}</p>
							<p>{location} - {city}</p>
						</div>
					</S.ScheduleSummary>
				</S.EventInfoWrapper>
				<S.PayButton primary>Buy Tickets</S.PayButton>
			</S.Container>
		);
	}
}

export default ScheduleDetails;
