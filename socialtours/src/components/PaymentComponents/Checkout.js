import React, { Component } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";

import PaymentForm from "./PaymentForm";

export default class Payment extends Component {
	render() {
		return (
			<>
				<StripeProvider apiKey="pk_test_cW5OcjbXZmflVlvo7cPdkyy000LOqLFIwo">
					<Elements>
						<PaymentForm />
					</Elements>
				</StripeProvider>
			</>
		);
	}
}
