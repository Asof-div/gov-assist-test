import React from 'react'
import styled from 'styled-components';
import DesktopHeader from './desktop';
import MobileHeader from './mobile'

export const HeaderWrapper = styled.header`
    position: relative;
    z-index: 1002;
    width: '100%';
    font-family: 'Inter', sans-serif;
`;

function Header ({ theme }) {

    return (
        <HeaderWrapper>
            <DesktopHeader
                theme={theme}
            />
            <MobileHeader
                theme={theme}
            />
        </HeaderWrapper>
    )
}

export default Header