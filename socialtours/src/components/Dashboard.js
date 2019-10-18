import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from "moment";
import Loader from "react-loader";

//components
import CreateEvent from "./ManageEvents/createEvent";
import DashCard from "./DashCard"

//icons
import StarIcon from "@material-ui/icons/Star";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PublicIcon from "@material-ui/icons/Public";
import MicIcon from "@material-ui/icons/Mic";

import { colors } from "./DesignComponents/theme";
//import EventCalendar from "./EventCalendar";
import UpcomingEvents from "./ManageEvents/UpcomingEvents";
import { fetchEvents } from "../actions";
import { getSubscriptionsByUserId } from "../actions/subscriptionActions";

class Dashboard extends React.Component {
	state = {
		events: this.props.events,
		myInfluencers: [],
		myEvents: []
	};

	componentDidMount() {
		this.props.fetchEvents();
		this.props.getSubscriptionsByUserId();

		this.setState({
			myInfluencers: this.props.subs.map((props) => {
				return { 'influencer_id': this.props.subs.influencer_id };

			})
		})
		console.log("setState: ", myInfluencers)

		// TODO: PSUDO CODE to list out events. pulling in influencer id's and returning events for just those members.
		// this.setState({
		// 	myEvents: this.props.scheuledEvents.filter(event => {
		// 		event.host_id.includes[this.state.myInfluencers](
		// 			<EventCard />
		// 		)
		// 	})
		// })


		//TODO: idea 2 for pulling in influencer ids to state
		// this.setState({
		// 	myInfluencers: this.props.subs.influencer_id
		// })

		//TODO: dont filter this, filter events and compare that to influencer IDs instead.
		// const influencers = this.props.subs.filter(person => person.influencer_id)
		// this.setState({
		// 	myInfluencers: influencers.influencer_id
		// })
		// console.log("myInfluencers: ", myInfluencers)
		// console.log("influencers: ", influencers)
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.events != this.props.events) {
			this.setState({
				events: this.props.events
			});
		}
	}

	render() {
		console.log("myInfluencers: ", myInfluencers)
		console.log("DASH Subscriptions: ", this.props.subs)
		console.log("DASH influencer_ids: ", this.props.subs.influencer_id)
		console.log("DASH events: ", this.props.events)
		console.log("DASH state: ", this.state)
		if (this.state.events.length === 0)
			return (
				<DashWrapper>
					<Loader />
				</DashWrapper>
			);

		return (
			<DashWrapper>
				<Items>
					<Events>
						<DashHeader>Your Events</DashHeader>
						<UpcomingEvents />
					</Events>
					<NewEvent>
						<DashHeader>Create a New Event</DashHeader>
						<CreateEvent user={this.props.user} />
					</NewEvent>
					<br />
				</Items>
				<EventsListDash>
					<DashHeader>Events You're Subscribed to!</DashHeader>
					{this.props.subs.map(event => {
						return (
							<DashCard
								id={event.id}
								key={event.id}
								influencerName={event.influencer_name}
							// time={event.}
							// location={event.}
							/>
						)
					})}
				</EventsListDash>
			</DashWrapper>
		);
	}
}

const mapStateToProps = ({ subscriptionReducer, eventReducer }) => {
	return {
		events: eventReducer.events,
		subs: subscriptionReducer.subscriptions
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ fetchEvents, getSubscriptionsByUserId }
	)(Dashboard)
);

const DashWrapper = styled.div`
	margin: 35px auto;
	display: flex;
	flex-direction: column;
	max-width: 1000px;
	align-items: center;
	align-content: center;
	height: 95vh;
	width: 80%;
	background-color: ${colors.dirty_concord};
`;

const Items = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin: 25px auto;
	width: 90%;
`;

const Events = styled.div`
	width: 45%;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	background-color: ${colors.mint};
	text-align: center;
	//height: 100%;
	border-radius: 10px;
`;

const NewEvent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	width: 45%;
	background-color: ${colors.mint};
	border: 1px solid ${colors.black_plum};
	box-shadow: #282c34 5px 5px 5px;
	border-radius: 10px;
`;

const EventsListDash = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 80%;
	background-color: ${colors.mint};
	border: 1px solid ${colors.black_plum};
	box-shadow: #282c34 5px 5px 5px;
	border-radius: 10px;
`;

const DashHeader = styled.h2`
	font-weight: bold;
	font-size: 1.4rem;
	margin-top: 8%;
`;
