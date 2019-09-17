import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockCloseIcon from "@material-ui/icons/Lock";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import MenuIcon from "@material-ui/icons/Menu";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";

const useStyles = makeStyles({
	list: {
		width: 250
	},
	fullList: {
		width: "auto"
	},
	a: {
		textDecoration: "none",
		color: "initial"
	}
});

export function Navigation({ auth }) {
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
				{!auth.isAuthenticated() ? (
					<ListItem button>
						<ListItemIcon>
							<LockOpenIcon />
						</ListItemIcon>
						<NavLink className={classes.a} to="/login">
							<ListItemText primary={"Login"} />
						</NavLink>
					</ListItem>
				) : (
					<ListItem onClick={auth.logout} button>
						<ListItemIcon>
							<LockCloseIcon />
						</ListItemIcon>
						<ListItemText primary={"Logout"} />
					</ListItem>
				)}
			</List>
			<Divider />
			<List>
				<ListItem button>
					<ListItemIcon>
						<AssignmentIndIcon />
					</ListItemIcon>
					<ListItemText primary={"About"} />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<MailOutlineIcon />
					</ListItemIcon>
					<ListItemText primary={"Contact"} />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<MovieFilterIcon />
					</ListItemIcon>
					<ListItemText primary={"Credits"} />
				</ListItem>
			</List>
		</div>
	);

	return (
		<NavWrapper>
			<Button onClick={toggleDrawer("left", true)}>
				<MenuIcon />
			</Button>
			<Drawer open={state.left} onClose={toggleDrawer("left", false)}>
				{sideList("left")}
			</Drawer>
		</NavWrapper>
	);
}

const mapStateToProps = state => {
	return {
		auth: state.authReducer.auth
	};
};

const NavWrapper = styled.div`
	margin: 0 auto;
	position: fixed;
	top: 0;
	width: 100%;
	height: 35px;
	background-color: #dff8eb;
`;

export default connect(
	mapStateToProps,
	{}
)(Navigation);
