import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import {useQuery} from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function Journal_Screen() {
    const {loading, data} = useQuery(TEST);
    console.log(data);
    return(
        <>
            <Header/>
            <Container>
                <Category>dfdfd</Category>
                <Content>{!loading ? data.test : 'Jourerernal'}</Content>
            </Container>
        </>
    )
}

const TEST = gql`{
    test
}`

const Container = styled.div`
    
`;

const Category = styled.div`
    float:left;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:100px;
    height:100vh;
    width: calc( 150px + 10vw);
    background-color:#f2f2f2;

    @media(max-width:700px) {
        display:none;
    }
`

const Content = styled.span`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size: calc(30px + 3vh);
`

export default Journal_Screen;