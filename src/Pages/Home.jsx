import React from 'react'
import trustedImage from '../assets/images/trusted-01.png';
import featureImg from '../assets/images/feature-01.png';
import Header from '../Pertials/Header';
import Footer from '../Pertials/Footer';
import Banner from '../Pertials/Banner';
import HostingService from '../Pertials/HostService';
import Testimonial from '../Pertials/Testimonial';

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
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="section-heading">
                                <h2>Cloud Hosting Plans</h2>
                                <p>Lorem ipsum dolor amet taxidermy sriracha cardigan salvia actually vice migas enamel pin sustainable carry scenester lomo hot chicken farm table actually kinfolk.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing-item">
                                <h4>Basic Cloud 5x</h4>
                                <div className="price">
                                    <h6>$15.50</h6>
                                    <span>monthly</span>
                                </div>
                                <p>Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.</p>
                                <div className="dev"></div>
                                <ul>
                                    <li><i className="fa fa-check"></i>500 GB Storage Space</li>
                                    <li><i className="fa fa-check"></i>3 TB Data Transfer</li>
                                    <li><i className="fa fa-check"></i>Basic Managed Panel</li>
                                    <li><i className="fa fa-check"></i>24/7 Fast Support</li>
                                    <li><i className="fa fa-check"></i>100 Premium Themes</li>
                                    <li><i className="fa fa-check"></i>Cancel or Upgrade Anytime</li>
                                </ul>
                                <a href="#" className="main-button">Start Plan</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing-item">
                                <h4>Cloud VPS 10x</h4>
                                <div className="price price-gradient">
                                    <h6>$30.00</h6>
                                    <span>monthly</span>
                                </div>
                                <p>Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.</p>
                                <div className="dev"></div>
                                <ul>
                                    <li><i className="fa fa-check"></i>1 TB Cloud Space</li>
                                    <li><i className="fa fa-check"></i>8 TB Data Transfer</li>
                                    <li><i className="fa fa-check"></i>Fully Managed Panel</li>
                                    <li><i className="fa fa-check"></i>15-minute Quick Support</li>
                                    <li><i className="fa fa-check"></i>Unlimted Web Addons</li>
                                    <li><i className="fa fa-check"></i>Cancel or Upgrade Anytime</li>
                                </ul>
                                <a href="#" className="gradient-button">Select Plan</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing-item">
                                <h4>Advanced Cloud</h4>
                                <div className="price">
                                    <h6>$72.25</h6>
                                    <span>monthly</span>
                                </div>
                                <p>Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.</p>
                                <div className="dev"></div>
                                <ul>
                                    <li><i className="fa fa-check"></i>4 TB Cloud Space</li>
                                    <li><i className="fa fa-check"></i>20 TB Data Transfer</li>
                                    <li><i className="fa fa-check"></i>Fully Managed Panel</li>
                                    <li><i className="fa fa-check"></i>15-minute Quick Support</li>
                                    <li><i className="fa fa-check"></i>Top Notch Web Apps</li>
                                    <li><i className="fa fa-check"></i>Advanced Scalable</li>
                                </ul>
                                <a href="#" className="main-button">Take it now</a>
                            </div>
                        </div>
                    </div>
                </div>
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
            {/* <!-- Testimonials Starts Here --> */}
            <Testimonial />
            {/* <!-- Testimonials Ends Here --> */}




            {/* Footer Starts Here */}
            <Footer />
            {/* Footer Ends Here */}

        </div>
    )
}

export default Home
