import React from 'react'
import { FormControl, Input, FormLabel, PinInput, PinInputField, HStack } from '@chakra-ui/react'

export const CustomPinInput = ({
    id,
    name,
    width,
    onClick,
    onChange,
    type,
    required,
    style,
    name1,
    name2,
    name3,
    name4,
    name5,
    name6,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    error,
    ...props
}) => {
    return (
        <FormControl>
            <HStack spacing={2}>
                <PinInput
                    id={id}
                    color='#C7C5DE'
                    border={'1px solid #C7C5DE'}
                    width='60px'
                    height='60px'
                    borderRadius='20px'
                    size='lg'
                    type='alphanumeric' 
                    placeholder=' '
                    // onChange={onChange}
                    // value={value}
                >
                    <PinInputField 
                        name={name1} 
                        onChange={onChange} 
                        value={value1}
                        borderRadius='20px'
                        border={error ? "1px solid crimson" : "1px solid #C7C5DE"}
                        />
                    <PinInputField 
                        name={name2} 
                        onChange={onChange} 
                        value={value2}
                        borderRadius='20px'
                        border={error ? "1px solid crimson" : "1px solid #C7C5DE"}
                        />
                    <PinInputField 
                        name={name3} 
                        onChange={onChange} 
                        value={value3}
                        borderRadius='20px'
                        border={error ? "1px solid crimson" : "1px solid #C7C5DE"}
                        />
                    <PinInputField 
                        name={name4} 
                        onChange={onChange} 
                        value={value4}
                        borderRadius='20px'
                        border={error ? "1px solid crimson" : "1px solid #C7C5DE"}
                        />
                    <PinInputField 
                        name={name5} 
                        onChange={onChange} 
                        value={value5}
                        borderRadius='20px'
                        border={error ? "1px solid crimson" : "1px solid #C7C5DE"}
                        />
                    <PinInputField 
                        name={name6} 
                        onChange={onChange} 
                        value={value6}
                        borderRadius='20px'
                        border={error ? "1px solid crimson" : "1px solid #C7C5DE"}
                        />
                </PinInput>
            </HStack>
        </FormControl>
    )
}
