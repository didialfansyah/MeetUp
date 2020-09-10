import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Images from '../images/Images'
import Button from '../button/Button'

const MeetUp =  styled.div`
    display: flex;
    background: #2d3436;
    color: #fff;
`;

const MeetChild = styled.div`
    margin: 10px;
    font-family: helvetica;
    font-size: 16px;
`;

const Heading = styled.h2`
    font-size: 30px;
`;

const Tab = styled.table``;
const Tr = styled.tr``;
const Td = styled.td`
    padding : ${props => props.first ? "8px 0px" : "8px 50px"};
`;
const CardMeetup = ({heading, listOrder, display, src, radius, width, height, hide}) => {
    console.log(listOrder)
    listOrder.map((element) => console.log(element.nama))
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
                <Heading>{heading}</Heading>
                <ul>
                </ul>
                <Button type="submit" value="Join Us" hide={hide}/>                
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
    display : PropTypes.string, 
    src : PropTypes.string.isRequired, 
    radius : PropTypes.string, 
    width : PropTypes.string, 
    height : PropTypes.string, 
    hide :PropTypes.string
}

CardMeetup.defaultProps = {
    display : "inherit",
    radius : "none",
    width : "100px",
    height : "100px",
    hide : "inherit"
}

export default CardMeetup