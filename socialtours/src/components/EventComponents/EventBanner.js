import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import * as S from "./EventBannerStyles";

class EventBanner extends Component {

	viewEventInfo = e => {
		e.preventDefault();
		this.props.history.push(`/events/${this.props.event.id}`);
	};

	render() {
		const { event_image, title } = this.props.event;
		console.log("EventBanner props: ", this.props);
		return (
			<S.EventBannerContainer>
				<S.Banner>
					<img src={event_image} alt={title} />
				</S.Banner>
				<S.Caption>
					<S.Headline>{title}</S.Headline>
					<S.BannerButton onClick={this.viewEventInfo}>Learn More</S.BannerButton>
				</S.Caption>
			</S.EventBannerContainer>
		);
	}
}

export default withRouter(EventBanner);
