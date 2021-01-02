import React from 'react'


import './Section.css'

const Section = ({ heading, details, background }) => {
  return (
    <div className="" style={{ backgroundColor: "black" }}>
      <section>
        <div
          className="section__container "
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container">
            <div className="section__contentBox" style={{ color: "white" }}>
              <h1>{heading}</h1>
              <p> {details}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section
