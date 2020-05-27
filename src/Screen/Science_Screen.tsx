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

function Science_Screen() {
    return(
        <Container>
            <Content>Science</Content>
        </Container>
    )
}

export default Science_Screen;