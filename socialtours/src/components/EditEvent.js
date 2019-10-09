import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import EventFormStyles from "./EventFormStyles";
const API = "https://staging-a-socialtours.herokuapp.com"; // need to get from backend

class EditEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			type: "",
			title: "",
			description: "",
			event_image: "",
			capacity: ""
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	updateEvent = e => {
		e.preventDefault();
		let updatedData = {
			...this.state
		};

		axios
			.put(API + `/api/events/${updatedData.id}`, updatedData)
			.then(res => <Redirect to="/ManageEvents" />)
			.catch(err => {
				console.log(err);
			});
	};

	deleteEvent = () => {
		axios
			.delete(API + `/api/events/${this.state.id}`)
			.then(res => <Redirect to="/ManageEvents" />)
			.catch(err => {
				console.log(err);
			});
	};

	componentDidMount() {
		if (this.props.location.state)
			this.setState({ ...this.props.location.state });
	}

	render() {
		return (
			<EventFormStyles>
				<form
					style={{
						margin: "0 auto",
						marginTop: "40px",
						height: "50vh",
						width: "50%",
						display: "flex",
						flexDirection: "column"
					}}
					onSubmit={this.updateEvent}
				>
					<input
						name="type"
						placeholder="type"
						onChange={this.handleChange}
						value={this.state.type}
						type="number"
					/>
					<input
						name="title"
						placeholder="title"
						onChange={this.handleChange}
						value={this.state.title}
					/>
					<input
						name="host_ID"
						placeholder="host_ID"
						onChange={this.handleChange}
						value={this.state.host_ID}
					/>
					<input
						name="description"
						placeholder="description"
						onChange={this.handleChange}
						value={this.state.description}
					/>
					<input
						name="event_image"
						placeholder="event_image"
						onChange={this.handleChange}
						value={this.state.event_image}
					/>
					<input
						name="capacity"
						placeholder="capacity"
						onChange={this.handleChange}
						value={this.state.capacity}
						type="number"
					/>
					<button type="submit">Update Event</button>
				</form>
			</EventFormStyles>
		);
	}
}

export default EditEvent;
