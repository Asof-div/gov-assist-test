import { HStack, Box, Spacer, Text, VStack, Flex, Stack, useDisclosure, Card, CardBody, ListItem, ListIcon, List, Image } from '@chakra-ui/react'
import React, { useMemo, useState } from 'react'
import { MdCheckCircle, MdDoubleArrow, MdSettings } from 'react-icons/md'
import DesktopBack from "../../../assets/img/Home.svg"
import { useHistory } from 'react-router-dom'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import Header from '../../../layouts/components/Header'
import { ElementColor } from '../../../constants/colors'
import { CountDown } from './CountDown'
import { GreenCardForm } from './GreenCardForm'
import people from '../../../assets/icon/icon_people_.svg'
import medal from '../../../assets/icon/icon_medal_star_.svg'
import wallet from '../../../assets/icon/icon_wallet_check_.svg'
import clock from '../../../assets/icon/icon_clock_.svg'
import message from '../../../assets/icon/icon_message_.svg'
import lovely from '../../../assets/icon/icon_lovely_.svg'



const CustomListItem = ({title, icon}) => {
    return (
        <ListItem color={ElementColor.white} fontSize={'md'} display={'flex'} spacing='10px' flexDirection={'row'}>
            <Image
                src={icon}
                display={ 'block'}
                objectFit='contain'
                h={'24px'}
                w={'24px'}
                marginRight={'10px'}

            />
            {title}
        </ListItem>
    )
}

const HomeSearchScreen = () => {

    return (
        <React.Fragment>
            <Box
                bgImg={DesktopBack}
                bgRepeat='no-repeat'
                bgPosition='center'
                minHeight="1000px"
                bgSize='cover'
                objectFit='cover'
            >
                <VStack spacing={[ 8, 6 ]} pt={'40px'} padding="40px" minH={['45vh', '60vh', 'auto']} as='section'>
                    <Box width='full'>
                        <Header theme='dark' />
                    </Box>
                    <Flex
                        justify='center'
                        width={'100%'}
                        maxWidth={'1400px'}
                        py={14}
                    >
                        <Flex padding='10px'>
                            <VStack alignItems='flex-start' spacing={'14'}>
                                <Box>
                                    <Text fontWeight={'700'} lineHeight='68px' fontSize='6xl' color={ElementColor.white}>
                                    <Text  color={ElementColor.green}>Win the right to live </Text>
                                    in the USA!</Text>
                                </Box>
                                <Box display='flex'>
                                    <Box borderLeft="3px solid gray" paddingLeft='5px' maxWidth='250px' minHeight='100%'><Text textAlign='left' lineHeight='29px' fontSize="2xl" color="white">The official deadline is running, so hurry up and apply here!</Text></Box>
                                    <Box> 
                                        <CountDown />
                                    </Box>
                                </Box>
                                <Box>

                                                
                                    <List spacing={3}>
                                        <CustomListItem
                                            icon={people} 
                                            title='50,000 people and their families will Live, Work and Study in USA.' 
                                        />

                                        <CustomListItem
                                            icon={medal} 
                                            title='OFFICIAL USA Governmental program.' 
                                        />
                                        <CustomListItem
                                            icon={wallet} 
                                            title='Your chance to LIVE, WORK & STUDY in USA.' 
                                        />
                                        <CustomListItem
                                            icon={clock} 
                                            title='Simple registration within 5 minutes.' 
                                        />
                                        <CustomListItem
                                            icon={message} 
                                            title='Personal support in every step.' 
                                        />
                                        <CustomListItem
                                            icon={lovely} 
                                            title='Double chance for married people to win the Green Card.' 
                                        />
                                    </List>
                                </Box>
                            </VStack>
                        </Flex>

                        <Spacer />

                        <Flex padding='10px' flex={1} minW={'lg'} >
                            <Card flex={1}>
                            <CardBody>
                                <GreenCardForm />
                            </CardBody>
                            </Card>
                        </Flex>
                    </Flex>
                </VStack>
            </Box>

        </React.Fragment>
    )
}

export default HomeSearchScreen