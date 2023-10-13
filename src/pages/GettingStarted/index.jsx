import React, { useEffect } from 'react'
import PageMainContainer from '../../common/PageMain/PageMain'
import { ElementColor } from '../../constants/colors';
import { Box, Button, Center, Flex, Image, Text, VStack } from '@chakra-ui/react';
import Header from '../../layouts/components/Header';
import minutes from '../../assets/icon/icon_forward_10_seconds_.svg'
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <PageMainContainer title='GettingStarted' fullPage description='GettingStarted'>
            <Flex width={'full'} position={'absolute'} minH={'full'}>
                <Center
                    position='relative' 
                    w='40%'
                    bgColor={ElementColor.primary}
                    bgSize='cover'
                    bgPos='center'
                    padding={'50px 50px' }
                    paddingTop={'150px'}
                >
                    <VStack alignItems={'flex-start'} justifyContent={'space-evenly'} height={'full'}  spacing={'16'}>
                        <Box>
                            <Text as='h2' lineHeight={1.2} fontWeight='700' fontSize={['54px', '64px']} color={ElementColor.white}>
                                Eletronic 
                                <Text as='h2' lineHeight={1.2} fontWeight='700' fontSize={['54px', '64px']} color={ElementColor.green}>
                                diversity visa 
                                </Text>
                                entry form
                            </Text>
                        </Box>
                        <Box>
                            <Text as='h2' lineHeight={1.2} fontWeight='300' fontSize={['44px', '54px']} color={ElementColor.white}>
                                Here you will fill all your information to reach your dream. 
                            </Text>
                        </Box>
                        <Flex >

                            <Image
                                src={minutes}
                                display={ 'block'}
                                objectFit='contain'
                                h={'24px'}
                                w={'24px'}
                                marginRight={'10px'}

                            />
                            <Text as='h2' lineHeight={1.2} fontWeight='700' fontSize={['14px', '16px']} color={ElementColor.white}>
                                10 minutes to finish
                            </Text>
                        </Flex>
                        <Box borderLeft={'10px solid #F7F8F9'} paddingLeft={'20px'}>
                            <Text as='h2' lineHeight={1.2} fontWeight='400' fontSize={['14px', '16px']} color={ElementColor.white}>
                                This is a full copy of the official DV Lottery application form. Use it for training only. You will need to apply on the official website www.dvlottery.state.gov when it opens to take part in the lottery.
                            </Text>
                        </Box>
                    </VStack>
                </Center>

                <Center 
                    position='relative' 
                    w='60%' px='10%'
                >
                    <VStack alignItems={'flex-start'} spacing={'16'}>
                        <Box>
                            <Text as='h2' lineHeight={1.2} fontWeight='300' fontSize={['44px', '54px']} color={ElementColor.primary}>
                                Are you ready to begin?
                            </Text>
                        </Box>
                        <Box w="full" >
                            <Link to="/lottery-form">
                                <Button w="full" lineHeight={1.2} fontWeight='800' fontSize={'24px'} bgColor={ElementColor.green} color={ElementColor.white}>
                                    Start!
                                </Button>
                            </Link>
                            
                        </Box>
                    </VStack>
                
                </Center>
                <Box position={'absolute'} width='full'>
                    <Header  />
                </Box>
            </Flex>
        </PageMainContainer>
    )
}

export default Page;