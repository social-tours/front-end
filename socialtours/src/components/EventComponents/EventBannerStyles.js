import styled from "styled-components";

import {
  color,
  fontSizing,
  flex,
  breakpoints
} from "../DesignComponents/theme";
import Button from "../DesignComponents/Button";

export const EventBannerContainer = styled.div`
  width: 100%;
  height: 100%;
  ${flex("column","center")};
`

export const Caption = styled.div`
  width: 100%;
  ${flex("row", "center", "center")};
  padding: 0 20px;
  padding-top: 20px;
  background: ${color.secondaryColor};
`

export const Banner = styled.div`
  width: 100%;
  height: 125px;
  align-self: center;
  text-align: center;

	img {
		margin: 0 auto;
		width: 100%;
		height: 100%;
    object-fit: cover;
	}
`;

export const Headline = styled.h2`
  width: 80%;
  font-size: ${fontSizing.l};
  font-weight: bold;
  text-transform: uppercase;
  color: ${color.lightText};

  ${breakpoints[1]} {
    font-size: ${fontSizing.ml};
  }
`

export const BannerButton = styled(Button)`
  width: 150px;
  font-size: ${fontSizing.sm};
  background: transparent;
  border: 1px solid ${color.lightText};
  color: ${color.lightText}

`

export default EventBannerContainer