import React, { Component } from "react";
import { connect } from "react-redux";
import EventCard from "./EventCard";

import { getSchedules } from "../../actions/schedules";

// TODO: if someone clicks on an event in the dashboard calendar, enable them to edit/delete if this is their event. If not, only show details. Perhaps this could be for Canvas#2 when we focus on 'Followers' while Canvas#1 is for "Influencers"

class ManageEvents extends Component {
	componentDidMount() {
		this.props.getSchedules();
		// console.log("Manage THIS", this.props.getEvents());
	}

	render() {
		return (
			<>
				<p>Mangage Events</p>

				<div className="AllEvents">
					<ul>
						hi - {this.props.schedules.length}
						{this.props.schedules.map(schedule => {
							// TODO: ensure the fields are being populated with accurate data
							return (
								<EventCard
									id={schedule.id}
									key={schedule.id}
									title={schedule.title}
									date={schedule.start_date_time}
									location={schedule.location}
								/>
							);
						})}
					</ul>
				</div>

				{/* <div className="Left-Container">

        </div>

				<div className="Right-Container">
          
        </div> */}
			</>
		);
	}
}

const mapStateToPops = state => {
	console.log("ManageEvents State: ", state);
	return {
		events: state.events,
		fetchingSchedule: state.fetchingSchedule,
		schedules: state.scheduleReducer.schedules
	};
};

export default connect(
	mapStateToPops,
	{ getSchedules }
)(ManageEvents);
