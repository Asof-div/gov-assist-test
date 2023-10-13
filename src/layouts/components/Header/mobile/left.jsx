import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/img/logo.png';
import { useDisclosure, IconButton, HStack, Image } from '@chakra-ui/react';
import { TiThMenu } from 'react-icons/ti';
import Sidebar from './sidebar';
import { ElementColor } from '../../../../constants/colors';


function HeaderLeft({ theme, isAuthenticated, isHost }) {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <React.Fragment>
            <HStack spacing={3}>
                <IconButton
                    variant="unstyled"
                    icon={<TiThMenu size='30px' color={theme === 'dark' ? ElementColor.white : ElementColor.primary} />}
                    aria-label="open menu"
                    onClick={onOpen}
                />
                <Link to="/" >
                    <Image src={Logo} width='160px' alt='Gov Assist'/>
                </Link>
            </HStack>
            <Sidebar
                show={isOpen}
                toggleSideBar={onClose}
            />
        </React.Fragment>
    )
}

export default HeaderLeft