import React, { Component } from "react";
import { connect } from "react-redux";
import {
	getSubscriptionsByUserId,
	toggleMarketing
} from "../actions/subscriptionActions";

class Opt extends Component {
	componentDidMount() {
		this.props.getSubscriptionsByUserId();
	}

	render() {
		return (
			<ul style={{ marginTop: "40px" }}>
				{this.props.subscriptions.map(sub => (
					<li>
						{/* change to influencer name later  */}
						{sub.influencer_id}
						<input
							id="checkid"
							type="checkbox"
							checked={sub.marketing_opt_in}
							onChange={() =>
								this.props.toggleMarketing(sub.id, sub.marketing_opt_in)
							}
						/>
					</li>
				))}
			</ul>
		);
	}
}

const mapStateToProps = state => {
	console.log("ManageEvents State: ", state);
	return {
		subscriptions: state.subscriptionReducer.subscriptions
	};
};

export default connect(
	mapStateToProps,
	{ getSubscriptionsByUserId, toggleMarketing }
)(Opt);
