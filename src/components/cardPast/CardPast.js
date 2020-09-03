import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/Button'
import './cardPast.css'

const CardPast = ({data}) => {
    return (
        
            data.map((show) =>
                <div className="cardGrid" key={show.date}>
                    <div className="first"><h3>{show.date}</h3></div>
                    <p>{show.content}</p>
                    <p>{show.view} <font color="#00b894">Went</font></p>
                    <Button
                        type="submit"
                        value="View"
                    />
                </div>
            )
        
    );
}

CardPast.propTypes = {
    data : PropTypes.array.isRequired,
}

export default CardPast