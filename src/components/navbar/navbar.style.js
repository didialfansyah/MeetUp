import styled from 'styled-components'

export const Nav = styled.div`
    width: 100%;
    background: #2d3436;
`;

export const Navbars = styled.ul`
    width: 100%;
    list-style: none;
    color: #fff;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: inline-block;
    padding: 20px 0px;
    margin-top: -5px;
    &:last-child {
        float: right;
        padding: 29px 0px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: #fff;
    padding: 25px 20px 22px 20px;
    &:hover {
        background: #00b894;
        transition: all 0.5s ease
    }
    ${Item}:first-child & {
        font-size: 24px;
        font-weight: bold;
        padding: 12px 20px;
        color: #00b894;
        background : #2d3436;
    }
`