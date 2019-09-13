import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ManageEvents.css";

class EventCard extends Component {
	constructor(props) {
		super(props);
	}
	getDate = () => {
		const newDate = this.props.date.slice(0, 10).split('-').reverse();

		let mm = newDate[1];
		newDate[1] = newDate[0];
		newDate[0] = mm;

		return newDate.join('-');
	}
	render() {

		return (
			<div className="event-card">


				<p>Title: {this.props.title}</p>
				<p>Description: {this.props.description}</p>
				<p>Date: {this.getDate()}</p>
				<p>Time: {this.props.date}</p>
				<p>Location: {this.props.location}</p>
				<Link to={{
					pathname: '/editevent',
					state: {
						...this.props
					}
				}}>
					Manage Event
					</Link>


			</div>
		);
	}
}

export default EventCard;
