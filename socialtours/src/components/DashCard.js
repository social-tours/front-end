import React, { Component } from 'react';
import { connect } from "react-redux";
import { API_ENDPOINT } from "../config/api";
import styled from "styled-components";

import { EventCardWrapper } from "./ManageEvents/ManageEventsStyles";

import { fetchEvents } from "../actions/eventActions";


class DashCard extends Component {
    componentDidMount = () => {

    }

    render = () => {
        return (
            <EventCardWrapper>
                <p>Influencer Name: {this.props.influencerName}</p>
                <p>Event Title: </p>
                <p>Time: </p>
                <p>Location: </p>
            </EventCardWrapper>
        )
    }
}


const mapStateToProps = state => {
    return {
        events: state.eventReducer.events,
        subscriptions: state.subscriptionReducer.subscriptions
    }
}

export default connect(
    mapStateToProps,
    { fetchEvents }
)(DashCard);