import React from 'react';



import './ShopItem.css'

const ShopItem = ({image}) => {
    return (
      <div className="shopItem__container">
        <img
          src={image}
          alt=""
          className="shoptItem__imageContainer  shadow"
        />
        
      </div>
    );
}

export default ShopItem


