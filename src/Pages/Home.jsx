import React from 'react'
import trustedImage from '../assets/images/trusted-01.png';
import featureImg from '../assets/images/feature-01.png';
import Header from '../Pertials/Header';
import Footer from '../Pertials/Footer';
import Banner from '../Pertials/Banner';
import HostingService from '../Pertials/HostService';
import Testimonial from '../Pertials/Testimonial';
import HostingPrice from '../Pertials/HostingPrice';

function Home() {
    return (
        <div>
            {/* <!-- Header --> */}
            <Header />

            {/* <!-- Page Content --> */}
            {/* <!-- Banner Starts Here --> */}
            <Banner home title="Search Your Domain" />
            {/* <!-- Banner Ends Here --> */}


            {/* <!-- Services Starts Here --> */}
            <HostingService title="Services we provide" />
            {/* <!-- Services Ends Here --> */}


            {/* Pricing Starts Here  */}
            <div className="pricing-section">
                <div className="background-image-pricing">
                </div>
                <HostingPrice/>
            </div>
            {/* Pricing Ends Here  */}


            {/* Features Starts Here  */}
            <div className="features-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <span>Best Quality for you</span>
                                <h2>Cloud Features</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-item">
                                <div className="icon">
                                    <img src={featureImg} alt="" />
                                </div>
                                <h4>Load Balanced</h4>
                                <p>Nulla nisl ex, vehicula in urna nec, commodo consectetur augue. Vivamus nec metus mauris. Praesent lacinia tempus urna.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-item">
                                <div className="icon">
                                    <img src={featureImg} alt="" />
                                </div>
                                <h4>99.9% Uptime Guaranteed</h4>
                                <p>Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-item">
                                <div className="icon">
                                    <img src={featureImg} alt="" />
                                </div>
                                <h4>Top Reliability</h4>
                                <p>Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-item">
                                <div className="icon">
                                    <img src={featureImg} alt="" />
                                </div>
                                <h4>High Security</h4>
                                <p>Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-item">
                                <div className="icon">
                                    <img src={featureImg} alt="" />
                                </div>
                                <h4>Quality Hardwares</h4>
                                <p>Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-item">
                                <div className="icon">
                                    <img src={featureImg} alt="" />
                                </div>
                                <h4>Network Solutions</h4>
                                <p>Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features Ends Here  */}
            {/*  Testimonials Starts Here  */}
            <Testimonial />
            {/* Testimonials Ends Here */}

            {/* Footer Starts Here */}
            <Footer />
            {/* Footer Ends Here */}

        </div>
    )
}

export default Home
