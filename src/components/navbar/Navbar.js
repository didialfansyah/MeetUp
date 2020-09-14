import React from 'react'
import PropTypes from 'prop-types'

import {Nav, Navbars, Item, Link} from './navbar.style.js'

const Navbar = ({list}) => {
    return (
        <Nav>
            <Navbars>
                {
                    list.map((show) => 
                        <Item key={show}><Link href=":blank">{show}</Link></Item>
                    )
                }
            </Navbars>
        </Nav>
    );
}

Navbar.propTypes = {
    list : PropTypes.array.isRequired,
}

export default Navbar