import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import * as S from "./EventBannerStyles";

class EventBanner extends Component {

	viewEventInfo = e => {
		e.preventDefault();
		this.props.history.push(`/events/${this.props.event.id}`);
	};

	render() {
		const { event } = this.props;
		console.log("EventBanner props: ", this.props);
		return (
			<S.EventBannerContainer
				style={{ backgroundImage: `url(${event.event_image})` }}
			>
				<S.Headline>{event.title}</S.Headline>
				<S.BannerButton onClick={this.viewEventInfo}>Learn More</S.BannerButton>
			</S.EventBannerContainer>
		);
	}
}

export default withRouter(EventBanner);
