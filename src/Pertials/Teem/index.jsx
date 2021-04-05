import React from 'react'

const TeemMember = ({teemImg, name, position}) => {
    return (
        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="team-item">
              <img src={teemImg} alt=""/>
              <div className="down-content">
                <h4>{name}</h4>
                <span>{position}</span>
              </div>
            </div>
          </div>
    )
}

export default TeemMember
