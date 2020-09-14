import styled from 'styled-components'

export const Btn = styled.button`
    width: 150px;
    padding: 10px;
    margin: 10px 0px;
    border: none;
    background: ${props => props.stt ? "#00b894" : "#2d3436"};
    color : ${props => props.stt ? "#2d3436" : "#00b894"};
    border : 3px solid #00b894;
    font-size: 16px;
    cursor: pointer;
`;