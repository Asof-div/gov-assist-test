import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { HStack, Avatar, Box, Center, Text, Button } from '@chakra-ui/react'
import { FaRegBell } from 'react-icons/fa'
// import CustomMD from '../../../../common/MenuDropdown/customMD';
import { ElementColor, TextColor } from '../../../../constants/colors';



const Unauthenticated = ({theme}) => {
    const location = useLocation();
    return (
        <HStack spacing={4}>
            
            <Link to={{ pathname: "/chat", state: { from: location } }}>
                <Button 
                    bgColor={ElementColor.transparent}
                    color={theme === 'dark' ? ElementColor.white : ElementColor.primary}
                    border={`1px solid ${theme === 'dark' ? ElementColor.white : ElementColor.primary }`}
                    height="min-content"
                    py={3}
                >
                    LIVE CHAT
                </Button>

            </Link>
        </HStack>
    );
};


function HeaderRight({ isAuthenticated, theme }) {
    return (
        <React.Fragment>
            
            <Unauthenticated theme={theme} />
        
        </React.Fragment>
    );
}

export default HeaderRight