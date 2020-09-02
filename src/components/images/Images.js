import React from 'react'
import PropTypes from 'prop-types'

const Images = ({src, radius, width, height}) => {
    return (
        <img
            src={src}
            style={{borderRadius: radius, width: width, height: height}}
            alt="This Images"
        />
    )
}

Images.prototype = {
    src : PropTypes.string,
    radius : PropTypes.string,
    width : PropTypes.string,
    height : PropTypes.string
}

export default Images