import React from 'react'
import Footer from '../Pertials/Footer'
import Header from '../Pertials/Header'

import ourTeem from '../assets/images/our-team.jpg';
import ourTeem1 from '../assets/images/team-01.jpg';
import ourTeem2 from '../assets/images/team-02.jpg';
import ourTeem3 from '../assets/images/team-03.jpg';
import Banner from '../Pertials/Banner';
import AboutContact from '../Pertials/AboutContact';

function About() {
    return (
        <div>
                {/* <!-- Header --> */}
        <Header />
    {/* <!-- Page Content --> */}
    {/* <!-- Heading Starts Here --> */}
        <Banner other title="About Us"/>
    {/* <!-- Heading Ends Here --> */}


    {/* <!-- About Us Starts Here --> */}
    <div className=" contact-us">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="left-image">
              <img src={ourTeem} alt=""/>
            </div>
          </div>
          <div className="col-md-6">
            <AboutContact title="About Us" heading="Background of our company"/>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- About Us Ends Here --> */}


    {/* <!-- Team Starts Here --> */}
    <div className="team-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="section-heading">
              <span>Our Team</span>
              <h2>Meet the greatest people</h2>
              <p>Integer blandit, tellus varius vulputate cursus, purus orci tincidunt tortor, eget tincidunt elit justo non leo. Donec mollis nulla id est suscipit, ut laoreet nibh faucibus.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="team-item">
              <img src={ourTeem1} alt=""/>
              <div className="down-content">
                <h4>Jonathan Smart</h4>
                <span>Co-Founder</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="team-item">
              <img src={ourTeem2} alt=""/>
              <div className="down-content">
                <h4>Mary Morris</h4>
                <span>Co-Founder</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="team-item">
              <img src={ourTeem3} alt=""/>
              <div className="down-content">
                <h4>George White</h4>
                <span>Co-Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Team Ends Here --> */}




    {/* <!-- Footer Starts Here --> */}
        <Footer/>
    {/* <!-- Footer Ends Here --> */}
        </div>
    )
}

export default About;
