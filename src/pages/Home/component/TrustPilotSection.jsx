import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Spacer,
  Stack,
  Text,
  VStack,
  WrapItem,
} from '@chakra-ui/react';
import { Container } from '../../../styling/layout';
import { ElementColor } from '../../../constants/colors';
import star from '../../../assets/icon/icon_star_.svg';
import trust_pilot from '../../../assets/icon/trust_pilot.svg';
import undraw_personal_opinions from '../../../assets/icon/undraw_personal_opinions.svg';
import { GoLocation } from 'react-icons/go';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { renderRating } from '../../../utils/rating';
import { preferDateFormat } from '../../../utils/utils';

const Wrapper = ({ children }) => (
  <Box
    p="50px 0px"
    bgColor={'#FFFFFF'}
    bgRepeat="no-repeat"
    bgPosition="center"
    bgSize="cover"
    objectFit="cover"
  >
    {children}
  </Box>
);

const TrustPilotSection = () => {
  return (
    <Wrapper>
      <Container>
        <Stack as="section" py="15px" px={['6', '8', '50px']}>
          <VStack alignItems={'flex-start'} mb={['4', '6', '40px']}>
            <Flex>
              <Image
                src={star}
                display={'block'}
                objectFit="contain"
                h={'24px'}
                w={'24px'}
                marginRight={'10px'}
              />
              <Text
                as="h5"
                fontWeight={700}
                fontSize={['20px', '22px', '24px']}
                lineHeight={1.2}
                color={ElementColor.darkText}
              >
                Our Jobs Speaks for Ourselves
              </Text>
            </Flex>
          </VStack>
          <Flex
            justify="center"
            width={'100%'}
            maxWidth={'1400px'}
            borderBottomColor={'#DBDBDB'}
            borderBottomWidth={'1px'}
            flexDirection={['column', 'row']}
          >
            <Flex padding="10px">
              <VStack alignItems="flex-start" spacing={'7'}>
                <VStack width={'full'} alignItems={'flex-end'}>
                  <Flex
                    borderBottomColor={'#DBDBDB'}
                    borderBottomWidth={'1px'}
                    width={'full'}
                    py="5px"
                  >
                    <WrapItem marginRight="15px">
                      <Avatar
                        size="lg"
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                    </WrapItem>
                    <VStack alignItems="flex-start" spacing={'1'}>
                      <Flex>
                        <Text
                          borderBottomColor={'#DBDBDB'}
                          borderBottomWidth={'1px'}
                          fontWeight={'700'}
                          fontSize={['20px']}
                          color={ElementColor.lightText}
                        >
                          Yeonseo Choi{' '}
                        </Text>
                      </Flex>
                      <HStack spacing="8">
                        <Text
                          fontSize={['20px']}
                          color={ElementColor.lightText}
                        >
                          1 Review{' '}
                        </Text>
                        <Flex alignItems={'center'}>
                          <GoLocation
                            size={20}
                            color={ElementColor.lightText}
                          />
                          <Text
                            fontSize={['20px']}
                            color={ElementColor.lightText}
                            marginLeft={'10px'}
                          >
                            {' '}
                            KR{' '}
                          </Text>
                        </Flex>
                      </HStack>
                    </VStack>
                  </Flex>
                  <Box>
                    <Text fontSize={['16px']} color={ElementColor.lightText}>
                      {' '}
                      {preferDateFormat('2023-03-20', 'll')}{' '}
                    </Text>
                  </Box>
                </VStack>
                <VStack display="flex">
                  <HStack spacing={'2'}>{renderRating(5)}</HStack>
                  <Text
                    fontWeight={'700'}
                    fontSize={['20px', '24px']}
                    color={ElementColor.darkText}
                  >
                    Highly Recommended
                  </Text>
                </VStack>
                <Box>
                  <Text fontSize={['16px']} color={ElementColor.lightText}>
                    Nikka was a very professional consultant, always ready to
                    assist us each step of the way. I was reminded of everthing
                    and I had to take with to the interview and also later to
                    pick my passport and my son`s. Thanks once more, I certainly
                    recommend the service.
                  </Text>
                </Box>

                <Box>
                  <Text
                    fontWeight={'700'}
                    fontSize={['20px']}
                    color={ElementColor.darkText}
                  >
                    Date of experience: {preferDateFormat('2023-02-28', 'LL')}{' '}
                  </Text>
                </Box>
                <HStack
                  spacing={'4'}
                  width={'full'}
                  justifyContent={'flex-end'}
                >
                  <Button>
                    <AiOutlineLeft size={20} color={ElementColor.lightText} />
                  </Button>
                  <Button>
                    <AiOutlineRight size={20} color={ElementColor.green} />
                  </Button>
                </HStack>
              </VStack>
            </Flex>

            <Spacer />

            <Flex
              padding="10px"
              flexDirection={'column'}
              flex={1}
              minW={{ lg: 'lg' }}
            >
              <Flex justifyContent={'flex-end'} padding="15px">
                <Image
                  src={trust_pilot}
                  display={'block'}
                  objectFit="contain"
                  marginRight={'10px'}
                  height={{ base: '50px', lg: '83px' }}
                />
              </Flex>
              <Box display={{ base: 'none', lg: 'block' }}>
                <Image
                  src={undraw_personal_opinions}
                  display={'block'}
                  objectFit="contain"
                  marginRight={'10px'}
                  height="460px"
                />
              </Box>
            </Flex>
          </Flex>

          <VStack spacing="4" py="25px" align={'flex-start'}>
            <Flex>
              <Heading
                as="h4"
                size="xl"
                lineHeight={1.2}
                color={ElementColor.green}
              >
                Let's keep in touch for news
              </Heading>
            </Flex>
            <Flex
              bgColor={'#F5F5F5'}
              borderLeft={'10px solid #00579B'}
              borderLeftWidth={{ base: '5px', lg: '10px' }}
              borderRadius={'10px'}
              width={'full'}
              alignItems={'center'}
              justifyContent={'space-evenly'}
              padding={'20px 10px'}
              flexDirection={['column', 'row']}
              gap="4"
            >
              <Flex flex={1}>
                <Text
                  fontSize={['20px', '22px', '24px']}
                  lineHeight={1.2}
                  color={ElementColor.black}
                >
                  {' '}
                  Subscribe to be the first do receive updates and be in
                  advantage on your application proccess{' '}
                </Text>
              </Flex>
              <Flex padding={'5px 10px'} px={[0, '10px']} flex={1}>
                <Flex
                  borderRadius={'10px'}
                  padding={'5px 10px'}
                  width={'full'}
                  bgColor={'#fff'}
                >
                  <Input
                    borderWidth={0}
                    _focus={{ borderWidth: 0 }}
                    placeholder="email address"
                  />
                  <Button
                    py="2px"
                    color={ElementColor.white}
                    bgColor={'#FD816B'}
                  >
                    <Text fontSize="13px">Subcribe </Text>
                    <AiOutlineRight size={28} color={ElementColor.white} />
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </VStack>
        </Stack>
      </Container>
    </Wrapper>
  );
};

export default TrustPilotSection;
