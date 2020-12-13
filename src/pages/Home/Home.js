import React from 'react'
import Section from '../../components/section/Section';


import { firstSection, secondSection, thirdSection, fourthSection } from './sectionDetails'

import pic from "../../Assets/store.jpg";
import holdingBag from "../../Assets/first.jpeg";
import blackTop from "../../Assets/blackTop.jpg";


import './Home.css'


const Home = () => {
    return (
      <div>
        <Section
          heading={firstSection.heading}
          background={firstSection.background}
          details={firstSection.details}
          buttonDetails={firstSection.buttondDetails}
        />
        <Section
          heading={secondSection.heading}
          background={secondSection.background}
          details={secondSection.details}
          buttonDetails={secondSection.buttondDetails}
        />
        <section>
          <div className="d-flex showcase__section">
            <img src={pic} className="showcase__image" alt="" />
            <img src={holdingBag} className="showcase__image" alt="" />
            <img src={blackTop} className="showcase__image" alt="" />
          </div>
        </section>
        <Section
          heading={thirdSection.heading}
          background={thirdSection.background}
          details={thirdSection.details}
          buttonDetails={thirdSection.buttondDetails}
        />
        <section>
          <div id="arrival" className="container my-5">
            <h1>New Arrivals</h1>
            <div className="d-flex showcase__newArrivals">
              <img src={blackTop} alt="" />
              <img src={holdingBag} alt="" />
              <img src={pic} alt="" />
              <img src={holdingBag} alt="" />
            </div>
          </div>
        </section>
        <Section
          heading={fourthSection.heading}
          background={fourthSection.background}
          details={fourthSection.details}
          buttonDetails={fourthSection.buttonDetails}
        />
      </div>
    );
}

export default Home
