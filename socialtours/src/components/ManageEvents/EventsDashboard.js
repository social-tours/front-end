import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { fetchEvents, getSubscriptionsByUserId } from "../../actions/";
import Panel from "./Panel";
import Tabs from "./Tabs";
import * as S from "./EventFormStyles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import EventDetails from "./EventDetails.js";

import { CEButton } from "./ManageEventsStyles";

class EventsDashboard extends Component {
    state = {
        userId: null
    };

    handleFetchEvents() {
        this.props.fetchEvents();
    }

    handleFetchSubscriptions() {
        this.props.getSubscriptionsByUserId();
    }

    getUserId() {
        if (localStorage.getItem("api_token")) {
            return jwtDecode(localStorage.getItem("api_token"));
        }
    }

    componentDidMount() {
        document.title = "Events Dashboard | Social Tours";
        this.handleFetchEvents();
        this.handleFetchSubscriptions();
        const userId = this.getUserId().id;
        this.setState({ userId });
    }

    render() {
        return (
            <S.DashBoardContainer>
                <CEButton onClick={e => this.props.history.push("createEvent")}>
                    Create New Event
				</CEButton>
                <Tabs>
                    <Panel title="My Events">

                        {this.props.events
                            .filter(event => event.host_id === this.state.userId)
                            .map(event => (

                                <S.Preview>
                                    <Link key={event.id} to={`/events/${event.id}`}>
                                        <S.Event key={event.id}> Click for {event.title}</S.Event>
                                    </Link>

                                    <StyledTypography>
                                        <EventDetails {...event}>

                                        </EventDetails>

                                    </StyledTypography>
                                </S.Preview>
                            ))}
                    </Panel>
                    <Panel title="Influencer Events">
                        {this.props.events
                            .filter(event =>
                                this.props.subscriptions
                                    .map(sub => sub.influencer_id)
                                    .includes(event.host_id)
                            )
                            .map(event => (
                                <S.Preview>
                                    <Link key={event.id} to={`/events/${event.id}`}>
                                        <S.Event key={event.id}> Click for {event.title}</S.Event>
                                    </Link>

                                    <StyledTypography>
                                        <EventDetails {...event}>

                                        </EventDetails>

                                    </StyledTypography>
                                </S.Preview>
                            ))}
                    </Panel>
                    <Panel title="All Events">
                        {this.props.events.map(event => (
                            <S.Preview>
                                <Link key={event.id} to={`/events/${event.id}`}>
                                    <S.Event key={event.id}> Click for {event.title}</S.Event>
                                </Link>

                                <StyledTypography>
                                    <EventDetails {...event}>

                                    </EventDetails>

                                </StyledTypography>
                            </S.Preview>
                        ))}
                    </Panel>
                </Tabs>



            </S.DashBoardContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.eventReducer.events,
        subscriptions: state.subscriptionReducer.subscriptions
    };
};

export default connect(
    mapStateToProps,
    { fetchEvents, getSubscriptionsByUserId }
)(EventsDashboard);


// const EventsWrapper = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	width: 100%;
// `;

const EventsDetails = styled.div`
	width: 50%;
`;


const StyledTypography = styled(Typography)`
width: 100%;
color: white;
background-color: transparent;
`;





// Instructions
// - Event Button: Create new event button
// - Drop Down Schedule: Drop down from eventDetails that shows a schedule list underneath the event item similar to eventDetials in home page