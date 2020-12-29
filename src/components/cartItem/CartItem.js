import React from 'react';


import Button from '../button/Button'


import './CartItem.css'

const CartItem = ({
  id,
  imageSrc,
  price,
  description,
  removeFromBasket,
}) => {
  return (
    <div className="cartItem row justify-content-center mt-3">
      <div className="cartItem__displayImage col-md-4 ">
        <img src={imageSrc} alt="" />
      </div>

      <div className="cartdetails my-3 col-md-8 ">
        <p>{description}</p>
        <p>
          <strong>$</strong>
          <small>{price}</small>
        </p>
        <Button
          button="Remove from basket"
          buttonType="buttonBlack"
          btnClicked={() => removeFromBasket(id)}
        />
      </div>

      <hr />
    </div>
  );
};



export default CartItem
