import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import Calendar from "react-calendar";
import { getAllSchedules } from "../actions/scheduleActions";
import { colors } from "./DesignComponents/theme";

const EventCalendar = props => {
	let [schedules, setSchedules] = useState([]);

	useEffect(() => {
		//console.log("In schedules useEffect");
		let updatedSchedules = [...schedules];

		props.events.forEach(event => {
			if (event.schedules && event.schedules.length > 0)
				updatedSchedules.push(...event.schedules);
		});

		if (updatedSchedules != schedules) setSchedules(updatedSchedules);

		console.log("the value of schedules is", schedules);
	}, [schedules]);

	/**
	 * Called by the calendar tile and passed the calendar tile as
	 * an object that contains the corresponding date of the tile.
	 * Checks to see if the date matches a date in the schedules
	 * data and returns true if so
	 * @param e
	 * @returns {boolean}
	 */
	const checkSchedule = date => {
		let dates;

		if (schedules.length === 0) return;
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
		if (schedules && schedules.length > 0) {
			dates = schedules.filter(schedule => {
				//console.log(schedule);
				return schedule.start_date_time.includes(`${sYear}-${sMonth}-${sDay}`);
			});
		}

		return dates || null;
	};

	const isDisabled = e => {
		//const dates = checkSchedule(e.date.toString());
		//return dates.length === 0;
	};

	const handleClick = date => {
		//const dates = checkSchedule(date.toString());

		props.history.push("ManageEvents");
		//console.log(dates);
	};

	return (
		<div data-testid="component-calendar">
			{schedules.length > 0 && (
				<CalendarWrapper>
					<Calendar
						tileClassName={e =>
							isDisabled(e) ? "disabled calTile" : "calTile"
						}
						tileDisabled={e => isDisabled(e)}
						onClickDay={e => handleClick(e)}
					/>
				</CalendarWrapper>
			)}
		</div>
	);
};

const mapStateToProps = ({ eventReducer }) => {
	return {
		events: eventReducer.events
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ getAllSchedules }
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
			color: darkslategrey;
		}

		.react-calendar__navigation,
		.react-calendar__month-view__weekdays {
			background-color: ${colors.mint};
		}
	}
`;
