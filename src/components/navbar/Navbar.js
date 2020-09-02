import React from 'react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = ({list}) => {
    return (
        <div className="nav">
            <ul className="navbar">
                {
                    list.map((show) => 
                        <li key={show}><a href=":blank">{show}</a></li>
                    )
                }
            </ul>
        </div>
    );
}

Navbar.prototype = {
    list : PropTypes.array,
}

export default Navbar