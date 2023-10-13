import { Box, Stack, Image, Text, VStack, HStack, Flex } from '@chakra-ui/react'
import React from 'react'
import { ElementColor } from '../../../../constants/colors'
import { Link, useHistory } from 'react-router-dom'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import moment from 'moment'
import { Container } from "../../../../styling/layout";
import { AiOutlineMail } from 'react-icons/ai'
import { MdDoubleArrow } from 'react-icons/md'
import HeaderLeft from '../../Header/desktop/left'


const links = [
    { name: 'Terms of Service', link: '#' },
    { name: 'Privacy Policy', link: '#' },
    { name: 'Legal Disclaimer', link: '#' },
    { name: 'Refund Policy', link: '#' },
    { name: 'Terms of Use', link: '#' },
]




const UnauthenticatedFooter = () => {
  

    return (
        <Box bgColor={['#002A54', '#001C33' ]} pt="20px" >
            
            <Container>
                <Stack
                    direction='row'
                    flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
                    justifyContent={['space-between', 'space-between', 'space-evenly', 'center']}
                    spacing={[0, 0, 8]}
                    w='full'
                    px={['20px', '40px', '60px', '80px']}
                    pb='40px'
                    fontFamily='Inter'
                >
                    <Flex h='full' w='full' alignItems='center' borderBottomWidth={1} borderBottomColor={ElementColor.white} justifyContent='space-between' px={['0px', '20px', '30px', '30px']}>
                        <HeaderLeft theme={'dark'} />
                        <Stack direction={'row'} color={ElementColor.lightGrey} spacing={'8'} fontSize='14px'>
                            {links.map((list, i) => (
                                <Link to={list.link} key={i}>
                                    <Text color={ElementColor.white} borderBottomWidth={1} borderBottomColor={ElementColor.white} >
                                        {list.name}
                                    </Text>
                                </Link>
                            ))}
                        </Stack>
                    </Flex>
                    
                </Stack>
            </Container>
            
            <Stack
                w='full'
                direction={['column', 'column', 'column', 'row']}
                justify={['space-between']}
                pb='40px'
                px={['20px', '40px', '40px', '80px']}
                spacing={[8, 8, 8, 0]}
                fontFamily='Inter'
            >
                

                <VStack alignItems='start' pt={[5, 0]} spacing={0}>
                    <Text
                        color={ElementColor.white}
                        mb={0}
                        fontWeight={500}
                        fontSize={['14px', '16px']}            
                    >
                        Disclaimer: GovAssist is not affiliated with any United States government agency or department. Costs for consulting services do NOT include any government application, medical examination, filing, or biometric fees. This website does not provide legal advice and we are not a law firm. None of our customer service representatives are lawyers and they also do not provide legal advice. We are a private, internet-based travel and immigration consultancy provider dedicated to helping individuals travel to the United States. You may apply by yourself directly at travel.state.gov or at uscis.gov. GovAssist is affiliated with the UT law firm GovAssist Legal which provides legal services on immigration matters. Only licensed immigration professionals can provide advice, explanation, opinion, or recommendation about possible legal rights, remedies, defenses, options, selection of forms or strategies.
                    </Text>
                </VStack>
            </Stack>

            <Stack
                w='full'
                direction={['column']}
                padding='15px'
                spacing={[8, 8, 8, 0]}
                fontFamily='Inter'
                bgColor={'#011527'}
            >
                <VStack spacing={4}>
                    
                    <Text color={ElementColor.white} fontSize={['12px', "14px", "16px"]}>
                        Copyright © 2016 - {moment().year()} GovAssist, LLC All Rights Reserved 
                    </Text>
                </VStack>

            </Stack>
        </Box>
    )
}

function DesktopFooter() {
    return (
        <React.Fragment>
            <UnauthenticatedFooter />
        </React.Fragment>
    )
}

export default DesktopFooter
