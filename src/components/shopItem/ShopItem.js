import React from 'react';



import './ShopItem.css'

const ShopItem = ({image}) => {
    return (
      <div className="shopItem__container">
        <img
          src={image}
          alt=""
          effect="blur"
          className="shoptItem__imageContainer  shadow"
          visibleByDefault={image.src === image}
        />
        
      </div>
    );
}

export default ShopItem


