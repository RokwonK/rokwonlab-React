import React, { useState } from 'react';
import styled from 'styled-components';
import dotenv from 'dotenv';
import Logintab from '../Components/Logintab';
import Clock from 'react-live-clock';
import { NavLink } from 'react-router-dom';

import use from '../Components/Useful';
import "../Components/Header.css";
import Background from '../image/city.jpeg';

dotenv.config();

function Main_Screen() {

    return(
        <Content>
            <Titleview>
                <Time className="main_title">
                    <Clock format={'HH:mm'} ticking={true} timezone={'Asia/Seoul'}/>
                </Time>
                <Title className="main_title">
                    Rokwon's Lab
                </Title>

                <Title_big>The Realist</Title_big>
                <Title_small>dreaming an  impossible dream</Title_small>

                <Logintitle> Login with </Logintitle>
                <Login> <Logintab /> </Login>

                <Menutitle>View</Menutitle>
                <Menu className="menu" >
                    <NavLink exact to="/about" className="main_item_">About</NavLink>
                    <NavLink exact to="/journal" className="main_item_" >Journal</NavLink>
                    <NavLink exact to="/api" className="main_item_" >API</NavLink>
                    <NavLink exact to="/science" className="main_item_end">Science</NavLink>
                </Menu>   
                
            </Titleview>
        </Content>
    )
}

const Content = styled.div`
    background-image: url( ${Background} );
    width:100vw;
    height:100vh;
    background-size:cover;
    /*overflow-x: hidden;*/
`;

const Titleview = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;  
`;

const Title = styled.div`
    font-size: calc(2vh + 2vw);
    position: absolute;
    color:white;
    top:0;
    left:0;
    padding-top:1vh;
    padding-left:1vw;


`;

const Time = styled.div`
    position: absolute;
    color:white;
    
    font-size: calc(1.5vw + 1.5vh);
    padding-top:1vh;
    padding-right:1vw;
    top:0;
    right:0;
`

const Title_big = styled.span`
    color:white;
    font-size: calc(4.2vh + 4.2vw);
    font-weight:700;
`;

const Title_small = styled.span`
    color:white;
    font-size: calc(2vh + 2vw);
    padding-bottom: 30px;
`;

const Logintitle = styled.span`
    color:white;
    font-size:1vw;
    padding-bottom:5px;
`;

const Login = styled.div`
    color:white;
    padding-bottom:50px;
    border-bottom:solid;
    border-color:white;
`;

const Menutitle = styled.div`
    color:white;
    font-size: calc(2vh + 2vw);
    padding-bottom:20px;
    padding-top:50px;
`

const Menu = styled.div`
    display:flex;
    flex-direction:row;
    
    .main_item_,
    .main_item_end{
        text-decoration:none;
        color : white;
        font-size: calc(20px + 1vw);
    }
    .main_item_{
        padding-right:5vw;
    }
    .main_item_:hover,
    .main_item_end:hover{
        color:${use.maincolor};
    }

    @media (max-width:1000px) {
        

    }


`;

export default Main_Screen;