import React from 'react';


import './ShopItem.css'

const ShopItem = ({image}) => {
    return (
    
        <img
          src={image}
          alt=""
          className="shoptItem__imageContainer col-sm-12 col-md-5 col-lg-4 shadow my-3"
        />
   
    );
}

export default ShopItem


