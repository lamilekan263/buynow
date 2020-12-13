import React from 'react'

import { Link } from 'react-router-dom'


import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import MenuIcon from "@material-ui/icons/Menu";

import './Header.css'
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase';
const Header = ({user}) => {
    return (
      <div className="header  py-1">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggle"
            aria-controls="navbarToggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand d-lg-none" to="/">
            <h1>BuyNow</h1>
          </Link>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarToggle"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" href="#">
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
              <h1>BuyNow</h1>
            </Link>

            <ul className="navbar-nav ">
              <li className="nav-item d-none d-md-block">
                <Link className="nav-link" to="/cart">
                  basket(2)
                </Link>
              </li>
              <li className="nav-item d-lg-none">
                <Link className="nav-link" to="/cart">
                  <ShoppingBasketIcon className=" favoriteIcon " />
                  <strong>
                    <sup>234</sup>
                  </strong>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" href="#">
                  <FavoriteBorderIcon className=" favoriteIcon p-0 " />
                  <strong>
                    <sup>6</sup>
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

        {/* <nav className="navbar-expand-lg navbar-light bg-light static-top container">
          <div className="d-flex justify-content-between ">
            <div className="header__leftSidenav">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <MenuIcon className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" href="#">
                      New Arrivals
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/collections/shop'>
                      Collections
                    </Link>
                  </li>
                  <li className="nav-item header__largeDevice">
                    {user ? (
                      <div className="nav-link" onClick={() => auth.signOut()}>
                        Sign Out
                      </div>
                    ) : (
                      <Link to="/user/signin">
                        <p>Sign In</p>
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className=" header__brand">
              <Link to="/">
                <p>BUY NOW</p>
              </Link>
            </div>
            <div className="header__rightSidenav d-flex justify-content-between ">
              <div className="header__smallDevice">
                {user ? (
                  <div onClick={() => auth.signOut()}>Sign Out</div>
                ) : (
                  <Link to="/signin">
                    <p>Sign In</p>
                  </Link>
                )}
              </div>
              <Link to="/cart" className="header__smallDevice">
                <p>
                  Bag <strong>(2)</strong>
                </p>
              </Link>
              <div className=" header__largeDevice">
                {" "}
                <ShoppingBasketIcon className="  favoriteIcon " />
              </div>

              <FavoriteBorderIcon className=" favoriteIcon" />
            </div>
          </div>
        </nav> */}
        {/* <nav>
          <div className="container">
            <div className="header__largeDevice">
              <div className="d-flex justify-content-between ">
                <div className="header__LeftSidenav d-flex justify-content-between">
                  <p>Collections</p>
                </div>
                <div className="header__brand">
                  <Link to="/">
                    <h1>BUY NOW</h1>
                  </Link>
                </div>
                <div className="header__rightSidenav d-flex justify-content-between">
                  {user ? (
                    <div onClick={() => auth.signOut()}>Sign Out</div>
                  ) : (
                    <Link to="/signin">
                      <p>Sign In</p>
                    </Link>
                  )}

                  <Link to="/cart">
                    <p>Bag</p>
                  </Link>

                  <FavoriteBorderIcon className="favoriteIcon" />
                </div>
              </div>
            </div>

            {/* smaller device */}
        {/* <div className="header__smallDevice">
              <div className="d-flex justify-content-between ">
                <div className="header__LeftSidenav ">
                  <p>Collections</p>
                  <div></div>
                </div>
                <div className="header__brand">
                  <Link to="/">
                    <h1>MODNIKKY</h1>
                  </Link>
                </div>
                <div className="header__rightSidenav d-flex justify-content-between">
                  <ShoppingBasketIcon className="favoriteIcon" />
                  <FavoriteBorderIcon className="favoriteIcon" />
                </div>
              </div>
            </div>
          </div>
        </nav>  */}
      </div>
    );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.user.currentUser,
  };
}

export default connect(mapStateToProps)(Header)
