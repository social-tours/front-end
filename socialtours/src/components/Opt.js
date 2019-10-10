import React, { Component } from "react";
import { connect } from "react-redux";
import {
	getSubscriptions,
	toggleMarketing
} from "../actions/subscriptionActions";

class Opt extends Component {
	componentDidMount() {
		// change to get by userId
		this.props.getSubscriptions();
	}

	render() {
		return (
			<ul style={{ marginTop: "40px" }}>
				{this.props.subscriptions.map(sub => (
					<li>
						{sub.influencer_name}
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
	{ getSubscriptions, toggleMarketing }
)(Opt);
