import React from "react";
import styled from "styled-components";

const colors = {
	black_plum: "#011638",
	grape: "#46237A",
	putty: "#CDCDCD",
	mint: "#DFF8EB",
	spruce: "#214E34"
};

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

const LandingPage = () => {
	return (
		<LandingPageWrapper>
			<NavWrapper>
				<LogoImage src={require("../images/terrible_logo.png")} />
				<nav>
					<ul>
						<li>
							<a href="/login">Login</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
						<li>
							<a href="/contact">Contact us</a>
						</li>
						<li>
							<a href="/credits">Site credits</a>
						</li>
					</ul>
				</nav>
			</NavWrapper>
			<CarouselWrapper>
				<CarouselImage src={carousel_data[1].imgUrl} />
			</CarouselWrapper>
		</LandingPageWrapper>
	);
};

export default LandingPage;

const LogoImage = styled.img`
	height: 90%;
	margin: 2px 5px;
`;

const LandingPageWrapper = styled.div`
	width: 100%;
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
`;

const NavWrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 50px;
	width: 1000px;
	margin: 0 auto;
	background-color: ${colors.putty};
	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		padding-right: 15px;
		ul {
			display: flex;
			flex-direction: row;
			align-self: flex-end;
			li {
				margin: 5px;
				list-style: none;
				a {
					color: ${colors.black_plum};
					font-weight: bold;
					text-decoration: none;
					&:visited {
						color: ${colors.grape};
					}
					&:hover {
						text-decoration: underline overline;
					}
				}
			}
		}
	}
`;

/* Credits
    To be added to a page prior to publication
    Woman at event:
      URL: https://www.flickr.com/photos/ministeriebz/40050169453/in/photolist-2426A3Z-2exWGrG-5DnRak-nS82Sq-7aLpUn-bqUX2k-TG1K6c-znuGac-ap6U8D-5Si95Q-WTvJxa-TRc1WS-zBJ6Ud-phXugh-yGXJ4C-nLrVoF-2bqtzsR-bZxNvU-SupU6h-2426ySc-SupTV7-qbJxfD-2dwxB9u-2dwxAPS-WvPWmv-2exWFZE-2dwxAKy-2deLLqH-2deLL5x-2dwxAc9-2426yWF-2dwxzBm-SupTww-Ve3YtQ-2dwxAWL-eAgSp2-SDGNgP-dEeTm7-5ZPRHp-THiPsP-5ZU4Wy-eAgZvg-5VShRc-n975Gb-o7z7ns-dEeTaY-8ajySR-eYiVv5-o3QjHm-mbip9X
      Photographer: Kirsten van Sant
      
    Selfie
    URL: https://www.flickr.com/photos/rodriuru/22068562203/in/photolist-zC89FM-oXsnut-o7nnm9-24zKCkg-oKm57E-2bn4gVT-rPfzdq-pjiiFK-j63YXK-qgTALB-dS5898-r4HA7c-n3UuQ5-qsyWPz-22UY9Lc-2fkGGvF-ToKLgp-J5qZMK-22E8cQe-StJnap-2fmtw8s-28oWPcs-CdxQrG-rbxGEV-U3WfG5-of3kFF-nSaEFf-VTP9A4-dharnt-z9a36x-ThQPUq-G8pUzp-FKbyV1-fB1BgY-smxafn-goBpEC-fuLEPG-gcLNPx-VR49R8-HpSbey-oChK9h-oYgHnb-fwNUnv-23qjvbu-rEKf2L-puk4aJ-2diRYp4-E1KTLn-kaCbkg-Y9F9ff
    Photographer: Rodrigo Olivera

    Tattoo:
    URL: https://www.flickr.com/photos/jimmyg/5158673824/in/photolist-8RRy19-7DQfZo-i82Rfj-SELhrn-deZBCo-9oAQ5r-gjr1WB-RrC7zg-6vsi4p-9LjssX-bgS1yR-gjs9VR-4sFeLS-7DQfKA-gjqCaJ-gjr2go-Py8UX9-hRhjYH-gjrF5b-7DLrxv-i84oCV-7DQg3C-gjrfso-gjrEEx-gjqXn3-zngdj-qPjcct-9oB4Hk-2cEhYFD-EAizaJ-3aJmUc-UdQuFf-9oE8Wy-Z1EAKk-u3Wn42-Sjrhmj-qPm5Lr-2cV6gkd-TwS8ML-HLWy6T-VKXujo-XMh8Rc-RKLmnu-SYH4Z1-9oEam9-rHdvBd-9oB7ce-U66rR8-2cD5xbv-gjre1L
    Photographer: Jimmy G
 */
