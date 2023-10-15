import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import { ElementColor } from '../../../constants/colors';
import { CheckBoxInput, Input, Select } from '../../../common/form';
import rigthArrow from '../../../assets/icon/icon_arrow_right.svg';

export const GreenCardForm = () => {
  const eventTime = moment('2023-11-01');
  const currentTime = moment();
  const [duration, setDuration] = useState(
    moment.duration(eventTime.diff(currentTime))
  );
  const intervalRef = useRef(null);

  return (
    <form>
      <Box padding="5px 0px">
        <Flex alignItems={'center'}>
          <Image
            src={rigthArrow}
            display={'block'}
            objectFit="contain"
            h={'24px'}
            w={'24px'}
            marginRight={'10px'}
          />
          <Text color={ElementColor.green} fontSize={['20px', '22px', '24px']}>
            {' '}
            Check now for free!
          </Text>
        </Flex>
      </Box>
      <Box padding="20px 0px">
        <Heading size="lg">Green card eligibility</Heading>
      </Box>
      <SimpleGrid flexDirection="row" columns={[1, 2]} spacing="4">
        <Input
          name="first_name"
          // label="First Name"
          placeholder="First Name"
        />
        <Input
          name="last_name"
          // label="Last Name"
          placeholder="Last Name"
        />

        <Input name="email" placeholder="Email Address" />
        <Input name="confirm_email" placeholder="Your email again" />
      </SimpleGrid>

      <SimpleGrid paddingTop={4} flexDirection="row" columns={'1'} spacing="4">
        <Select
          name="country_of_birth"
          placeholder="Country Of Birth"
          options={['USA', 'UK', 'NIGERIA']}
        />

        <Select
          name="marital_status"
          placeholder="Marital Status"
          options={['SINGLE', 'MARRIED', 'DIVORSED']}
        />

        <CheckBoxInput
          label="Yes, I finished high school OR I have qualifying training."
          color="black"
        />

        <Button bgColor={ElementColor.green} color={ElementColor.white}>
          Continue
        </Button>
      </SimpleGrid>
    </form>
  );
};
