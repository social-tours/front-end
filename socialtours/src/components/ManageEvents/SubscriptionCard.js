import React, { Component } from 'react';

import { EventCardWrapper } from "./ManageEventsStyles"

class SubscriptionCard extends Component {
    constructor(props) {
        super(props);
    }

    // Methods

    render() {
        // Constants here

        return(
            <EventCardWrapper>
                {/* TODO: input props here */}
                <div>Event Title: </div>
                <div>Description: </div>
                <div>Capacity: </div>
            </EventCardWrapper>
        )
    }
}

export default SubscriptionCard;