import React from 'react';


import './ShopItem.css'

const ShopItem = ({image}) => {
    return (
      <div className="shopItem__container col-sm-12 col-md-6 col-lg-4 shadow">
        <div className="shoptItem__imageContainer">
          <img src={image} alt="" />
        </div>
      </div>
    );
}

export default ShopItem


