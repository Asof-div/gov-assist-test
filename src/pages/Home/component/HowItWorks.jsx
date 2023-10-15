import React from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Spacer,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import Accordion from '../../../common/Accordion/Accordion';
import { Container } from '../../../styling/layout';
import { Link } from 'react-router-dom';
import { ElementColor } from '../../../constants/colors';
import { BsArrowRightShort } from 'react-icons/bs';
import document from '../../../assets/icon/icon_document_text_.svg';
import { VisaCostList } from '../../../constants/mock';

const Wrapper = ({ children }) => (
  <Box
    p="30px 0px"
    bgColor={'#F7F8F9'}
    bgRepeat="no-repeat"
    bgPosition="center"
    bgSize="cover"
    objectFit="cover"
  >
    {children}
  </Box>
);

const HowItWorks = () => {
  return (
    <Wrapper>
      <Container>
        <Stack as="section" pt="6">
          <VStack alignItems={'flex-start'} mb={{ base: '10px', lg: '40px' }}>
            <Flex px={{ base: '4', lg: '35px' }}>
              <Image
                src={document}
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
                Find the right visa for you!
              </Text>
            </Flex>
          </VStack>

          <Accordion
            firstIndex
            heading="Diversity Visa Cost ?"
            fontSize={['22px', '45px', '54px']}
            color={ElementColor.green}
            bgColor={ElementColor.transparent}
            panel={
              <Stack
                spacing={5}
                fontSize={['14px', '14px', '14px']}
                textAlign="justify"
              >
                <VisaCostInfo />
                <HStack justifyContent={'flex-end'}>
                  <Text fontSize={['14px', '14px', '16px']}>
                    Fees are subject to change, please use this calculator
                  </Text>
                </HStack>
              </Stack>
            }
          />

          <Accordion
            firstIndex
            heading="Diversity Visa Timeline ?"
            fontSize={['22px', '45px', '54px']}
            color={ElementColor.green}
            bgColor={ElementColor.transparent}
            panel={<VisaCostInfo />}
          />
          <Accordion
            firstIndex
            heading="Diversity Visa FAQs ?"
            fontSize={['22px', '45px', '54px']}
            color={ElementColor.green}
            bgColor={ElementColor.transparent}
            panel={<VisaCostInfo />}
          />
        </Stack>
      </Container>
    </Wrapper>
  );
};

export default HowItWorks;

const VisaCostInfo = () => {
  return (
    <Card borderRadius={'20px'}>
      <CardBody>
        <VStack alignItems={'flex-start'} spacing={'5'}>
          <Flex width={'full'} flexDir={['column', 'row']} gap="2">
            <Box
              borderLeft={'3px solid'}
              borderColor={ElementColor.darkPrimary}
              padding={'0 10px'}
            >
              <Text fontSize={['20px', '22px', '24px']}>
                Mandatory Government Fees for Green Cards
              </Text>
            </Box>
            <Spacer />
            <Link to="getting-started">
              <Button color={ElementColor.white} bgColor={'#FD816B'}>
                Apply Now
              </Button>
            </Link>
          </Flex>
          <Flex width={'full'}>
            <TableContainer width={'full'}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Fee Type</Th>
                    <Th>Cost (to Applicat Living in the U.S.)</Th>
                    <Th isNumeric>Cost (to Applicant Living Abroad)</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {VisaCostList.map(item => (
                    <Tr>
                      <Td>{item.feeType}</Td>
                      <Td>{item.costInUs}</Td>
                      <Td>{item.costAbroad}</Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Total</Th>
                    <Th>$1760</Th>
                    <Th>$1200</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  );
};
