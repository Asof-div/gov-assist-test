import React from 'react'
import { spaceBetweenAndCenter } from './style'
import styled from "styled-components";

const Container = styled.div`
    ${spaceBetweenAndCenter};
    width: 45%;
    font-size: 16px;
    font-weight: 400;
    padding-top: 6px;
`;


function HeaderCenter({ theme }) {
   
    return (
        <React.Fragment>
            <Container colortheme={theme}>
                
            </Container>
        </React.Fragment>
    )
}

export default HeaderCenter