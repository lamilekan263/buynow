import React, { useEffect } from 'react';

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { connect } from 'react-redux'
import Button from '../../components/button/Button'
import { addToBasket } from '../../redux/basket/basketAction';

// import './itemDetails.css'



const ItemDetails = ({ shopDetails, addTobasket }) => {
  useEffect(() => {
    console.log(shopDetails);
  }, [shopDetails]);
 

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
                  <h2 className="card-title">{ shopDetails.name }</h2>
                  <p className="card-text">
                    <strong>${shopDetails.price}</strong>
                  </p>
                  <div className="d-flex">
                    <Button
                      button="ADD TO BAG"
                      buttonType="buttonBlack"
                      btnClicked={addTobasket}
                    />
                    <Button
                      button={<FavoriteBorderIcon />}
                      buttonType="buttonBlack"
                    />
                  </div>
                  <div className="product-details my-4">
                    <h4>
                      <strong>Product Details</strong>
                    </h4>
                    <p>
                      {shopDetails.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    shopDetails: state.shop.shopdata[ownProps.match.params.id -1],
  };
};

const mapDispatchToProps = (dispatch) => ({
  addTobasket: (item) => dispatch(addToBasket(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
