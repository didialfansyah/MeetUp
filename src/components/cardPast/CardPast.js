import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/Button'
import {CardGrid, First} from'./cardPast.style.js'

const CardPast = ({data}) => {
    return (
        
            data.map((show) =>
                <CardGrid>
                    <First><h3>{show.date}</h3></First>
                    <p>{show.content}</p>
                    <p>{show.view} <font color="#00b894">Went</font></p>
                    <Button
                        type="submit"
                        value="View"
                        stt = {show.stt}
                    />
                </CardGrid>
            )
        
    );
}

CardPast.propTypes = {
    data : PropTypes.array.isRequired,
}

export default CardPast