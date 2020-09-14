import React from 'react'
import PropTypes from 'prop-types'

import {MeetUp, MeetChild, Title, Tab, Tbd, Tr, Td} from './MeetUp.style'
import Images from '../images/Images'
import Button from '../button/Button'

const CardMeetup = ({heading, listOrder, src, radius, width, height, dis}) => {
    return (
        <MeetUp>
            <MeetChild>
                <Images 
                    src={src}
                    radius={radius}
                    width={width}
                    height={height}
                />
            </MeetChild>
            <MeetChild>
                <Title>{heading}</Title>
                <Tab>
                    <Tbd>
                        {
                            listOrder.map((element) => 
                                <Tr key={element.nama}>
                                    <Td first>{element.nama}</Td>
                                    <Td>{element.data}</Td>
                                </Tr>
                            )
                        }
                    </Tbd>
                </Tab>
                <div style={{display: dis}}>
                    <Button stt="stt" value="Join Us"/> <Button stt="" value="New Member"/>                
                </div>
            </MeetChild>
        </MeetUp>
    );
}

/*htmIn:PropTypes.arrayOf(PropTypes.shape({
    nama:PropTypes.string,
    data:PropTypes.string
}))*/
CardMeetup.propTypes = {
    heading : PropTypes.string.isRequired,
    listOrder : PropTypes.array.isRequired,
    src : PropTypes.string.isRequired, 
    radius : PropTypes.string, 
    width : PropTypes.string, 
    height : PropTypes.string, 
    dis :PropTypes.string
}

CardMeetup.defaultProps = {
    radius : "none",
    width : "100px",
    height : "100px",
    dis : "none"
}

export default CardMeetup