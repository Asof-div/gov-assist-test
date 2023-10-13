import React from 'react'
import { DesktopOnly } from '../../../../styling/breakpoints'
import { Container } from '../../../../styling/layout'
import HeaderLeft from './left' 
import HeaderCenter from './center'
import HeaderRight from './right'
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { ElementColor } from '../../../../constants/colors';


const HeaderStyle = ({children}) => (
    <Flex h='full' w='full' alignItems='center' justifyContent='space-between' py='10px' px={['0px', '20px', '30px', '30px']}>
        {children}
    </Flex>
)
const Wrapper = ({ children, theme }) => (
    <Box
        borderRadius={'20px'}
        bgColor={theme === 'dark' ? ElementColor.primary : 'transparent'}
        position='relative'
        w='full'
    >
        {children}
    </Box>
)

function DesktopHeader(props) {
    const { theme } = props;

    return (
        <DesktopOnly>
            <Wrapper theme={theme} >
                <Container>
                    <HeaderStyle>
                        <HeaderLeft theme={theme} />
                        <Spacer />
                        <HeaderRight
                            theme={theme}
                        />
                    </HeaderStyle>
                </Container>
            </Wrapper>
        </DesktopOnly>
    )
}

export default DesktopHeader