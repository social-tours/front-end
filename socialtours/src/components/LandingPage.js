import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { colors } from "./DesignComponents/theme";
import PlanImage from "../images/plan2.png";
import ShareImage from "../images/share.png";

const carousel_data = [
	{
		imgUrl: require("../images/tattoo.jpg"),
		attributionUrl:
			"https://www.flickr.com/photos/jimmyg/5158673824/in/photolist-8RRy19-7DQfZo-i82Rfj-SELhrn-deZBCo-9oAQ5r-gjr1WB-RrC7zg-6vsi4p-9LjssX-bgS1yR-gjs9VR-4sFeLS-7DQfKA-gjqCaJ-gjr2go-Py8UX9-hRhjYH-gjrF5b-7DLrxv-i84oCV-7DQg3C-gjrfso-gjrEEx-gjqXn3-zngdj-qPjcct-9oB4Hk-2cEhYFD-EAizaJ-3aJmUc-UdQuFf-9oE8Wy-Z1EAKk-u3Wn42-Sjrhmj-qPm5Lr-2cV6gkd-TwS8ML-HLWy6T-VKXujo-XMh8Rc-RKLmnu-SYH4Z1-9oEam9-rHdvBd-9oB7ce-U66rR8-2cD5xbv-gjre1L",
		photographer: "Jimmy G"
	},
	{
		imgUrl: require("../images/woman_at_event.jpg"),
		attributionUrl:
			"https://www.flickr.com/photos/ministeriebz/40050169453/in/photolist-2426A3Z-2exWGrG-5DnRak-nS82Sq-7aLpUn-bqUX2k-TG1K6c-znuGac-ap6U8D-5Si95Q-WTvJxa-TRc1WS-zBJ6Ud-phXugh-yGXJ4C-nLrVoF-2bqtzsR-bZxNvU-SupU6h-2426ySc-SupTV7-qbJxfD-2dwxB9u-2dwxAPS-WvPWmv-2exWFZE-2dwxAKy-2deLLqH-2deLL5x-2dwxAc9-2426yWF-2dwxzBm-SupTww-Ve3YtQ-2dwxAWL-eAgSp2-SDGNgP-dEeTm7-5ZPRHp-THiPsP-5ZU4Wy-eAgZvg-5VShRc-n975Gb-o7z7ns-dEeTaY-8ajySR-eYiVv5-o3QjHm-mbip9X",
		photographer: "Kirsten van Sant"
	},
	{
		imgUrl: require("../images/selfie.jpg"),
		attributionUrl:
			"https://www.flickr.com/photos/rodriuru/22068562203/in/photolist-zC89FM-oXsnut-o7nnm9-24zKCkg-oKm57E-2bn4gVT-rPfzdq-pjiiFK-j63YXK-qgTALB-dS5898-r4HA7c-n3UuQ5-qsyWPz-22UY9Lc-2fkGGvF-ToKLgp-J5qZMK-22E8cQe-StJnap-2fmtw8s-28oWPcs-CdxQrG-rbxGEV-U3WfG5-of3kFF-nSaEFf-VTP9A4-dharnt-z9a36x-ThQPUq-G8pUzp-FKbyV1-fB1BgY-smxafn-goBpEC-fuLEPG-gcLNPx-VR49R8-HpSbey-oChK9h-oYgHnb-fwNUnv-23qjvbu-rEKf2L-puk4aJ-2diRYp4-E1KTLn-kaCbkg-Y9F9ff",
		photographer: "Rodrigo Olivera"
	}
];

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
				<CarouselImage src={carousel_data[imgIndex].imgUrl} />
				<HeroCard>
					<h2>Connect with Followers</h2>
					<img src={PlanImage} />
					<img src={ShareImage} />
				</HeroCard>
			</CarouselWrapper>
			<ButtonWrapper>
				<RegisterButton onClick={() => history.push("/register")}>
					Register
				</RegisterButton>
				<LoginButton onClick={() => history.push("/login")}>Login</LoginButton>
			</ButtonWrapper>
		</LandingPageWrapper>
	);
};

export default withRouter(LandingPage);

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
	width: 1000px;
	background-color: ${colors.mint};
	height: 600px;
`;

const CarouselImage = styled.img`
	width: 100%;
	max-height: 600px;
`;

const ButtonWrapper = styled.div`
	text-align: center;
	margin-top: 35px;
`;

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
`;
const LoginButton = styled(Button)`
	color: ${colors.grape};
	background-color: ${colors.mint};

	&:hover {
		color: ${colors.mint};
		background-color: ${colors.grape};
	}
`;
