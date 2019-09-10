import React, { Component } from "react";
import { connect } from "react-redux";
import EventCard from "./EventCard";

import { getEvents } from "../../actions/events";

// TODO: if someone clicks on an event in the dashboard calendar, enable them to edit/delete if this is their event. If not, only show details. Perhaps this could be for Canvas#2 when we focus on 'Followers' while Canvas#1 is for "Influencers"

class ManageEvents extends Component {
	componentDidMount() {
		this.props.getEvents();
		console.log("Manage THIS", this.props.getEvents());
	}

	render() {
		return (
			<>
				<p>Mangage Events</p>

				<div className="AllEvents">
					<ul>
						hi
						{/* {this.props.ManageEvents.map(event => {
							// TODO: ensure the fields are being populated with accurate data
							<EventCard
								id={event.id}
								key={event.id}
								title={event.schedule.title}
								date={event.schedule.start_date_time}
								location={event.schedule.location}
							/>;
						})} */}
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
		fetchingEvents: state.fetchingEvents
	};
};

export default connect(
	mapStateToPops,
	{ getEvents }
)(ManageEvents);
