import React from 'react';
import { connect } from "react-redux";
import { removeFromFavorites } from '../../redux/favorite/favoritesAction';
import WishlistCard from './wishListCard/WishlistCard';


const Wishlist = ({ wishlist, removeFromFavorites }) => {
  return (
    <div className="row">
      {wishlist.map((wishes) => {
        return (
          <div className="col-md-4" key={wishes.id}>
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
  );
};
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