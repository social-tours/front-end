import React from "react";
import styled from "styled-components";

const colors = {
	black_plum: "#011638",
	grape: "#46237A",
	putty: "#CDCDCD",
	mint: "#DFF8EB",
	spruce: "#214E34"
};

const Dashboard = () => {
	return (
		<DashWrapper>
			<LeftItems>
				<div />
				<div />
			</LeftItems>
			<RightItem />
		</DashWrapper>
	);
};

export default Dashboard;

const DashWrapper = styled.div`
	margin: 0 auto;
	display: flex;
	max-width: 1000px;
	height: 95vh;
	width: 80%;
	background-color: ${colors.putty};
`;

const LeftItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	div {
		margin-top: 5%;
		margin-bottom: 5%;
		margin-left: 20%;
		height: 45%;
		width: 48%;
		background-color: ${colors.mint};
		border: 1px solid ${colors.black_plum};
		box-shadow: #282c34 5px 5px 5px;
	}
`;

const RightItem = styled.div`
	display: flex;
	flex-direction: column;
	width: 48%;
	height: 90%;
	margin-top: 3%;
	margin-right: 15%;
	background-color: ${colors.mint};
	border: 1px solid ${colors.black_plum};
	box-shadow: #282c34 5px 5px 5px;
`;
