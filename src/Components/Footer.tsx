import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Footer() {
    return (
        <Content>
            <Path>
                <Child>ⓒ 2020. Rokwon All Rights Reserved.</Child>
            </Path>
        </Content>
    )
}

const Content = styled.footer`
    align-items:center;
    justify-content:center;

    position:relative;
    bottom:0;
    width:100vw;
    height: 60px;
    background:#1a1a1a;
    color:white;
    text-align:center;
    display:flex;
    
`
const Path = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const Child = styled.div`
    font-weight:normal;
`



export default Footer;