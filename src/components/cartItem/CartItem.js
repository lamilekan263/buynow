import React from 'react';


import Button from '../button/Button'


import './CartItem.css'

const CartItem = ({ id, imageSrc, price, description, removeFromBasket }) => {
  console.log(id)
  return (
    <div className="cartItem d-flex justify-content-center mt-3">
      <div className="cartItem__displayImage">
        <img src={imageSrc} alt="" />
      </div>

      <div className="cartdetails ml-3">
        <p>{description}</p>
        <p>
          <strong>$</strong>
          <small>{price}</small>
        </p>
        {/* <Button
          button="Remove from basket"
          buttonType="buttonBlack"
          btnClicked={() => removeFromBasket(id)}
        /> */}
        <button onClick={() =>removeFromBasket(id)}>RemoveFromBasket</button>
      </div>

      <hr />
    </div>
  );
};



export default CartItem
