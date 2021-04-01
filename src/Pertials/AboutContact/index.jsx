import React from 'react'

function AboutContact({title, heading}) {
    return (
        <div class="right-content">
            <div class="section-heading">
                <span>{title}</span>
                <h2>{heading}</h2>
                <p>Quisque sagittis blandit sapien et elementum. Fusce pretium viverra consequat. Aliquam at feugiat mi. Pellentesque hendrerit, felis ac sodales commodo.</p>
            </div>
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <ul>
                        <li><i class="fa fa-phone"></i> 010-020-0560</li>
                        <li><i class="fa fa-support"></i> support@company.com</li>
                    </ul>
                </div>
                <div class="col-md-6 col-sm-12">
                    <ul>
                        <li><i class="fa fa-envelope"></i> contact@company.com</li>
                        <li><i class="fa fa-globe"></i> www.company.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutContact
