import React from 'react';

import image from '../../Assets/blackTop.jpg'

import './CartItem.css'

const CartItem = () => {
    return (
      <div className="cartItem d-flex justify-content-center mt-3">
        <div className="cartItem__displayImage">
          <img src={image} alt="" />
        </div>

        <div className="cartdetails ml-3">
          <p>WHITE BEAUTY MRS BLONDE MID LENGTH DENIM SHORT</p>
          <p>
            <strong>$</strong>
            <small>1250</small>
          </p>
        </div>
            <hr />
      </div>
    );
}

export default CartItem
