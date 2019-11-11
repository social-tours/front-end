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
		description: this.props.event.title,
		price: this.props.event.price,
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
		receipt: false,
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
			type: this.props.event.type,
			user_id: jwt_decode(localStorage.getItem("api_token")).id,
			event_schedule_id: this.props.schedule.id,
			email: this.state.email,
			quantity: this.state.quantity,
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
				this.setState({ receipt: !this.state.receipt, receipt_url });
			}
		} catch (error) {
			console.log("Payment Error: ", error);
			alert("Payment Error");
		}
	};

	handleReservation = async e => {
		const transactionDetails = {
			description: this.state.description,
			type: this.props.event.type,
			user_id: jwt_decode(localStorage.getItem("api_token")).id,
			event_schedule_id: this.props.schedule.id,
			email: this.state.email,
			quantity: this.state.quantity,
		};

		try {
			const response = await axios.post(
				`${API_ENDPOINT}/api/tickets`,
				transactionDetails
			);

			console.log("RESERVATION STATUS: ", response.data);
			if (response.data.id) {
				this.setState({ receipt: !this.state.receipt });
			}
		} catch (error) {
			console.log("Reservation Error: ", error);
			alert("Reservation Error");
		}
	}

	handleSubmit = e => {
		e.preventDefault();
		if (this.props.event.paid_event) {
			this.handlePayment(e)
		} else {
			this.handleReservation(e)
		}

	}

	render() {
		return (
			<>
				{!this.state.receipt ? (
					<S.PaymentContainer>
						<form onSubmit={this.handleSubmit}>
							<h3>Order Information</h3>
							<div className="product-description">
								{this.state.description}
							</div>
							{this.props.event.paid_event && (
								<S.PayInputWrapper>
									<label htmlFor="price">Price</label>
									<div className="product-price">
										{this.state.price.toLocaleString("en-US", {
											style: "currency",
											currency: "usd"
										})}
									</div>
								</S.PayInputWrapper>
							)}
							<S.PayInputWrapper>
								<label htmlFor="quantity">Quantity</label>
								<input
									name="quantity"
									onChange={this.handlePricing}
									type="number"
								/>
							</S.PayInputWrapper>
							{this.props.event.paid_event && (
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
							)}
							<h3>
								{this.props.event.paid_event ? "Billing" : "Reservation"}{" "}
								Information
							</h3>
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
							{this.props.event.paid_event && (
								<>
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
								</>
							)}
							<S.PayButton>{this.props.event.paid_event ? "Purchase" : "Reserve"}</S.PayButton>
						</form>
					</S.PaymentContainer>
				) : (
						<Receipt receipt={this.state.receipt} receiptUrl={this.state.receipt_url} />
				)}
			</>
		);
	}
}

export default injectStripe(PaymentForm);
