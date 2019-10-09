import React, { Component } from "react";
import { connect } from "react-redux";
import { getSubscriptions } from "../actions/subscriptionActions";

class Opt extends Component {
	componentDidMount() {
		this.props.getSubscriptions();
	}

	render() {
		return (
			<ul style={{ marginTop: "40px" }}>
				{this.props.subscriptions.map(sub => (
					<li>{sub.influencer_name}</li>
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
	{ getSubscriptions }
)(Opt);
