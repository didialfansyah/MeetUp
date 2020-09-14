import React from 'react'
import PropTypes from 'prop-types'

import {CardDef, Link} from './cardDefault.style.js'

const CardDefault = ({heading, link, content}) => {
    return (
        <CardDef>
            <h3>{heading}</h3>
            <Link href={link}>Getting Start...</Link>
            <p>
                {content}
            </p>
        </CardDef>
    );
}

CardDefault.propTypes = {
    heading : PropTypes.string.isRequired,
    link : PropTypes.string,
    content : PropTypes.string.isRequired
}

CardDefault.defaultProps = {
    link : "https://www.facebook.com/mighty.didi/"
}

export default CardDefault