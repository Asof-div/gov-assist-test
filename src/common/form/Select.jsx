import React from 'react'
import { Select as SelectInput, FormControl, FormLabel, Text, Box, Center } from '@chakra-ui/react'
import { moneyFormat } from '../../utils/utils'
import { ElementColor } from '../../constants/colors'


export const Select = ({ 
    label,
    labelStyle,
    onChange,
    onBlur,
    options = [],
    displayValues,
    value,
    type,
    color,
    className,
    style,
    name,
    height,
    disabled,
    readOnly,
    required,
    border,
    error,
    radius,
    labelColor,
    placeholder,
    noPlaceholder,
    placeholderStyle,
    focusBorder,
    leftElement,
    light,
    darkBg,
    labelFontSize,
    ...props
}) => {
    return (
        <FormControl>
            {label && 
                <FormLabel
                    htmlFor={name}
                    ml={light ? '10px' : ''}
                    mb={1}
                    color={light ? ElementColor.washedLemon : labelColor || ElementColor.label}
                    fontSize={labelFontSize || ['14px', '14px', '14px']}
                    fontWeight={light ? 500 : 400}
                    sx={labelStyle}
                >
                    {label}
                </FormLabel>
            }
            <Box pos='relative' w='full'>
                {leftElement &&
                    <Center
                        position='absolute'
                        left='18px'
                        top='31%'
                        children={leftElement}
                    />
                }
                <SelectInput
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    isDisabled={disabled}
                    _disabled={{color: ElementColor.darkGrey}}
                    isReadOnly={readOnly}
                    isRequired={required}
                    color={light ? ElementColor.washedLemon : color || ElementColor.lightGrey}
                    height={light ? '49px' : height}
                    border='none'
                    _focus={{ outline: light ? `2px solid ${ElementColor.washedLemon}` : focusBorder || `2px solid ${ElementColor.primary}`, border: 'none'  }}
                    outline={error ? "2px solid #E53E3E" : light ? `2px solid ${ElementColor.washedWhite}` : border || `1px solid ${ElementColor.label}`}
                    borderRadius={light ? '100px' : radius || '4px'}
                    sx={style}
                    fontSize='14px'
                    {...props}
                >
                    {!noPlaceholder && <option value='' style={placeholderStyle}>{placeholder}</option>}
                    {options.map((optionValue, index) => 
                        <option key={index} value={optionValue} style={{ color: ElementColor.lightGrey }}>
                            {displayValues ? (type === 'money' ? moneyFormat(displayValues[index], true) : displayValues[index]) : (type === 'money' ? moneyFormat(optionValue, true) : optionValue)}
                        </option>
                    )}
                </SelectInput>
            </Box>

            {error &&
                <Text ml={light ? '15px' : ''} mt='10px' mb={0} color={light ? '#EAFFD2' : '#E53E3E'} fontSize={[ '14px', '14px' ]} fontFamily='Inter'>
                    {error}
                </Text>
            }
        </FormControl>
    )
}