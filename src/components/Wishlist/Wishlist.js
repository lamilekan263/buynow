import PropTypes from "prop-types";
import React from 'react';
import { connect } from "react-redux";
import { removeFromFavorites } from '../../redux/favorite/favoritesAction';
import WishlistCard from './wishListCard/WishlistCard';

import notwishlist from '../../Assets/wishlist2.png'

const Wishlist = ({ wishlist, removeFromFavorites }) => {
  return (
    <div>
      {wishlist.length === 0 ? (
        <div className="row justify-content-center">
          <div style={{ height: "300px" }}>
            <img
              src={notwishlist}
              alt=""
              className="col-12"
              style={{ height: "100%" }}
            />
          </div>
          <h4 style={{ textAlign: "center" }} className="col-12">
            Sorry you haven't added to your wishlist for santa
          </h4>
        </div>
      ) : (
        <div className="row">
          {wishlist.map((wishes) => {
            return (
              <div className="col-md-4">
                <WishlistCard
                  imageSrc={wishes.imageSrc}
                  removeFromFavorites={removeFromFavorites}
                  id={wishes.id}
                  name={wishes.name}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

Wishlist.propTypes = {
  removeFromFavorites: PropTypes.any,
  wishlist: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func
  })
}
const mapStateToProps = (state) => {
  return {
    wishlist: state.favorites.favorite,
  };
};

const mapDispatchToProps = ( dispatch) => {
  return {
    removeFromFavorites: (item) => dispatch(removeFromFavorites(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);