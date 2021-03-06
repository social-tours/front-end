import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { colors } from "./DesignComponents/theme";

// PREVIOUS LP images
// import PlanImage from "../images/plan2.png";
// import ShareImage from "../images/share.png";
// import Meeting1 from "../images/meeting1.jpg";
import Meeting2 from "../images/meeting2.jpg";
import Concert1 from "../images/concert1.jpg";
import Concert2 from "../images/concert2.jpg";
// import CoffeeShop from "../images/coffeeshop.jpg";

// Me poking at things
// const LandingPage = () => {
// 	return (
// 		<h1>hiljkaklasjdlaksjdlksj</h1>
// 	)
// }

const carousel_data = [
	{
		imgUrl: require("../images/concert2.jpg"),
		attributionUrl:
			"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
		photographer: "Photo by Noiseporn on Unsplash"
	},
	{
		imgUrl: require("../images/concert1.jpg"),
		attributionUrl:
			"https://images.unsplash.com/photo-1504680177321-2e6a879aac86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
		photographer: "Photo by Danny Howe on Unsplash"
	},
	{
		imgUrl: require("../images/meeting2.jpg"),
		attributionUrl:
			"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
		photographer: "Photo by Teemu Paananen on Unsplash"
	}
];

// PREVIOUS LP RETURN
const LandingPage = ({ history }) => {
	let [imgIndex, setImgIndex] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setImgIndex((imgIndex + 1) % carousel_data.length);
		}, 3000);
	}, [imgIndex]);

	return (
		<LandingPageWrapper>
			<CarouselWrapper>
				<LPTextWrapper>
					<h1>Social Tours</h1>
					<p>The go to option for influencers and fans to unite</p>
					<ButtonWrapper>
						<RegisterButton onClick={() => history.push("/register")}>
							Register
						</RegisterButton>
						<LoginButton onClick={() => history.push("/login")}>
							Login
						</LoginButton>
					</ButtonWrapper>
				</LPTextWrapper>
				<CarouselImage src={carousel_data[imgIndex].imgUrl} />
				{/* <HeroCard>
					<h2>Connect with Followers</h2>
					<img src={PlanImage} />
					<img src={ShareImage} />
				</HeroCard> */}
			</CarouselWrapper>
			<Supporting>
				<Container>
					<div className="col">
						<h2>Meet</h2>
						<p>Make meeting your followers easy</p>
					</div>
					<div className="col">
						<h2>Follow</h2>
						<p>Get all of your favorite influencer's events in one place</p>
					</div>
					<div className="col">
						<h2>Engage</h2>
						<p>Get social online and off</p>
					</div>
				</Container>
			</Supporting>
		</LandingPageWrapper>
	);
};

export default withRouter(LandingPage);

// PREVIOUS LP STYLINGS
const HeroCard = styled.div`
	display: flex;
	flex-direction: column;
	//margin-top: 25px;
	height: 75%;
	width: 25%;

	transform: translate(275%, -120%);
	background-color: ${colors.mint};
	box-shadow: ${colors.black_plum} 5px 5px 5px;
	padding-top: 15px;
	h2 {
		display: block;
		font-size: 1.2rem;
		margin: 0 auto;
		text-align: center;
		margin-bottom: 15px;
	}

	img {
		width: 75%;
		margin: 0 auto;
	}
`;

const LogoImage = styled.img`
	height: 90%;
	margin: 2px 5px;
`;

const LandingPageWrapper = styled.div`
	width: 100%;
	margin-top: 35px;
	height: 100vh;
`;

const CarouselWrapper = styled.div`
	margin: 0 auto;
	position: relative;
	align-items: center;
	display: inline-block;
	/* width: 1000px; */
	/* background-color: ${colors.mint}; */
	/* height: 600px; */
	/* display: flex; */
`;

const CarouselImage = styled.img`
	width: 100%;
	max-height: 736px;
`;

const LPTextWrapper = styled.div`
	position: absolute;
	left: 20%;
	right: 0;
	margin: -50px auto 0;
	top: 17%;
	// max-width: 940px;

	h1 {
		font-size: 5rem;
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
			1px 1px 0 #000;

		color: ${colors.white};
	}

	p {
		color: ${colors.white};
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
			1px 1px 0 #000;
		font-size: 1.5rem;
		margin: 30px 0;
	}
`;

const ButtonWrapper = styled.div`
	// display: flex;
	// justify-content: center;
	// align-content: center;
`;

const Supporting = styled.div``;

const Container = styled.div`
	max-width: 1120px;
	margin: 50px auto 0;
	display: flex;
	justify-content: space-between;
	color: ${colors.white};
	// background-color: lightblue;

	h2 {
		text-transform: uppercase;
		font-size: 1.5rem;
		font-weight: bold;
	}

	.col {
		text-align: center;
		width: 33%;
	}

	p {
		margin: 20px;
		font-size: 1.2rem;
	}
`;

const Button = styled.button`
	padding: 10px 20px;
	cursor: pointer;
	// text-transform: uppercase;
	border-radius: 5px;
	font-size: 1.3rem;
	border: 1px solid ${colors.black};
`;

const RegisterButton = styled(Button)`
	margin-right: 10px;
	color: ${colors.black};
	background-color: ${colors.red};

	&:hover {
		// color: ${colors.grape};
		background-color: #f9202b;
	}
`;
const LoginButton = styled(Button)`
	color: ${colors.black};
	background-color: ${colors.white};

	// &:hover {
	// 	color: ${colors.mint};
	// 	background-color: ${colors.grape};
	// }
`;
