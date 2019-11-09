import styled from "styled-components";

import {
  color,
  colors,
  fontSizing,
  flex,
  breakpoints,
  colorScheme
} from "../DesignComponents/theme";
import Button from "../DesignComponents/Button";

export const EventBannerContainer = styled.div`
  width: 100%;
  height: 100%;
  ${flex("column","normal","center")};
  padding: 10px 0;
  padding-left: 10%;
  padding-right: 2%;
  font-weight: bold;
  color: ${color.lightText};
  background-size: cover;

  & * {
    margin: 5px 0;
  }
`

export const Headline = styled.h2`
  width: 100%;
  font-size: ${fontSizing.xxl};
  font-weight: bold;
  text-transform: uppercase;
  color: ${color.lightText}
  filter: drop-shadow(.05em .05em ${color.primaryDark});
  mix-blend-mode: difference;

  ${breakpoints[1]} {
    font-size: ${fontSizing.xl};
  }
`

export const BannerButton = styled(Button)`
  width: 150px;
  font-size: ${fontSizing.sm};
  background: transparent;
  border: 1px solid ${color.lightText};
  color: ${color.lightText}
  mix-blend-mode: difference;

`

export default EventBannerContainer