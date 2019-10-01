import { colors } from "../DesignComponents/theme";
import styled from "styled-components";

export const EventsAll = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const ManageEventsSub = styled.p`
	margin: 10px;
`;

export const EventsTitle = styled.h1`
	display: block;
	text-align: center;
	font-size: 2.5rem;
	color: ${colors.spruce};
	font-weight: bolder;
	margin-top: 15px;
	margin-bottom: 10px;
`;

export const EventSectionTitle = styled.h2`
	text-align: center;
	font-size: 2rem;
	color: ${colors.spruce};
	margin-top: 75px;
	margin-bottom: 20px;
	font-weight: bold;
`;

export const EventCardWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	margin-top: 10px;
	margin-bottom: 20px;
	width: 340px;
	padding: 10px 0px;
	-webkit-box-shadow: 0 8px 6px -6px black;
	-moz-box-shadow: 0 8px 6px -6px black;
	box-shadow: 0 8px 6px -6px black;
	border: 0.5px solid black;
	border-radius: 5px;
	background-color: ${colors.dirty_concord};
	color: ${colors.putty};

	img {
		height: 80px;
		width: auto;
	}

	p,
	a {
		padding: 0 15px 0 15px;
		margin-bottom: 6px;
	}

	a,
	a:visited {
		display: inline-block;
		margin-top: 10px;
		text-decoration: none;
		color: ${colors.mint};
	}
`;

export const EventList = styled.div`
	display: flex;
	min-height: calc(100vh - 35px - 25px - 20px);
	flex-wrap: no-wrap;
	justify-content: space-between;
	align-items: flex-start;
	margin-top: 24px;
`;

export const EventDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const EventHeader = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	margin-top: 10px;
	height: 25px;
`;

export const EventContainer = styled.div`
	min-height: calc(100vh - 35px - 25px);
	margin: 0 auto;
	margin-top: 35px;
	width: 80%;
	background-color: #cdcdcd;
`;

export const EventsContainerContainer = styled.div`
	width: 100%;
	background-color: #cdcdcd;
`;

export const EventsWrapper = styled.ul`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
`;
