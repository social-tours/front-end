import styled from "styled-components";
import 'pure-react-carousel/dist/react-carousel.es.css';

import {
  color,
  colors,
  fontSizing,
  flex,
  breakpoints,
  colorScheme
} from "../DesignComponents/theme";

import Button from "../DesignComponents/Button";

export const CarouselContainer = styled.div`
  width: 100%

	.carousel {
		width: 100%;
		border: 2px solid red;
	}

	.carousel__slide {
		border: 2px solid coral;
	}
`

export default CarouselContainer 