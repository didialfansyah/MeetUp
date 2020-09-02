import React from 'react'
import PropTypes from 'prop-types'

import Images from '../images/Images'
import Button from '../button/Button'
import './cardMeetUp.css'

const CardMeetup = ({heading, htmIn, display, src, radius, width, height, hide}) => {
    return (
        <div className="cardmeetup">
            <div style={{display:display}}>
                <Images 
                    src={src}
                    radius={radius}
                    width={width}
                    height={height}
                />
            </div>
            <div>
                <h2>{heading}</h2>
                <div>
                    {htmIn}
                </div>
                <Button type="submit" value="Join Us" hide={hide}/>
            </div>
        </div>
    );
}

CardMeetup.prototype = {
    heading : PropTypes.string.isRequired,
    htmlIn : PropTypes.element.isRequired,
    display : PropTypes.string, 
    src : PropTypes.string, 
    radius : PropTypes.string, 
    width : PropTypes.string, 
    height : PropTypes.string, 
    hide :PropTypes.string
}

CardMeetup.defaultProps = {
    heding : "Type Heading Here",
    htmlIn : <p>Type Content Here....</p>
}

export default CardMeetup