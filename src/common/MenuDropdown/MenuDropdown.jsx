import React from 'react'
import { Box, Menu, MenuButton, MenuList, MenuItem, Portal, Text, HStack } from '@chakra-ui/react'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { ElementColor, TextColor } from '../../constants/colors'


function MenuDropdown({
    data = [],
    color,
    header,
    divider,
}){
    const hasFunction = data.length > 0 ? typeof data[0] == 'object' : false;

    const stopPropagation = (e) => {
        e.stopPropagation()
    }


    return (
        <Menu autoSelect={false} placement='bottom'>
            {({ isOpen }) => (
                <React.Fragment>
                    <Box color='#2E2E2E' w='min-content' onClick={stopPropagation} bg='transparent'>
                        <MenuButton justifyContent='center' onClick={stopPropagation}>
                            <MdOutlineArrowDropDown
                                size='38px'
                                color={color || ElementColor.secondary}
                                style={{ marginTop: '5px', transform: isOpen ? 'rotateZ(180deg)' : 'rotateZ(0deg)', transition: '.2s ease-in' }}
                            />
                        </MenuButton>
                    </Box>
                    <Portal>
                        <MenuList
                            boxShadow={`0px 0px 10px 5px ${ElementColor.lightShadow}`}
                            zIndex={1002}
                            fontFamily='Rubik'
                            mt={4}
                            mr={1}
                        >
                            {header &&
                                <Text
                                    mx={5}
                                    mt={2}
                                    mb={4}
                                    fontWeight={700}
                                    color={TextColor.primary}
                                    textOverflow='ellipsis'
                                    overflow='hidden'
                                    whiteSpace='nowrap'
                                >
                                    {header}
                                </Text>
                            }
                            {data?.map((datum, index, arr) => (
                                <MenuItem 
                                    key={index}
                                    py={3}
                                    px={5}
                                    bgColor={datum?.highlight ? ElementColor.washedLemon : ''}
                                    color={datum?.highlight ? TextColor.primary : ''}
                                    fontWeight={datum?.highlight ? 500 : ''}
                                    fontSize='14px'
                                    borderBottom={index === divider ? '1px solid #686969' : (index === arr.length - 2) ? '1px solid #686969' : ''}
                                    onClick={(e) => { hasFunction ? datum.onUse() : null && e.stopPropagation() }}
                                >
                                    <HStack w='full' justify='space-between'>
                                        <Text>{hasFunction ? datum.link : datum}</Text>
                                        {datum?.icon && datum.icon}
                                    </HStack>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Portal>
                </React.Fragment>
            )}
        </Menu>
    )
}

export default MenuDropdown
