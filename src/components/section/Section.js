import React from 'react'

import Button from '../../components/button/Button'
import './Section.css'

const Section = ({ heading, details, buttonDetails, background }) => {
  return (
    <div className="">
      <section>
        <div
          className="section__container"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container">
            <div className="section__contentBox">
              <h1>{heading}</h1>
              <p> {details}</p>
              <Button button={buttonDetails} buttonType="button" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section
