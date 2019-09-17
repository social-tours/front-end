import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ManageEvents.css";

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
	render() {
		const {
			size = "2.5rem",
			title = "I Have A New Event!",
			url = "www.google.com"
		} = this.props;

		return (
			<div className="event-card">
				<div className="event-card-left">
					<p>ID#: {this.props.id}</p>
					<p>Title: {this.props.title}</p>
					<p>Description: {this.props.description}</p>
					<p>Time: {this.props.date}</p>
					<p>Location: {this.props.location}</p>
					<Link type="submit" to={`/events/${this.props.id}`}>
						EDIT / DELETE
					</Link>
				</div>
				<div className="event-card-right">
					<FacebookShareButton
						// url={url}
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
						url={url} // this can be a public facing page in cavas#2 for followers to see
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
							seperator={" "}
							openWindow={true}
						/>
					</EmailShareButton>
				</div>
			</div>
		);
	}
}

export default EventCard;
