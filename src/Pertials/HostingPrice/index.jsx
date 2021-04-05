import React from 'react'
import HostingPlan from './HostingPlan'

const HostingPrice = () => {
    return (
        <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="section-heading">
                                <h2>Cloud Hosting Plans</h2>
                                <p>Lorem ipsum dolor amet taxidermy sriracha cardigan salvia actually vice migas enamel pin sustainable carry scenester lomo hot chicken farm table actually kinfolk.</p>
                            </div>
                        </div>
                        <HostingPlan title="Basic Cloud 5x"price="15.45" btnBg="main-button" />
                        <HostingPlan title="Cloud VPS 10x"price="30.00" btnBg="gradient-button" gdBg="price price-gradient"/>
                        <HostingPlan title="Advanced Cloud"price="72.25" btnBg="main-button"/>
                       
                        
                    </div>
                </div>
    )
}

export default HostingPrice
