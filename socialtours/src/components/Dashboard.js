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
	return <DashWrapper>Dashboard</DashWrapper>;
};

export default Dashboard;

const DashWrapper = styled.div`
	margin: 0 auto;
	display: flex;
	max-width: 1000px;
	width: 80%;
	background-color: ${colors.putty};
`;
