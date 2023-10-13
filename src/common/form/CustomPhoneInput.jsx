import React from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { FormControl, Box } from '@chakra-ui/react'

export const CustomPhoneInput = ({
    id,
    value,
    onChange,
    country,
    width,
    error,
    ...props
}) => {

    return (
        <FormControl>
            <Box
                width={ width || {base: '320px', md: '465px', lg: '465px'}}
            >
            <PhoneInput
                id={id}
                value={value}
                onChange={onChange}
                defaultCountry={country}
                style={{
                    color: '#8885AC',
                    borderRadius: '5px',
                    border: `${error ? "1.89px solid crimson" : "1.89px solid #C7C5DE"}`,
                    margin: '8px',
                    // width: '100%',
                    // height: '49px',
                    padding: '15px'
                }}
            />
            </Box>
        </FormControl>
    )
}
