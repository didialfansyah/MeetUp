import React from 'react'
import PropTypes from 'prop-types'

import {Btn} from './button.style'

const Button = ({type, value, stt}) => {
    return (
        <Btn type={type} stt={stt}>{value}</Btn>
    );
}

Button.propTypes = {
    type : PropTypes.oneOf(['submit', 'reset', 'button']),
    value : PropTypes.string.isRequired,
    stt : PropTypes.string
}

Button.defaultProps = {
    type : 'submit',
    hide : "inherit",
    stt : 'stt'
}

export default Button