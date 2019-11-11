import React from "react";

import * as S from "./PaymentComponentStyles";

const Receipt = props => {
	return (
    <S.ReceiptContainer>
      <h2>Payment Successful</h2>
      <S.PayButton onClick={() => window.open(props.receiptUrl, "_blank")}>
        View Receipt
      </S.PayButton>
		</S.ReceiptContainer>
	);
};

export default Receipt;
