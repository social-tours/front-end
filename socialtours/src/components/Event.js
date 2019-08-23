import React from "react";

const Events = props => {
    return (
    <ul>
        {props.events.map(event => {
            return (
                <div key={props.name}>
                    <h3>NAME: {event.name}</h3>
                    <p>DATE: {event.date}</p>
                    <p>TYPE: {event.type}</p>
                    <p>LOCATION: {event.LOCATION}</p>
                    <p>DESCRIPTION: {event.description}</p>
                </div>
            );
        })}
    </ul>
    );
};

export default Events;