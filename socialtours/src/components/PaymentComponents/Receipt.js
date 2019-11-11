import React from "react";

import * as S from "./PaymentComponentStyles";

const Receipt = props => {

  if (props.receiptUrl && props.receipt) {
    return (
      <S.ReceiptContainer>
        <h2>Payment Successful</h2>
        <S.PayButton onClick={() => window.open(props.receiptUrl, "_blank")}>
          View Receipt
					</S.PayButton>
      </S.ReceiptContainer>
    )
  }

  else if (props.receipt) {
    return (
      <S.ReceiptContainer>
        <h2>Reservation Complete</h2>
        <p>Check your email inbox for event details.</p>
      </S.ReceiptContainer>
    );
  }

};

export default Receipt;
