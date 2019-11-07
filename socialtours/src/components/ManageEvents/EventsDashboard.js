import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { fetchEvents, getSubscriptionsByUserId } from "../../actions/";
import Panel from "./Panel";
import Tabs from "./Tabs";
import * as S from "./EventFormStyles";

{/* Drop Down Schedule imports and styling start*/ }
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
    EventContainer,
    EventsWrapper,
    EventsContainerContainer,
    EventHeader,
    EventsTitle,
    EventSectionTitle,
    ManageEventsSub,
    ManageEventsWrapper,
    EventsSection,
    EventsHeadline,
    CEButton
} from "./ManageEventsStyles";

const classes = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    }
}));

{/* Drop Down Schedule imports and styling end*/ }

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
                <Tabs>
                    <Panel title="My Events">

                        {this.props.events
                            .filter(event => event.host_id === this.state.userId)
                            .map(event => (
                                <Link key={event.id} to={`/events/${event.id}`}>
                                    <S.Preview key={event.id}>{event.title}


                                        {/* Drop Down Schedule Code start*/}
                                        <div className={classes.root}>
                                            <ExpansionPanel expanded={props.expanded}>
                                                <ExpansionPanelSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    id={`${props.id}_header`}
                                                >
                                                    <Typography className={classes.heading}>{props.title}</Typography>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <div>
                                                        {props.schedule &&
                                                            props.schedule.length > 0 &&
                                                            props.schedule.map(schd => {
                                                                let date = new Date(schd.start_date_time);
                                                                return (
                                                                    <ScheduleWrapper>
                                                                        <span>{`${schd.location} ${moment(date).format(
                                                                            "MMMM Do YYYY, h:mm:ss a"
                                                                        )}`}</span>
                                                                    </ScheduleWrapper>
                                                                );
                                                            })}
                                                    </div>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        </div>
                                        {/* Drop Down Schedule Code end*/}


                                    </S.Preview>
                                </Link>
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
                                <Link key={event.id} to={`/events/${event.id}`}>
                                    <S.Preview key={event.id}>{event.title}</S.Preview>
                                </Link>
                            ))}
                    </Panel>
                    <Panel title="All Events">
                        {this.props.events.map(event => (
                            <Link key={event.id} to={`/events/${event.id}`}>
                                <S.Preview key={event.id}>{event.title}</S.Preview>
                            </Link>
                        ))}
                    </Panel>
                </Tabs>

                <CEButton onClick={e => this.props.history.push("createEvent")}>
                    Create New Event
							</CEButton>

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


const ScheduleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;


// Instructions
// - Event Button: Create new event button
// - Drop Down Schedule: Drop down from eventDetails that shows a schedule list underneath the event item similar to eventDetials in home page