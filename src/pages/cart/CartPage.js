import React from 'react'
import CurrencyFormat from "react-currency-format";
import CartItem from '../../components/cartItem/CartItem';
import Button from '../../components/button/Button.js'
import paymentImage from '../../Assets/payment.png'
import { connect } from 'react-redux';
import { deleteFromBasket } from '../../redux/basket/basketAction';
import { getBasketTotal } from '../../redux/basket/basketReducer';




const CartPage = ({ basketItems, removeFromBasket }) => {
  return (
    <div className="cartpage mt-3">
      <div className="container ">
        <div>
          <h1 id="leh">BAG</h1>
          <p id="leh">{basketItems.length}</p>
          <hr />
        </div>
        <div className="cartItems">
          {basketItems.map((basket) => {
            console.log(typeof basket.id);
            return (
              <CartItem
                key={basket.id}
                imageSrc={basket.imageSrc}
                price={basket.price}
                description={basket.details}
                removeFromBasket={removeFromBasket}
                id={basket.id}
              />
            );
          })}
        </div>
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
      </div>
    </div>
  );
};


const mapStateToProps = (state, ownProps) => {
  return {
    basketItems: state.basket.basket,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromBasket: (item) => dispatch(deleteFromBasket(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
