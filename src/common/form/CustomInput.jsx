import { FormLabel, FormControl, Input } from '@chakra-ui/react'
import React from 'react'

export const CustomInput = ({ label, name, value, type, onChange, disabled, required, ...props }) => {
    const [show, setShow] = React.useState(false)

    const format = (val) => {
        if(props.decimal){
            return val ? val : "";
        } else {
            return val ? parseInt(val, 10).toLocaleString() : ""
        }
    }

    const parse = (val) => val.replace(/[^\d\\.]/g, "");

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
        return type === 'money' ? handleMoneyChange(ev) : type === 'percent' ? handlePercentChange(ev) : type === 'date' ? handleDateChange(ev) : onChange(ev) 
    }

    return (
        <FormControl>
            <FormLabel
                fontSize='12px'
                background='inherit'
                pl='0px'
                color='#082932'
                mb={0}
                htmlFor={name}
            >
                {label}
            </FormLabel>

            <Input
                background={disabled ? 'transparent' : '#fff'}
                border="2px solid #E1E0F1"
                borderRadius='10px'
                py='12px'
                px='20px'
                type={handleType(type)} 
                onChange={handleChange}
                _focus={{outline: disabled ? 'none' : ''}}
                fontWeight={600}
                fontSize='14px'
                value={value}
                isReadOnly={disabled}
                isRequired={required}
                {...props}
            />
        </FormControl>
    )
}
