import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Event } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%"
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	}
}));

const EventDetails = props => {
	const classes = useStyles();

	return (
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
									<Link to={`/events/${schd.event_id}/schedules/${schd.id}`}>
										<ScheduleWrapper key={schd.id}>
											<span>
												{`${schd.location} ${moment(date).format(
													"MMMM Do YYYY, h:mm:ss a"
												)}`}
											</span>
										</ScheduleWrapper>
									</Link>
								);
							})}
					</div>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
};

export default EventDetails;

const ScheduleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
