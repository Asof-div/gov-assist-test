import { Box, FormControl, FormLabel } from '@chakra-ui/react';
import React from 'react'
import PInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './style.css'
import { ElementColor } from '../../constants/colors';

export const PhoneInput = ({
    name,
    label,
    labelColor,
    labelMargin,
    onChange,
    onClick,
    value,
    placeholder,
    country,
    countries,
    w,
    h,
    border,
    onBlur,
    error,
    required,
    autoFocus,
    light,
}) => {

    const handleChange = (value, country, e, formattedValue) => {
        onChange(e, country, value)
    }

    return (
        <FormControl>
            {label && 
                <FormLabel
                    margin={labelMargin || '5px 8px -3px 8px'}
                    fontSize={['12px', '14px', '14px']}
                    mb={1}
                    fontWeight={light ? 500 : 400}
                    color={light ? ElementColor.washedLemon : labelColor || ElementColor.label}
                >
                    {label}
                </FormLabel>
            }
            <Box width={w} h={h}>
                <PInput
                    inputProps={{ name: name, required: required, autoFocus: autoFocus }}
                    onChange={handleChange}
                    onClick={onClick}
                    value={value}
                    placeholder={placeholder}
                    country={country}
                    onlyCountries={countries}
                    onBlur={onBlur}
                    inputStyle={{
                        color: '#8885AC',
                        borderRadius: light ? '25px' : '4px',
                        border: `${error ? "2px solid #E53E3E" : light ? `2px solid ${ElementColor.washedWhite}` : border || `1px solid ${ElementColor.label}`}`,
                        margin: '8px',
                        width: '100%',
                        height: '49px',
                        fontFamily: 'Rubik, sans-serif',
                        paddingLeft: light ? '17%' : '12%',
                    }}
                    buttonClass={light ? 'phone-input-btn' : ''}
                />
            </Box>
            {error && 
                <FormLabel
                    ml={light ? '8px' : ''}
                    color='#E53E3E'
                    fontSize={['14px', '14px']}
                    fontFamily='Inter'
                >
                    {error}
                </FormLabel>
            }
       </FormControl>
    )
}
