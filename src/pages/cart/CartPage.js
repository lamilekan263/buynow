import React from 'react'


import CartItem from '../../components/cartItem/CartItem';

import { connect } from 'react-redux';
import { deleteFromBasket } from '../../redux/basket/basketAction';
import CartSubTotal from './CartSubTotal';

import Button from '../../components/button/Button'
import { Link } from 'react-router-dom';




const CartPage = ({ basketItems, removeFromBasket }) => {
  return (
    <div className="cartpage mt-3">
      <div className="container ">
        <div>
          <h1>BAG</h1>
          <p>{basketItems.length}</p>
          <hr />
        </div>
        <div className="cartItems">
          {basketItems?.length === 0 ? (
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h5 className="mt-4">
                I'm sorry, Human. I'm Afraid there's nothing here.
              </h5>
              <h3 className="mt-4">
                It appears that your shopping cart is empty. we're eagerly
                awaiting your money. Remember the more you spend, the quicker we
                all get to buy Lamborghinis
              </h3>
              <Link to="/collections/shop">
                <Button button="Shop Now" buttonType="buttonBlack" />
              </Link>
            </div>
          ) : (
            basketItems.map((basketItem) => (
              <CartItem
                key={basketItem.id}
                imageSrc={basketItem.imageSrc}
                price={basketItem.price}
                description={basketItem.details}
                removeFromBasket={removeFromBasket}
                id={basketItem.id}
                quantity={basketItem.quantity}
              />
            ))
          )}
          <>{basketItems && <CartSubTotal basketItems={basketItems} />}</>
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
