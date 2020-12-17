import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";


import './ShopItem.css'

const ShopItem = ({image}) => {
    return (
      <div className="shopItem__container">
        <LazyLoadImage
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


