import React from 'react'


import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from '@material-ui/icons/Twitter'


import './Footer.css'

const Footer = () => {
    return (
      <div className="footer  ">
        <div className="container">
          <div className="footer__subscribtion my-5">
            <div className="row justify-content-center">
              <div className="col-12">
                <p className="subscribtion__header">Sign up for updates</p>
              </div>
              <div className="col-12">
                <p>
                  Sign up for exclusives early sale access and tailored arrivals
                </p>
              </div>
              <div className="col-12">
                <div className="form__content container">
                  <form action="" className="row justify-content-between align-items-center">
                    <input
                      className="shadow p-2 col-sm-12 col-md-10"
                      type="email"
                      placeholder="your email address"
                    />
                    <button className="shadow col-sm-12 col-md-2 mb-lg-3 mt-2 p-2">
                      Join
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* footer links */}

            <div className="col-sm-12 col-md-3 col-lg-3">
              <h3 className="footerLinks__header">Customer Service</h3>
              <p className="footerLinks">contact</p>
              <p className="footerLinks">Track order</p>
              <p className="footerLinks">Delivery & returns</p>
              <p className="footerLinks">payment</p>
              <p className="footerLinks">Make a return</p>
              <p className="footerLinks">faq</p>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <h3 className="footerLinks__header">Info</h3>
              <div>
                <p className="footerLinks">Gift vouchers</p>
                <p className="footerLinks">Size Guide</p>
                <p className="footerLinks">Career at BuyNow</p>
                <p className="footerLinks">about us</p>
                <p className="footerLinks">legal policies</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <h3 className="footerLinks__header">Follow US</h3>
              <div>
                <div className="d-flex">
                  <FacebookIcon />
                  <p className="footerLinks">Facebook</p>
                </div>
                <div className="d-flex">
                  <TwitterIcon />
                  <p className="footerLinks">twitter</p>
                </div>
                <div className="d-flex">
                  <InstagramIcon />
                  <p className="footerLinks">Instagram</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <h3 className="footerLinks__header">Contact us</h3>
              <div>
                <p className="footerLinks">hello@BuyNow.com</p>
                <p className="footerLinks">+79 1090 190</p>
                <p className="footerLinks">visit us at Jumbo way</p>
              </div>
            </div>
          </div>
        </div>
        {/* footer subscribtion section */}
      </div>
    );
}

export default Footer
