import React from 'react';

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import blackTops from '../../Assets/blackTop.jpg'
import { connect } from 'react-redux'
import Button from '../../components/button/Button'

// import './itemDetails.css'



const ItemDetails = (props) => {

    return (
      <div className="itemDetails mt-4">
        <div className="container">
          <div className="card">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="img-container">
                  <img
                    className="card-img-top"
                    src={blackTops}
                    alt="Card  cap"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="card-body">
                  <h2 className="card-title">Black Tops</h2>
                  <p className="card-text">
                    <strong>$1200</strong>
                  </p>
                  <div className="d-flex">
                    <Button button="ADD TO BAG" buttonType="buttonBlack" />
                    <Button
                      button={<FavoriteBorderIcon />}
                      buttonType="buttonBlack"
                    />
                                </div>
                                <div className="product-details my-4">
                                    <h4>
                                        <strong>Product Details</strong>
                                    </h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit rerum accusantium itaque sit at adipisci, aliquid nobis voluptatum quos qui odit hic, dicta aliquam, praesentium eos minima consectetur quidem id!</p>
                                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = state => {
    return {
        shopDetails : state.shop.shopdata
    }
}

export default connect(mapStateToProps)(ItemDetails);
