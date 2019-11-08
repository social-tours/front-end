import React, { Component } from "react";
import jwtDecode from "jwt-decode";

import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext
} from "pure-react-carousel";
import EventBanner from "./EventBanner";
import * as S from "./CarouselStyles";
class Carousel extends Component {
	render() {
		return (
			<S.CarouselContainer>
				<CarouselProvider
					naturalSlideWidth={400}
					naturalSlideHeight={50}
					totalSlides={this.props.events.length}
					isPlaying={true}
					interval={5000}
				>
					<S.SliderContainer>
						<Slider>
							{this.props.events.map((event, i) => (
								<Slide index={i}>
									<EventBanner event={event} />
								</Slide>
							))}
						</Slider>
						<ButtonBack className="buttonBack">{"<"}</ButtonBack>
						<ButtonNext className="buttonNext">{">"}</ButtonNext>
					</S.SliderContainer>
				</CarouselProvider>
			</S.CarouselContainer>
		);
	}
}

export default Carousel;
