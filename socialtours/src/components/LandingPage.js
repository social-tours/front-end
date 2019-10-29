import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { colors } from "./DesignComponents/theme";

// PREVIOUS LP images
// import PlanImage from "../images/plan2.png";
// import ShareImage from "../images/share.png";
import Meeting1 from "../images/meeting1.jpg";
import Meeting2 from "../images/meeting2.jpg";
import Concert1 from "../images/concert1.jpg";
import Concert2 from "../images/concert2.jpg";
import CoffeeShop from "../images/coffeeshop.jpg";

// Me poking at things
// const LandingPage = () => {
// 	return (
// 		<h1>hiljkaklasjdlaksjdlksj</h1>
// 	)
// }




const carousel_data = [
	{
		imgUrl: require("../images/meeting1.jpg"),
		attributionUrl:
			"https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
		photographer: "Photo by Priscilla Du Preez on Unsplash"
	},
	{
		imgUrl: require("../images/concert1.jpg"),
		attributionUrl:
			"https://images.unsplash.com/photo-1504680177321-2e6a879aac86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
		photographer: "Photo by Danny Howe on Unsplash"
	},
	{
		imgUrl: require("../images/coffeeshop.jpg"),
		attributionUrl:
			"https://images.unsplash.com/photo-1494346480775-936a9f0d0877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2006&q=80",
		photographer: "Photo by Nick Hillier on Unsplash"
	},
	{
		imgUrl: require("../images/meeting2.jpg"),
		attributionUrl:
			"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
		photographer: "Photo by Teemu Paananen on Unsplash"
	},
	{
		imgUrl: require("../images/concert2.jpg"),
		attributionUrl:
			"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
		photographer: "Photo by Noiseporn on Unsplash"
	}
];


// PREVIOUS LP RETURN
const LandingPage = ({ history }) => {
	let [imgIndex, setImgIndex] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setImgIndex((imgIndex + 1) % carousel_data.length);
		}, 6000);
	}, [imgIndex]);

	return (
		<LandingPageWrapper>
			<CarouselWrapper>
				<LPTextWrapper>
					<h1>Hello!!!!</h1>
					<ButtonWrapper>
						<RegisterButton onClick={() => history.push("/register")}>
							Register
						</RegisterButton>
						<LoginButton onClick={() => history.push("/login")}>Login</LoginButton>
					</ButtonWrapper>
				</LPTextWrapper>
				<CarouselImage src={carousel_data[imgIndex].imgUrl} />
				{/* <HeroCard>
					<h2>Connect with Followers</h2>
					<img src={PlanImage} />
					<img src={ShareImage} />
				</HeroCard> */}
			</CarouselWrapper>
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
	background-color: ${colors.black_plum};
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
	max-height: 100vh;
`;

const LPTextWrapper = styled.div`
	text-align: center;
	margin: 0 auto;
	align-items: center;
	width: 50%;
	/* margin-top:45%;
	margin-left: 50%; */
	position: absolute;
	/* margin: 40%; */
	display: flex;
`;

const ButtonWrapper = styled.div`
justify-content: center;
align-items: center;
`

const Button = styled.button`
	padding: 10px 20px;
	cursor: pointer;
	text-transform: uppercase;
	border-radius: 5px;
	font-size: 1.3rem;
	border-color: ${colors.black_plum};
`;

const RegisterButton = styled(Button)`
	margin-right: 10px;
	color: ${colors.mint};
	background-color: ${colors.grape};

	&:hover {
		color: ${colors.grape};
		background-color: ${colors.mint};
	}
`;
const LoginButton = styled(Button)`
	color: ${colors.grape};
	background-color: ${colors.mint};

	&:hover {
		color: ${colors.mint};
		background-color: ${colors.grape};
	}
`;
