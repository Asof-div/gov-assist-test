import React from 'react';
import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Spacer,
  Text,
} from '@chakra-ui/react';

export const CheckBoxInput = ({
  label,
  error,
  light,
  darkBg,
  color = '#686969',
  ...props
}) => {
  return (
    <FormControl>
      <Flex>
        <Checkbox color={color} {...props}>
          {label}
        </Checkbox>
      </Flex>

      {error && (
        <Text
          ml={light ? '15px' : ''}
          mt="10px"
          mb={0}
          color={light ? '#EAFFD2' : '#E53E3E'}
          fontSize={['14px', '14px']}
          fontFamily="Inter"
        >
          {error}
        </Text>
      )}
    </FormControl>
  );
};
