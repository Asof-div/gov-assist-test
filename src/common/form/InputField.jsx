import { InputGroup, InputRightElement, InputLeftElement, Input as ChakraInput, FormControl, FormLabel, Text} from '@chakra-ui/react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import React from 'react'
import { ElementColor } from '../../constants/colors'
import { fontSize } from '../../constants/sizes'


export const Input = ({
    label,
    name,
    width,
    height,
    onChange,
    value,
    onClick,
    rightColor,
    placeholder,
    _placeholderStyle,
    className,
    type,
    min = 0,
    max,
    leftElement,
    rightElement,
    required,
    disabled,
    readOnly,
    border,
    focusBorder,
    radius,
    style,
    labelMargin,
    error,
    leftEleStyle,
    labelStyle,
    labelColor,
    color,
    light,
    onRightElementClick,
    darkBg,
    labelFontSize,
    ...props
}) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => type === 'password' ? setShow(!show) : onRightElementClick && onRightElementClick()

    const format = (val) => {
        if(props.decimal){
            return val ? val : "";
        } else {
            return val ? parseInt(val, 10).toLocaleString() : ""
        }
    }

    const parse = (val) => val.replace(/[^\d\\.]/g, "");

    const handleNumberChange = (ev) => {
        let e = ev
        if (max && Number(e.target.value) > Number(max)) {
            // Notify.simple('Exceeded maximum value')
        } else {
            e.target.value = parse(e.target.value)
            onChange && onChange(e);
        }
    }

    const handleMoneyChange = (ev) => {
        let e = ev
        e.target.value = parse(e.target.value)
        onChange && onChange(e);
    }
    const handleDateChange = (ev) => {
        let e = ev
        e.target.value = (e.target.value.includes('Invalid') || e.target.value.includes('INVALID')) ? '' : e.target.value
        onChange && onChange(e);
    }
    const handlePercentChange = (ev) => {
        let e = ev
        e.target.value = (Number(e.target.value) < 0 || Number(e.target.value) > 100)  ? value : e.target.value
        onChange && onChange(e);
    }
    
    const handleType = (type) => {
        if (type === 'percent') {
            return 'number'
        } else if (type === 'password') {
            return show ? "text" : "password"
        } else if (type === 'money') {
            return 'text'
        } else return type ?? 'text'
    }

    const handleChange = (ev) => {
        return type === 'money' ? handleMoneyChange(ev) : type === 'percent' ? handlePercentChange(ev) : type === 'date' ? handleDateChange(ev) : type === 'number' ? handleNumberChange(ev) : onChange(ev) 
    }

    return (
        <FormControl mt={0} w={width || props.w}>
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
            <InputGroup>
                {leftElement &&
                    <InputLeftElement
                        onClick={handleClick}
                        left={light ? 2 : 0}
                        top={light ? 1 : 0}
                        children={leftElement}
                        style={leftEleStyle}
                    />
                }
                <ChakraInput
                    size='md'
                    name={name}
                    color={light ? ElementColor.washedLemon : color || ElementColor.lightGrey}
                    type={handleType(type)}
                    pl={leftElement ? light ? '50px' : '40px' : '20px'}
                    pr={rightElement ? light ? '50px' : '40px' : '20px'}
                    height={light ? '49px' : height}
                    isDisabled={disabled}
                    _disabled={{color: ElementColor.darkGrey}}
                    onChange={handleChange}
                    value={type === 'money' ? format(value) : value}
                    border='none'
                    _focus={props._focus || { outline: light ? `2px solid ${ElementColor.washedLemon}` : focusBorder || `2px solid ${ElementColor.primary}`, border: 'none'  }}
                    placeholder={type === 'password' ? '.........' : placeholder}
                    _placeholder={props._placeholder || { color: ElementColor.label, fontSize: "14px" }}
                    isRequired={required}
                    outline={error ? "2px solid #E53E3E" : light ? `2px solid ${ElementColor.washedWhite}` : border || `1px solid ${ElementColor.label}`}
                    borderRadius={light ? '100px' : radius || '4px'}
                    sx={style}
                    min={min}
                    max={max}
                    fontSize='14px'
                    isReadOnly={readOnly}
                    {...props}
                />
                {rightElement &&
                    <InputRightElement
                        fontSize='1em'
                        onClick={handleClick}
                        right={light ? [2, 2, 2] : [0]} 
                        top={light ? 1 : 0}
                        children={type === 'password' ? show ? <AiFillEyeInvisible size={24} color={rightColor || ElementColor.washedLemon} /> : <AiFillEye size={24} color={rightColor || ElementColor.washedLemon} /> : rightElement} 
                        cursor='pointer'
                    />
                }
            </InputGroup>
            {error &&
                <Text ml={light ? '15px' : ''} mt='10px' mb={0} color={light ? '#EAFFD2' : '#E53E3E'} fontSize={[ '14px', '14px' ]} fontFamily='Inter'>
                    {error}
                </Text>
            }
        </FormControl>
    )
}
