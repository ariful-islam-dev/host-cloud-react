import React from 'react'

const CloudFeature = ({fetureImg, title, body}) => {
    return (
        <div className="col-md-6">
        <div className="feature-item">
            <div className="icon">
                <img src={fetureImg} alt="" />
            </div>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    </div>
    )
}

export default CloudFeature
