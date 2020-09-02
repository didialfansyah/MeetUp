import React from 'react'
import PropTypes from 'prop-types'

import "./button.css"
const Button = ({type, value, hide}) => {
    return (
        <button className="btnSubmit" style={{display:hide}} type={type}>{value}</button>
    );
}

Button.prototype = {
    type : PropTypes.oneOf(['submit', 'reset', 'button']),
    value : PropTypes.string,
    hide : PropTypes.string
}

Button.defaultProps = {
    type : 'submit'
}

export default Button