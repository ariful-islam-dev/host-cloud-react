import React from 'react'
import HostingFeature from './HostingFeature'

const HostingPlan = ({ title, price, btnBg, gdBg }) => {
    return (
        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="pricing-item">
                <h4>{title}</h4>
                {gdBg ?
                    <div className={gdBg}>
                        <h6>${price}</h6>
                        <span>monthly</span>
                    </div> :
                    <div className="price">
                        <h6>${price}</h6>
                        <span>monthly</span>
                    </div>
                }
                <p>Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.</p>
                <div className="dev"></div>
                <HostingFeature />
                <a href="#" className={btnBg}>Start Plan</a>
            </div>
        </div>
    )
}

export default HostingPlan
