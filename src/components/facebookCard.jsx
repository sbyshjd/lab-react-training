import React from 'react';
import './facebookCard.css'

const FacebookCard = props => {
    let backgroundColor = {};
    if(props.isSelected) {
        backgroundColor={backgroundColor:'blue'}
    }
    return (
        <div className='facebook-card'style={backgroundColor}>
            <div>
                <img src={props.img} alt="profile"/>
            </div>
            <div>
                <p><strong>First Name:</strong>{props.firstName}</p>
                <p><strong>Last Name:</strong>{props.lastName}</p>
                <p><strong>Country:</strong>{props.country}</p>
                <p><strong>Type:</strong>{props.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
        </div>
    )
}

export default FacebookCard;