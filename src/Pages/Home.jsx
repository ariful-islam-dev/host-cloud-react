import React from 'react'
import trustedImage from '../assets/images/trusted-01.png';
import featureImg from '../assets/images/feature-01.png';
import Header from '../Pertials/Header';
import Footer from '../Pertials/Footer';
import Banner from '../Pertials/Banner';
import HostingService from '../Pertials/HostService';
import Testimonial from '../Pertials/Testimonial';
import HostingPrice from '../Pertials/HostingPrice';
import CloudFeature from '../Pertials/CloudFeature';

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
                        <CloudFeature fetureImg={featureImg} title="Load Balanced" body="Nulla nisl ex, vehicula in urna nec, commodo consectetur augue. Vivamus nec metus mauris. Praesent lacinia tempus urna."/>
                        <CloudFeature fetureImg={featureImg} title="99.9% Uptime Guaranteed" body="Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester."/>
                        <CloudFeature fetureImg={featureImg} title="Top Reliability" body="Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester."/>
                        <CloudFeature fetureImg={featureImg} title="High Security" body="Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester."/>
                        <CloudFeature fetureImg={featureImg} title="Quality Hardwares" body="Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester."/>
                        <CloudFeature fetureImg={featureImg} title="Network Solutions" body="Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester."/>
                        
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
