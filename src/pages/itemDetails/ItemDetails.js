import React from 'react';

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { connect } from 'react-redux'
import Button from '../../components/button/Button'
import { addToBasket } from '../../redux/basket/basketAction';


import './ItemDetails.css'
import { addToFavorites } from '../../redux/favorite/favoritesAction';



const ItemDetails = ({ shopDetails, addTobasket, addToFavourite }) => {
  return (
    <div className="itemDetails mt-4">
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="img-container">
                <img
                  className="card-img-top"
                  src={shopDetails.imageSrc}
                  alt="Card  cap"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card-body">
                <h2 className="card-title">{shopDetails.name}</h2>
                <p className="card-text">
                  <strong>${shopDetails.price}</strong>
                </p>
                <div className="d-flex">
                  <Button
                    button="ADD TO BAG"
                    buttonType="buttonBlack"
                    btnClicked={() => addTobasket(shopDetails)}
                  />
                  <Button
                    button={<FavoriteBorderIcon />}
                    buttonType="buttonBlack"
                    btnClicked={() => addToFavourite(shopDetails)}
                  />
                </div>
                <div className="product-details my-4">
                  <h4>
                    <strong>Product Details</strong>
                  </h4>
                  <p>{shopDetails.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    shopDetails: state.shop.shopdata[ownProps.match.params.id -1],
  };
};

const mapDispatchToProps = (dispatch) => ({
  addTobasket: (item) => dispatch(addToBasket(item)),
  addToFavourite: (item) => dispatch(addToFavorites(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
