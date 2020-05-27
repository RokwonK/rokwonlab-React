import React, { useState,useEffect } from 'react';
import {NavLink} from 'react-router-dom';

import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import use from './Useful';
import './Header.css';
import {FiMenu} from 'react-icons/fi'; //햄버거 메뉴바

const MainMenu = () => {
    return (
        <Menu className="menu" >
            <Subhead className="littlemenu"> <NavLink exact to="/about" className="item_" activeClassName="item_active" >About</NavLink> </Subhead>
            <Subhead className="littlemenu"> <NavLink exact to="/journal" className="item_" activeClassName="item_active">Journal</NavLink></Subhead>
            <Subhead className="littlemenu"> <NavLink exact to="/api" className="item_" activeClassName="item_active">API</NavLink></Subhead>
            <Subhead className="littlemenu"> <NavLink exact to="/science" className="item_" activeClassName="item_active">Science</NavLink></Subhead>
        </Menu>
    )
}

function Header() {
    
    const [Window_width, setWindow_width] = useState(window.innerWidth);
    const [Menu_visible, setMenu_visible] = useState(false);
    
    useEffect( () => {
        function handleResize() {
            setWindow_width(window.innerWidth);
            if (window.innerWidth > 700)
                setMenu_visible(false);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); 

    return (
        <All>
            <Container>
                <Title className="header_title">Rokwon's Lab</Title>
                {Window_width > 700 ? <MainMenu/> :  <button className="menu-icon" onClick={ ()=>setMenu_visible(!Menu_visible)}>menu</button>  }
            </Container>

            <CSSTransition
                in={Menu_visible}
                timeout={400}
                classNames="showmenu"
                unmountOnExit
                appear
                >
                <MainMenu/>
            </CSSTransition>
        
        </All>
    )
};

const All = styled.div`

    position: relative;
    width:100vw;
    top: 0;
    left: 0;
    right: 0;
    
    border-bottom:0.7mm ridge rgb(0,0,0,1);

    @media (max-width: 700px) {
        .littlemenu {
            border-bottom:solid;
            border-bottom-width:thin;
            padding-top:7px;
            padding-bottom:7px;
            border-bottom-color:#e6e6e6;
            font-weight:normal;
            background-color:white;
            opacity:0.7;
        }
        .menu {
            display:flex;
            flex-direction:column;
            text-align:center;
            height:170px;
            overflow:hidden;
        }
        .item_active {
            margin-left:0px;
            margin-right:0px;
            padding-top:10px;
            padding-bottom:10px;
            padding-left:0px;
            border-bottom:none;
            font-weight:bold;
            color:${use.maincolor}; 
        }
        .item_:hover {
            color:${use.maincolor}; 
        }
        .showmenu-enter, 
        .showmenu-appear{
            top:0;
            max-height: 0px;
        }

        .showmenu-enter-active, 
        .showmenu-appear-active  {
            top:120px;
            max-height: 170px;
            transition: all 400ms;
        }
        .showmenu-exit {
            top:120px;
            max-height : 170px;
        }
        .showmenu-exit-active {
            top:0;
            max-height:0px;
            transition: all 400ms ;
        }
    }

`;

const Container = styled.div`
    height : calc(40px + 3vh);
    background-color:${use.backcolor}; 
    display : flex;
    flex-direction: row;    
    align-items:center;
    justify-content:space-between;
    padding-left:calc(5vw + 10px);
    padding-right:calc(2vw + 10px);

    .menu-icon{
        background-color: #4f953b;
        font-size: 20px;
        height:55%;
        font-weight: bold;
        color: white;
        border: none;
        margin-right: 10px;
        border-radius: 5px;
    }

`;

const Title = styled.span`
    color:black;
    font-size: calc(25px + 1vh);  
`;

const Menu = styled.div`

`;

const Subhead = styled.span`
    margin-left:2vw;
    margin-right:10px;
    font-size : calc(10px + 1vh);
`;

export default Header;