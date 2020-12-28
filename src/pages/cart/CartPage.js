import React from 'react'


import CartItem from '../../components/cartItem/CartItem';

import { connect } from 'react-redux';
import { deleteFromBasket } from '../../redux/basket/basketAction';
import CartSubTotal from './CartSubTotal';





const CartPage = ({ basketItems, removeFromBasket }) => {
  return (
    <div className="cartpage mt-3">
      <div className="container ">
        <div>
          <h1 >BAG</h1>
          <p >{basketItems.length}</p>
          <hr />
        </div>
        <div className="cartItems">
          {basketItems?.length === 0 ? (
            <div>
              <h5 className="mt-4">
                You currently do not have any items to purchase now
              </h5>
              <h3 className="mt-4">Shop Now!!!</h3>
            </div>
          ) : (

              basketItems.map((basketItem,) => (
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
        </div>

       
        
        <>
          <CartSubTotal basketItems={basketItems} />
        </>
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
