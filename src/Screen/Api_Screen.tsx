import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display : flex;
    flex-direction:column;
    align-items:center;
`;

const Content = styled.span`
    font-size: calc(30px + 3vh);
`

function Api_Screen() {
    return(
        <Container>
            <Content>API</Content>
        </Container>
    )
}

export default Api_Screen;