import React from 'react'
import styled from 'styled-components'

const Footers = styled.div`
    width:87%;
    margin:0 auto;
    text-align:center;
    padding:30px 0px;
    border-top:1px solid #000;
    margin-top:50px
`;
const Footer = () => {
    return (
        <Footers>Copyright Hacktiv8 2020</Footers>
    )
}

export default Footer