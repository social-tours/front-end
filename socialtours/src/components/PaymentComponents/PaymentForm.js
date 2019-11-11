import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { CardElement, injectStripe } from "react-stripe-elements";
// import Iframe from 'react-iframe'
import Receipt from "./Receipt";
import * as S from "./PaymentComponentStyles";
import { API_ENDPOINT } from "../../config/api";

class PaymentForm extends Component {
	state = {
		description: "Receipt Test",
		price: 10.00,
		quantity: 0,
		amount: 0,
		coupon: "",
		email: "",
		name: "",
		address: "",
		city: "",
		state: "",
		country: "",
		postal_code: "",
		receipt_url: null
	};

	handleInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handlePricing = e => {
		this.setState({ [e.target.name]: e.target.value }, () => {
			this.setState({ amount: this.state.price * this.state.quantity });
		});
	};

	handlePayment = async e => {
		e.preventDefault();
		let { token } = await this.props.stripe.createToken({
			name: this.state.name,
			email: this.state.email,
			address_line1: this.state.address,
			address_city: this.state.city,
			address_zip: this.state.postal_code,
			address_country: this.state.country
		});

		console.log("STRIPE TOKEN STATUS: ", token);

		const amount = Number(this.state.amount) * 100;
		console.log("SUBMITTED AMOUNT: ", amount);
		const transactionDetails = {
			description: this.state.description,
			user_id: jwt_decode(localStorage.getItem("api_token")).id,
			// event_schedule_id: this.props.schedule.id,
			amount,
			token
		};

		try {
			const response = await axios.post(
				`${API_ENDPOINT}/api/sales`,
				transactionDetails
			);

			if (response.data.success.id) {
				console.log(response);
				const { receipt_url } = response.data.success;
				this.setState({ receipt_url });
			}
		} catch (error) {
			console.log("Payment Error: ", error);
			alert("Payment Error");
		}
	};

	render() {
		return (
			<>
				{!this.state.receipt_url ? (
					<S.PaymentContainer>
						<form onSubmit={this.handlePayment}>
							<h3>Order Information</h3>
							<div className="product-description">
								{this.state.description}
							</div>
							<S.PayInputWrapper>
								<label htmlFor="price">Price</label>
								<div className="product-price">
									{this.state.price.toLocaleString("en-US", {
										style: "currency",
										currency: "usd"
									})}
								</div>
							</S.PayInputWrapper>
							<S.PayInputWrapper>
								<label htmlFor="quantity">Quantity</label>
								<input
									name="quantity"
									onChange={this.handlePricing}
									type="number"
								/>
							</S.PayInputWrapper>
							<S.PayInputWrapper>
								<label className="amount" htmlFor="amount">
									Total
								</label>
								<div className="amount">
									{this.state.amount.toLocaleString("en-US", {
										style: "currency",
										currency: "usd"
									})}
								</div>
							</S.PayInputWrapper>
							<h3>Billing Information</h3>
							<S.PayInputWrapper>
								<label htmlFor="name">Name</label>
								<input name="name" onChange={this.handleInput} placeholder="" />
							</S.PayInputWrapper>
							<S.PayInputWrapper>
								<label htmlFor="email">Email</label>
								<input
									name="email"
									onChange={this.handleInput}
									placeholder=""
								/>
							</S.PayInputWrapper>
							<S.PayInputWrapper>
								<label htmlFor="address">Address</label>
								<input
									name="address"
									onChange={this.handleInput}
									placeholder=""
								/>
							</S.PayInputWrapper>
							<S.PayInputWrapper>
								<label htmlFor="city">City</label>
								<input name="city" onChange={this.handleInput} placeholder="" />
							</S.PayInputWrapper>
							<S.PayInputWrapper>
								<label htmlFor="">State</label>
								<input
									name="state"
									onChange={this.handleInput}
									placeholder=""
								/>
							</S.PayInputWrapper>
							<S.PayInputWrapper>
								<label htmlFor="">Postal Code</label>
								<input
									name="postal_code"
									onChange={this.handleInput}
									placeholder=""
								/>
							</S.PayInputWrapper>
							<S.PayInputWrapper>
								<label htmlFor="country">Country</label>
								<input
									name="country"
									onChange={this.handleInput}
									placeholder=""
								/>
							</S.PayInputWrapper>
							<h3>Payment Information</h3>
							<CardElement
								className="stripe-card-element"
								style={{ base: { fontSize: "18px" } }}
							/>
							<S.PayButton>Purchase</S.PayButton>
						</form>
					</S.PaymentContainer>
				) : (
					<Receipt receiptUrl={this.state.receipt_url} />
				)}
			</>
		);
	}
}

export default injectStripe(PaymentForm);
