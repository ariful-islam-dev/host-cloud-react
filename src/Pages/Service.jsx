import React from 'react'
import Banner from '../Pertials/Banner';
import Footer from '../Pertials/Footer'
import Header from '../Pertials/Header'
import HostingService from '../Pertials/HostService';
import Testimonial from '../Pertials/Testimonial';

function Service() {
    return (
        <div>
            {/* <!-- Header --> */}
            <Header />
            {/* <!-- Footer Starts Here --> */}

            {/* <!-- Heading Starts Here --> */}
            <Banner other title="Our Service" />
            {/* <!-- Heading Ends Here --> */}
            {/* <!-- Services Starts Here --> */}
            <HostingService title="Best Services We Provide" />
            {/* <!-- Services Ends Here --> */}
            {/* <!-- Testimonials Starts Here --> */}
            <Testimonial />
            {/* <!-- Testimonials Ends Here --> */}

            <Footer />
            {/* <!-- Footer Ends Here --> */}
        </div>
    )
}

export default Service;
