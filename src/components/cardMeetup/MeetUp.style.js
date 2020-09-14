import styled from 'styled-components'

export const MeetUp =  styled.div`
    display: flex;
    background: #2d3436;
    color: #fff;
`;

export const MeetChild = styled.div`
    margin: 10px;
    font-family: helvetica;
    font-size: 16px;
`;

export const Title = styled.h2`
    font-size: 30px;
`;

export const Tab = styled.table``;
export const Tbd = styled.tbody``;
export const Thd = styled.thead``;
export const Tr = styled.tr``;
export const Td = styled.td`
    padding : ${props => props.first ? "8px 0px" : "8px 50px"};
`;