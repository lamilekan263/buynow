import React from 'react'

import { Link } from 'react-router-dom'


import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import './Header.css'
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase';

const Header = ({ user, basket, wishlist }) => {
  return (
    <div className="header  py-1">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggle"
          aria-controls="navbarToggle"
          aria-expanded={false}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand d-lg-none" to="/">
          <h2>BuyNow</h2>
        </Link>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarToggle"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="#">
                New Arrival <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/collections/shop">
                Collections
              </Link>
            </li>
          </ul>

          <Link className="navbar-brand d-none d-lg-block" to="/">
            <h2>BuyNow</h2>
          </Link>

          <ul className="navbar-nav ">
            <li className="nav-item d-none d-md-block">
              <Link className="nav-link" to="/cart">
                basket({basket.length})
              </Link>
            </li>
            <li className="nav-item d-lg-none">
              <Link className="nav-link" to="/cart">
                <ShoppingBasketIcon className=" favoriteIcon " />
                <strong>
                  <sup>{basket.length}</sup>
                </strong>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/wishlist">
                <FavoriteBorderIcon className=" favoriteIcon p-0 " />
                <strong>
                  <sup>{wishlist.length}</sup>
                </strong>
              </Link>
            </li>
            <li className="nav-item ">
              {!user ? (
                <Link className="nav-link" to="/user/signin">
                  Sign In
                </Link>
              ) : (
                <div className="nav-link" onClick={() => auth.signOut()}>
                  Sign Out
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user.currentUser,
    basket: state.basket.basket,
    wishlist: state.favorites.favorite,
  };
}

export default connect(mapStateToProps)(Header)
