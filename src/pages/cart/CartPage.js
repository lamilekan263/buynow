import React from 'react'

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartItem from '../../components/cartItem/CartItem';

import { connect } from 'react-redux';
import { deleteFromBasket } from '../../redux/basket/basketAction';
import CartSubTotal from './CartSubTotal';

import Button from '../../components/button/Button'
import { Link } from 'react-router-dom';

import cartImg from "../../Assets/empty.png";



const CartPage = ({ basketItems, removeFromBasket }) => {
  return (
    <div className="cartpage mt-3">
      <div className="container ">
        <div className="d-flex">
          <ShoppingCartIcon />
          <p>({basketItems.length})</p>
        </div>
        <hr />
        <div className="cartItems">
          {basketItems?.length === 0 ? (
            <div className="d-flex align-items-center justify-content-center flex-column">
              <img src={cartImg} alt="" />
              <h6 className="mt-3">
                I'm sorry, Human. I'm Afraid there's nothing here.
              </h6>
              <h5 className="mt-3 text-align-center" style ={{textAlign: 'center'}}>
                It appears that your shopping cart is empty. we're eagerly
                awaiting your money. Remember the more you spend, the quicker we
                all get to buy Lamborghinis
              </h5>
              <Link to="/collections/shop" className="my-5">
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
          <>
            {basketItems.length !== 0 && (
              <CartSubTotal basketItems={basketItems} />
            )}
          </>
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
