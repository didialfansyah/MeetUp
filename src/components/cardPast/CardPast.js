import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/Button'
import './cardPast.css'

const CardPast = ({dated, content, view}) => {
    return (
        <div className="cardGrid">
            <div className="first"><h3>{dated}</h3></div>
            <p>{content}</p>
            <p>{view} <font color="#00b894">Went</font></p>
            <Button
                type="submit"
                value="View"
            />
        </div>
    );
}

CardPast.prototype = {
    dated : PropTypes.string.isRequired, 
    content : PropTypes.string.isRequired, 
    view : PropTypes.number.isRequired
}

CardPast.defaultProps = {
    dated : "Write Date Here",
    content : "Type Your Content Here",
    view : 0
}

export default CardPast