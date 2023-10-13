import React from 'react'
import { FormControl, FormLabel, Text, Textarea } from '@chakra-ui/react'
import { ElementColor } from '../../constants/colors'


export const TextArea = ({
    label,
    labelStyle,
    id,
    width,
    height,
    disabled,
    onChange,
    onClick,
    placeholder,
    _placeholderStyle,
    name,
    value,
    required,
    border,
    margin,
    radius,
    error,
    color,
    labelColor,
    focusBorder,
    style,
    light,
    darkBg,
    ...props
}) => {
    return (
        <FormControl w={width}>
            {label &&
                <FormLabel
                    htmlFor={name}
                    ml={light ? '10px' : ''}
                    mb={1}
                    color={light ? ElementColor.washedLemon : labelColor || ElementColor.label}
                    fontSize={['14px', '14px', '14px']}
                    fontWeight={400}
                    sx={labelStyle}
                >
                    {label}
                </FormLabel>
            }
            <Textarea
                name={name}
                value={value}
                color={light ? ElementColor.washedLemon : color || ElementColor.lightGrey}
                height={height || '140px'}
                isDisabled={disabled}
                _disabled={{color: ElementColor.darkGrey}}
                onChange={onChange}
                border='none'
                _focus={{ outline: light ? `2px solid ${ElementColor.washedLemon}` : focusBorder || `2px solid ${ElementColor.primary}`, border: 'none'  }}
                placeholder={placeholder}
                _placeholder={props._placeholder || { color: ElementColor.label, fontSize: "14px" }}
                isRequired={required}
                outline={error ? "2px solid #E53E3E" : light ? `2px solid ${ElementColor.washedWhite}` : border || `1px solid ${ElementColor.label}`}
                borderRadius={light ? '100px' : radius || '4px'}
                sx={style}
                fontSize='14px'
                {...props}
            />


            {error &&
                <Text ml={light ? '15px' : ''} mt='10px' mb={0} color={light ? '#EAFFD2' : '#E53E3E'} fontSize={[ '14px', '14px' ]} fontFamily='Inter'>
                    {error}
                </Text>
            }
        </FormControl>
    )
}
