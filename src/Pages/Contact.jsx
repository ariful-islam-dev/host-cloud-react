import React from 'react'
import AboutContact from '../Pertials/AboutContact'
import Banner from '../Pertials/Banner'
import Footer from '../Pertials/Footer'
import Form from '../Pertials/Form'
import Header from '../Pertials/Header'
import Testimonial from '../Pertials/Testimonial'

function Contact() {
    return (
        <div>
            <Header />
            {/* Banner Area */}
            <Banner other title="Contact Us" />

            {/* <!-- Contact Us Starts Here --> */}
            <div class="contact-us">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <Form />
                        </div>
                        <div class="col-md-6">
                            <AboutContact title="Contact Us" heading="Let's keep in touch" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact Us Ends Here --> */}
            {/* <!-- Testimonials Starts Here --> */}
            <Testimonial/>
            {/* Footer Section  */}
            <Footer />
        </div>
    )
}

export default Contact
