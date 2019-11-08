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
  padding: 10px 10%;
  font-weight: bold;
  color: ${color.lightText};
  background-size: cover;

  & * {
    margin: 5px 0;
  }
`

export const Headline = styled.h2`
  width: 80%;
  font-size: ${fontSizing.l};
  font-weight: bold;
  text-transform: uppercase;
`

export const BannerButton = styled(Button)`
  width: 150px;
  font-size: ${fontSizing.sm};
  background: transparent;
  border: 1px solid ${color.lightText};
  color: ${color.lightText}

`

export default EventBannerContainer