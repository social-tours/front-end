import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import MenuIcon from "@material-ui/icons/Menu";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import InfoIcon from "@material-ui/icons/Info";
import AddIcon from "@material-ui/icons/Add";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import HomeIcon from "@material-ui/icons/Home";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import VerticalSplitOutlinedIcon from "@material-ui/icons/VerticalSplitOutlined";
import { userHasEvent } from "../utils";

const useStyles = makeStyles({
	list: {
		width: 250
	},
	fullList: {
		width: "auto"
	}
});

function Navigation(props) {
	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false
	});

	const toggleDrawer = (side, open) => event => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	const sideList = side => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				<ListItem button>{getLink()}</ListItem>
				{!props.authenticated() && (
					<ListItem button>
						<ListItemIcon>
							<VerticalSplitOutlinedIcon />
						</ListItemIcon>
						<ListItemText
							primary={"Register"}
							onClick={() => props.history.push("register")}
						/>
					</ListItem>
				)}
			</List>
			<Divider />
			<List>
				<ListItem button>
					<ListItemIcon>
						<AddIcon />
					</ListItemIcon>
					<ListItemText
						primary={"Create Event"}
						onClick={() => props.history.push("/createEvent")}
					/>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<FormatListBulletedIcon />
					</ListItemIcon>

					<ListItemText
						primary={"Events"}
						onClick={() => props.history.push("/eventsdashboard")}
					/>
				</ListItem>
				{/* {userHasEvent(props.events) && (
					<ListItem button>
						<ListItemIcon>
							<FormatListBulletedIcon />
						</ListItemIcon>

						<ListItemText
							primary={"Manage Events"}
							onClick={() => props.history.push("/ManageEvents")}
						/>
					</ListItem>
				)} */}
				{userHasEvent(props.events) && (
					<ListItem button>
						<ListItemIcon>
							<PeopleOutlineIcon />
						</ListItemIcon>

						<ListItemText
							primary={"Following"}
							onClick={() => props.history.push("/FollowerDash")}
						/>
					</ListItem>
				)}
				{/* <ListItem button>
					<ListItemIcon>
						<DirectionsWalkIcon />
					</ListItemIcon>
					<ListItemText
						primary={"Search"}
						onClick={() => props.history.push("/search")}
					/>
				</ListItem> */}
				<ListItem button>
					<ListItemIcon>
						<AssignmentIndIcon />
					</ListItemIcon>
					<ListItemText
						primary={"Profile"}
						onClick={() => props.history.push("/profile")}
					/>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<InfoIcon />
					</ListItemIcon>
					<ListItemText
						primary={"About & Contact"}
						onClick={() => props.history.push("/aboutuscontact")}
					/>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<MovieFilterIcon />
					</ListItemIcon>
					<ListItemText
						primary={"Credits"}
						onClick={() => props.history.push("/credits")}
					/>
				</ListItem>
			</List>
		</div>
	);

	const getLink = () => {
		if (props.location.pathname != "/")
			return (
				<>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText
						primary={"Home"}
						onClick={() => props.history.push("/")}
					/>
				</>
			);
		else
			return (
				<>
					<ListItemIcon>
						{props.authenticated() ? (
							<LockOutlinedIcon />
						) : (
								<LockOpenOutlinedIcon />
							)}
					</ListItemIcon>

					{props.authenticated() ? (
						<ListItemText primary={"Log out"} onClick={() => props.logout()} />
					) : (
							<ListItemText
								primary={"Login"}
								onClick={() => props.history.push("login")}
							/>
						)}
				</>
			);
	};

	//console.log("location", props.location.pathname);
	return (
		<NavWrapper>
			<Button onClick={toggleDrawer("left", true)}>
				<MenuIcon style={{ color: "#fff" }} />
			</Button>
			<Drawer open={state.left} onClose={toggleDrawer("left", false)}>
				{sideList("left")}
			</Drawer>
		</NavWrapper>
	);
}

const mapStateToProps = state => {
	return {
		events: state.eventReducer.events
	};
};

export default compose(
	withRouter,
	connect(
		mapStateToProps,
		null
	)
)(Navigation);

const NavWrapper = styled.div`
	margin: 0 auto;
	position: fixed;
	top: 0;
	width: 100%;
	height: 35px;
	background-color: #605f5e;
`;
