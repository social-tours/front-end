import React, { Component } from "react";
import axios from "axios";
import { CardElement, injectStripe } from "react-stripe-elements";

import * as S from "./PaymentComponentStyles";

class PaymentForm extends Component {
	// constructor(props) {
	//   super(props)

	//   this.state = {
	//     name: "",
	//     amount: ""
	//   };
	// }

	state = {
		name: "",
		amount: ""
	};

	handleInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handlePayment = async () => {
		let { token } = await this.props.stripe.createToken({
			name: this.state.name
		});
		let response = await axios.post("/charge", token.id);

		if (response.ok) console.log("Purchase complete!");
	};

	render() {
		console.log("THIS.PROPS: ", this.props);
		return (
			<S.PaymentContainer>
				<CardElement
					className="stripe-card-element"
					style={{ base: { fontSize: "18px" } }}
				/>
				<S.PayButton>Purchase</S.PayButton>
			</S.PaymentContainer>
		);
	}
}

export default injectStripe(PaymentForm);
