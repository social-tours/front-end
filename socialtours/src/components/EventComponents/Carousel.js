import React, { Component } from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Carousel extends Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={50}
        totalSlides={3}
      >
        <Slider>
          {this.props.events.map((event, i) => (
            <Slide index={i}>{event.title}</Slide>
          ))}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>{">"}</ButtonNext>
      </CarouselProvider>
    );
  }
}

export default Carousel