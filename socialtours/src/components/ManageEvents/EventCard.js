import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { deleteEvent } from "../../actions";
import { EventCardWrapper } from "./ManageEventsStyles";

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

class EventCard extends Component {
	constructor(props) {
		super(props);
	}
	getDate = () => {
		const newDate = this.props.date
			.slice(0, 10)
			.split("-")
			.reverse();

		let mm = newDate[1];
		newDate[1] = newDate[0];
		newDate[0] = mm;

		return newDate.join("-");
	};

	deleteEvent = async (e, id) => {
		e.preventDefault();
		// this.props.deleteEvent(this.props.event.id)
		//await axios.delete(API + `/api/events/2`);
		this.props.deleteEvent(id);
		// do something
		//alert("Event has been deleted");
		this.props.history.push("/manageevents");
		//console.log("DELETE", deleteEvent);
	};

	render() {
		const {
			size = "2.5rem",
			title = "I Have A New Event!",
			url = "www.google.com"
		} = this.props;

		return (
			<EventCardWrapper>
				<div className="event-card-left">
					<p>Event ID#: {this.props.id}</p>
					<p>User ID#: {this.props.userId}</p>
					<p>Title: {this.props.title}</p>
					<p>Description: {this.props.description}</p>
					{/* <p>Time: {this.props.date}</p>
					<p>Location: {this.props.location}</p> */}
					<button
						type="submit"
						onClick={() => this.props.history.push(`/events/${this.props.id}`)}
					>
						Edit
					</button>
					<button onClick={e => this.deleteEvent(e, this.props.id)}>
						Delete
					</button>
				</div>
				<div style={{ paddingRight: "8px" }} className="event-card-right">
					<FacebookShareButton
						url={"www.facebook.com"}
						quote={"I have a new event!"}
						hashtag={"#NewEvent"}
					>
						<FacebookIcon size={size} />
					</FacebookShareButton>
					<TwitterShareButton
						url={url}
						title={"I have a new event!"}
						hashtag={"#NewEvent"}
					>
						<TwitterIcon size={size} />
					</TwitterShareButton>
					<LinkedinShareButton
						url={"www.Linkedin.com"} // this can be a public facing page in cavas#2 for followers to see
						title={"I have a new event!"}
						windowWidth={750}
						windowHeight={600}
					>
						<LinkedinIcon size={size} />
					</LinkedinShareButton>
					<EmailShareButton>
						<EmailIcon
							url={url}
							size={size}
							subject={"I have a new event!"}
							body={"Checkout this new event before tickets sell out!"}
							seperator={" "}
							openWindow={true}
						/>
					</EmailShareButton>
				</div>
			</EventCardWrapper>
		);
	}
}

export default connect(
	null,
	{ deleteEvent }
)(withRouter(EventCard));
