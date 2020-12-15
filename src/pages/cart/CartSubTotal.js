import React from 'react'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from '../../redux/basket/basketReducer';

import Button from "../../components/button/Button.js";
import paymentImage from "../../Assets/payment.png";

const CartSubTotal = ({basketItems}) => {
    return (
      <div className="cart__payment d-flex flex-column align-items-center my-5">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>Subtotal({basketItems?.length}):</p>
              <strong>{value}</strong>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basketItems)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <Button button="PROCEED TO PAYMENT" buttonType="buttonBlack" />
        <img src={paymentImage} alt="payment logo" className="mt-3" />
      </div>
    );
}

export default CartSubTotal
