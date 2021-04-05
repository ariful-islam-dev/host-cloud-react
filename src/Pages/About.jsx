import React from 'react'
import Footer from '../Pertials/Footer'
import Header from '../Pertials/Header'

import ourTeem from '../assets/images/our-team.jpg';
import ourTeem1 from '../assets/images/team-01.jpg';
import ourTeem2 from '../assets/images/team-02.jpg';
import ourTeem3 from '../assets/images/team-03.jpg';
import Banner from '../Pertials/Banner';
import AboutContact from '../Pertials/AboutContact';
import TeemMember from '../Pertials/Teem';

function About() {
  return (
    <div>
      {/* <!-- Header --> */}
      <Header />
      {/* <!-- Page Content --> */}
      {/* <!-- Heading Starts Here --> */}
      <Banner other title="About Us" />
      {/* <!-- Heading Ends Here --> */}


      {/* <!-- About Us Starts Here --> */}
      <div className=" contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-image">
                <img src={ourTeem} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <AboutContact title="About Us" heading="Background of our company" />
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
            <TeemMember teemImg={ourTeem1} name="Jonathan Smart" position="Co-Founder" />
            <TeemMember teemImg={ourTeem2} name="Mary Morris" position="Founder" />
            <TeemMember teemImg={ourTeem3} name="George White" position="Share Holder" />

          </div>
        </div>
      </div>
      {/* <!-- Team Ends Here --> */}




      {/* <!-- Footer Starts Here --> */}
      <Footer />
      {/* <!-- Footer Ends Here --> */}
    </div>
  )
}

export default About;
