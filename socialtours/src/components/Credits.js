import React from "react";
import styled from "styled-components";

const Credits = () => {
	return (
		<Wrapper>
			<Paragraph>
				Selfie image courtesy of{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.flickr.com/photos/rodriuru/22068562203/in/photolist-zC89FM-oXsnut-o7nnm9-24zKCkg-oKm57E-2bn4gVT-rPfzdq-pjiiFK-j63YXK-qgTALB-dS5898-r4HA7c-n3UuQ5-qsyWPz-22UY9Lc-2fkGGvF-ToKLgp-J5qZMK-22E8cQe-StJnap-2fmtw8s-28oWPcs-CdxQrG-rbxGEV-U3WfG5-of3kFF-nSaEFf-VTP9A4-dharnt-z9a36x-ThQPUq-G8pUzp-FKbyV1-fB1BgY-smxafn-goBpEC-fuLEPG-gcLNPx-VR49R8-HpSbey-oChK9h-oYgHnb-fwNUnv-23qjvbu-rEKf2L-puk4aJ-2diRYp4-E1KTLn-kaCbkg-Y9F9ff"
				>
					Rodrigo Olivera
				</a>
			</Paragraph>
			<Paragraph>
				Tattoo image courtesy of{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.flickr.com/photos/jimmyg/5158673824/in/photolist-8RRy19-7DQfZo-i82Rfj-SELhrn-deZBCo-9oAQ5r-gjr1WB-RrC7zg-6vsi4p-9LjssX-bgS1yR-gjs9VR-4sFeLS-7DQfKA-gjqCaJ-gjr2go-Py8UX9-hRhjYH-gjrF5b-7DLrxv-i84oCV-7DQg3C-gjrfso-gjrEEx-gjqXn3-zngdj-qPjcct-9oB4Hk-2cEhYFD-EAizaJ-3aJmUc-UdQuFf-9oE8Wy-Z1EAKk-u3Wn42-Sjrhmj-qPm5Lr-2cV6gkd-TwS8ML-HLWy6T-VKXujo-XMh8Rc-RKLmnu-SYH4Z1-9oEam9-rHdvBd-9oB7ce-U66rR8-2cD5xbv-gjre1L"
				>
					Jimmy G
				</a>
			</Paragraph>
			<Paragraph>
				Woman at event image courtesy of{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.flickr.com/photos/ministeriebz/40050169453/in/photolist-2426A3Z-2exWGrG-5DnRak-nS82Sq-7aLpUn-bqUX2k-TG1K6c-znuGac-ap6U8D-5Si95Q-WTvJxa-TRc1WS-zBJ6Ud-phXugh-yGXJ4C-nLrVoF-2bqtzsR-bZxNvU-SupU6h-2426ySc-SupTV7-qbJxfD-2dwxB9u-2dwxAPS-WvPWmv-2exWFZE-2dwxAKy-2deLLqH-2deLL5x-2dwxAc9-2426yWF-2dwxzBm-SupTww-Ve3YtQ-2dwxAWL-eAgSp2-SDGNgP-dEeTm7-5ZPRHp-THiPsP-5ZU4Wy-eAgZvg-5VShRc-n975Gb-o7z7ns-dEeTaY-8ajySR-eYiVv5-o3QjHm-mbip9X"
				>
					Kirsten van Sant
				</a>
			</Paragraph>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	max-width: 500px;
	margin: 40px auto 0;
`;

const Paragraph = styled.p`
	margin-top: 10px;
`;

export default Credits;
