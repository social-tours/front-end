import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import * as S from "./EventTileStyles";

class EventTile extends Component {
	viewEventInfo = e => {
		e.preventDefault();
		this.props.history.push(`/events/${this.props.event.id}`);
	};

	render() {
		const { event_image, title } = this.props.event;
		return (
			<S.EventInfoContainer onClick={this.viewEventInfo}>
				<S.Banner>
					<img src={event_image} alt="Event Poster" />
        </S.Banner>
        <S.EventTitle>{title}</S.EventTitle>
			</S.EventInfoContainer>
		);
	}
}

export default withRouter(EventTile);
