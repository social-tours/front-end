import React, { Component } from "react";
import { StripeProvider, Elements } from 'react-stripe-elements'

import CheckoutForm from './CheckoutForm'

export default class Payment extends Component {
  render() {
    return (
      <>
        <StripeProvider apiKey="pk_test_cW5OcjbXZmflVlvo7cPdkyy000LOqLFIwo">
          <Elements>
            <CheckoutForm />
          </Elements>
        </StripeProvider>
      </>
    )
  }
}

