import styled from "styled-components";
import 'pure-react-carousel/dist/react-carousel.es.css';

import {
  color,
  fontSizing,
  flex,
  breakpoints
} from "../DesignComponents/theme";


export const CarouselContainer = styled.div`
  width: 100%
  margin-top: 35px;
  background: ${color.secondaryColor};

  @media ${breakpoints[0]} {
    display: none;
  }

	.carousel {
		width: 100%;
  }
  
  .carousel__slider {
    height: 200px;
  }

	.carousel__slide {
	}
`

export const SliderContainer = styled.div`
  position: relative;

  .buttonBack {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    width: 35px;
    height: 35px;
    ${flex("column","center","center")};
    border-radius: 35px;
    font-size: ${fontSizing.ml};
    font-weight: bold;
    opacity: 0.75;
  }

  .buttonNext {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    width: 35px;
    height: 35px;
    ${flex("column", "center", "center")};
    border-radius: 35px;
    font-size: ${fontSizing.ml};
    font-weight: bold;
    opacity: 0.75;
  }
`

export default CarouselContainer 