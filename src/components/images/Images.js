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

Images.propType = {
    src : PropTypes.string.isRequired,
    radius : PropTypes.string,
    width : PropTypes.string,
    height : PropTypes.string
}

Images.defaultProps = {
    radius : "none",
    width : "100px",
    height : "100px"
}

export default Images