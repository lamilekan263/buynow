import React from 'react'
import CloseIcon from "@material-ui/icons/Close";


import './WishlistCard.css'


const WishlistCard = ({ id,imageSrc, name, removeFromFavorites }) => {
  return (
    <div className=" wishlistCard shadow  p-4">
      <div className="d-flex flex-end">
        {" "}
        <CloseIcon onClick={() => removeFromFavorites(id)} />
      </div>

      <div className="card__Img-container">
        <img src={imageSrc} alt="" />
      </div>
      <div className="card__details container">
        <h3 style={{textAlign: 'center'}} className='my-3'> {name}</h3>
      </div>
    </div>
  );
};




export default WishlistCard;