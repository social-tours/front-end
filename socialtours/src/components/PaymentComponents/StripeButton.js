import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import { API_ENDPOINT } from "../../config/api";

const publishableKey = "pk_test_cW5OcjbXZmflVlvo7cPdkyy000LOqLFIwo";


class stripeBtn extends Component {
  onToken = async token => {
    console.log("Click onToken: ", this.props)
    const amount = Number(this.props.amount) * 100
    const transactionDetails = {
      amount,
      token
    }

    try {
      const response = await axios.post(`${API_ENDPOINT}/api/sales`, transactionDetails)
      console.log(response);
      alert("Payment Success");
    } catch (error) {
      console.log("Payment Error: ", error);
      alert("Payment Error");
    }
  }

  render() {
    console.log("StripeButton this.props: ", this.props)
    const amount = Number(this.props.amount) * 100
    return (
      <StripeCheckout
        label="Purchase" //Component button text
        name={this.props.name} //Modal Header
        description={this.props.description}
        panelLabel="Charge" //Submit button in modal
        amount={amount} //Amount in cents $9.99
        token={this.onToken}
        stripeKey={publishableKey}
        image="" //Pop-in header image
        billingAddress={false}
      />
    )
  }

}

export default stripeBtn