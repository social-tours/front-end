import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import Calendar from "react-calendar";
import { getSchedules } from "../actions/schedules";
import { colors } from "./DesignComponents/theme";

class EventCalendar extends Component {
	state = {
		schedules: [],
		disabled: false
	};
	componentDidMount() {
		this.props.getSchedules();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.schedules.length === 0) return;
		if (
			prevState.schedules.length > 0 &&
			prevState.schedules === this.props.schedules
		)
			return;

		this.setState({ schedules: this.props.schedules });
	}

	/**
	 * Called by the calendar tile and passed the calendar tile as
	 * an object that contains the corresponding date of the tile.
	 * Checks to see if the date matches a date in the schedules
	 * data and returns true if so
	 * @param e
	 * @returns {boolean}
	 */
	checkSchedule(date) {
		if (this.props.schedules.length === 0) return;
		// Month abbreviations and corresponding number as string
		let months = {
			Jan: "01",
			Feb: "02",
			Mar: "03",
			Apr: "04",
			May: "05",
			Jun: "06",
			Jul: "07",
			Aug: "08",
			Sep: "09",
			Oct: "10",
			Nov: "11",
			Dec: "12"
		};
		// Pull the month, day and year from the e.date object
		let dateData = date.match(
			/(?:\S+) (?<sMonth>\S+) (?<sDay>\S+) (?<sYear>\S+)/
		);

		// Assign the month, day, and year strings to variables
		let { sMonth, sDay, sYear } = dateData.groups;

		// convert the string month to a number
		sMonth = months[sMonth];

		// check for any schedules that match the date
		let dates = this.state.schedules.filter(schedule => {
			//console.log(schedule);
			return schedule.start_date_time.includes(`${sYear}-${sMonth}-${sDay}`);
		});
		return dates;
	}

	isDisabled(e) {
		const dates = this.checkSchedule(e.date.toString());

		return dates.length === 0;
	}

	handleClick(date) {
		const dates = this.checkSchedule(date.toString());

		this.props.history.push("ManageEvents");
		//console.log(dates);
	}

	render() {
		return (
			<div data-testid="component-calendar">
				{this.props.schedules.length > 0 && (
					<CalendarWrapper>
						<Calendar
							tileClassName={e =>
								this.isDisabled(e) ? "disabled calTile" : "calTile"
							}
							tileDisabled={e => this.isDisabled(e)}
							onClickDay={e => this.handleClick(e)}
						/>
					</CalendarWrapper>
				)}
			</div>
		);
	}
}

const mapStateToProps = ({ scheduleReducer }) => {
	return scheduleReducer;
};

export default withRouter(
	connect(
		mapStateToProps,
		{ getSchedules }
	)(EventCalendar)
);

const CalendarWrapper = styled.div`
	border-radius: 10px;
	.react-calendar {
		border-radius: 10px;
		background-color: ${colors.mint};
		.calTile {
			background-color: ${colors.mint};
			color: black;
		}

		.disabled {
			background-color: ${colors.putty};
			color: dimgrey;
		}

		.react-calendar__navigation,
		.react-calendar__month-view__weekdays {
			background-color: ${colors.mint};
		}
	}
`;
