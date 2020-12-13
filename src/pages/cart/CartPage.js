import React from 'react'
import CartItem from '../../components/cartItem/CartItem';

import Button from '../../components/button/Button.js'
import paymentImage from '../../Assets/payment.png'

const CartPage = () => {
    return (
      <div className="cartpage mt-3">
        <div className="container ">
          <div>
            <h1 id="leh">BAG</h1>
            <p id="leh">2 items</p>
            <hr />
          </div>
          <div className="cartItems">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="cart__payment d-flex flex-column align-items-center my-5">
            <h2>Total USD $4580</h2>
            <Button button="PROCEED TO PAYMENT" buttonType="buttonBlack" />
            <img src={paymentImage} alt="payment logo" className="mt-3" />
          </div>
        </div>
      </div>
    );
}

export default CartPage
