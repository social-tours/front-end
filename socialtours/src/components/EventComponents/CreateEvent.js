import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchEvents, fetchEvent, postEvent } from "../../actions";
import * as S from "./EventComponentsStyles";
import jwt_decode from "jwt-decode";

class TheCreateEvent extends React.Component {
	state = {
		type: 1, // hardcoded for testing
		title: "",
		// hardcode to 2 if the token isnt found
		host_id: localStorage.getItem("api_token")
			? jwt_decode(localStorage.getItem("api_token")).id
			: 2,
		description: "",
		event_image: "",
		paid_event: false,
		price: ""
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleCheckedInput = e => {
		e.preventDefault();
		this.setState(
			prevState => ({ paid_event: !prevState.paid_event }),
			() => console.log("paid_event: ", this.state.paid_event)
		);
	};

	redirect() {
		this.props.history.push("/eventsdashboard");
		console.log("redirect handler used!");
	}

	addEvent = async e => {
		e.preventDefault();
		const newEvent = this.state;
		await this.props.postEvent(newEvent);
		await this.props.fetchEvents();
	};

	render() {
		return (
			<S.FormContainer>
				<S.EventFormStyles>
					<form>
						<S.InputWrapper>
							<label>Title</label>
							<S.EventInput
								name="title"
								placeholder="title"
								onChange={this.handleChange}
								value={this.state.title}
							/>
						</S.InputWrapper>
						<S.InputWrapper>
							<label>Description</label>
							<S.EventInput
								name="description"
								placeholder="description"
								onChange={this.handleChange}
								value={this.state.description}
							/>
						</S.InputWrapper>
						<S.InputWrapper>
							<label>Event Image</label>
							<S.EventInput
								name="event_image"
								placeholder="event image url"
								onChange={this.handleChange}
								value={this.state.event_image}
							/>
						</S.InputWrapper>
						<S.InputWrapper className="input-checkbox">
							<label>Paid Event</label>
							<S.EventInput
								name="paid_event"
								placeholder="paid event"
								onChange={this.handleCheckedInput}
								value={this.state.paid_event}
								type="checkbox"
							/>
						</S.InputWrapper>
						<S.InputWrapper>
							<label>Price</label>
							<S.EventInput
								name="price"
								placeholder="price"
								onChange={this.handleChange}
								value={this.state.price}
								type="number"
							/>
						</S.InputWrapper>
						<button
							onClick={e => {
								this.addEvent(e, this.state.id);
								this.redirect();
							}}
						>
							Create Event
						</button>
					</form>
				</S.EventFormStyles>
			</S.FormContainer>
		);
	}
}

const mapStateToProps = state => {
	return {
		events: state.events
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ fetchEvents, fetchEvent, postEvent }
	)(TheCreateEvent)
);
