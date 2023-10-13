import React, { useEffect } from 'react'
import PageMainContainer from '../../common/PageMain/PageMain'
import { ElementColor } from '../../constants/colors';
import { Box, Button, Center, Flex, FormControl, FormLabel, HStack, Image, SimpleGrid, Step, StepIcon, StepIndicator, StepSeparator, StepStatus, StepTitle, Stepper, Text, VStack, useSteps } from '@chakra-ui/react';
import Header from '../../layouts/components/Header';
import minutes from '../../assets/icon/Frame 166.svg'
import left from '../../assets/icon/icon_arrow right 1_.svg'
import right from '../../assets/icon/icon _arrow right 1_ (1).svg'
import PhoneInput from 'react-phone-input-2';
import { Input, Select } from '../../common/form';


const steps = [
    { title: 'Name' },
    { title: 'Contact Information'},
    { title: 'Gender'},
    { title: 'Birth Information'},
    { title: 'Country of Eligibility'},
    { title: 'Photograph'},
    { title: 'Mailing Address'},
    { title: 'Additional Information'},
    { title: 'Payment'},
]


const Page = () => {

    const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
        index: 1,
        count: steps.length,
    });


    return (
        <PageMainContainer title='GettingStarted' fullPage description='GettingStarted'>
            <Flex width={'full'} position={'absolute'} minH={'full'}>
                <Center
                    position='relative' 
                    w='30%'
                    bgColor={ElementColor.primary}
                    bgSize='cover'
                    bgPos='center'
                    padding={'50px 50px' }
                    paddingTop={'150px'}
                >
                    <VStack alignItems={'flex-start'} justifyContent={'space-evenly'} height={'full'}  spacing={'16'}>
                        <Stepper border='1px solid gray.500' height={'full'} colorScheme='blue' shadow='base' py={4} index={activeStep} orientation='vertical' minH='500px' gap='0'>
                            {steps.map((step, index) => (
                                <Step key={index} >
                                    <StepIndicator>
                                    </StepIndicator>

                                    <Box marginBottom={10} maxWidth={150}>
                                        <StepTitle color={ElementColor.white}>{step.title}</StepTitle>
                                    </Box>

                                    <StepSeparator />
                                </Step>
                            ))}
                        </Stepper>
                    </VStack>
                </Center>

                <Center 
                    position='relative' 
                    w='70%' 
                    px='50px'
                >
                    <VStack width='full' alignItems={'flex-start'} spacing={'16'}>
                    {activeStep == 0 ?

                        <Box >
                            <SimpleGrid flexDirection='row' columns={'2'} spacing='4'>
                                <Input 
                                    labelColor={'#01264A'}
                                    labelFontSize={['44px']}
                                    name="first_name"
                                    label="2.0. First Name"
                                    placeholder="First Name"
                                />
                                <Input 
                                    labelColor={'#01264A'}
                                    labelFontSize={['44px']}
                                    name="last_name"
                                    label="Last Name"
                                    placeholder="Last Name"
                                />

                            </SimpleGrid>

                        </Box> : null }

                    {activeStep == 1 ?
                         <Box >
                            <SimpleGrid flexDirection='row' columns={1} spacing='4'>
                                <FormControl >
                                    
                                    <FormLabel
                                        htmlFor={'contact'}
                                        color={'#01264A'}
                                        mb={1}
                                        fontSize={['54px']}
                                    >
                                        2.1. - Phone number
                                    </FormLabel>
                                
                                    <PhoneInput 
                                        name="contact"
                                        placeholder="Contact"
                                    />
                                </FormControl>
                                
                            </SimpleGrid>

                        </Box> : null }

                    {activeStep == 2 ?
                         <Box >
                            <SimpleGrid flexDirection='row' columns={1} spacing='4'>
                                <Select 
                                    width="full"
                                    labelColor={'#01264A'}
                                    labelFontSize={['44px']}
                                    label={"2.2. - Gender"}
                                    name="gender"
                                    placeholder="Gender"
                                    options={['MALE', 'FEMALE']}
                                />
                            </SimpleGrid>

                        </Box> : null }


                        <HStack width={'full'} spacing={1} mt={8} justifyContent={'flex-end'}>
                            
                            <Button
                                variant='solid'
                                bgColor='#01264A'
                                borderWidth={'2px'}
                                borderColor={ElementColor.primary}
                                onClick={goToPrevious}
                                borderRightRadius={0}
                            > 
                                <Image
                                    src={left}
                                    width={'24px'}
                                />
                            </Button>

                            <Button
                                variant='solid'
                                bgColor='#01264A'
                                borderWidth={'2px'}
                                borderColor={ElementColor.primary}
                                onClick={goToNext}
                                borderLeftRadius={0}
                            >
                                <Image
                                    src={right}
                                    width={'24px'}
                                />
                            </Button>


                        </HStack>
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