import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import LogoImg from '../../../../assets/img/logo.png';
import { ElementColor, TextColor } from '../../../../constants/colors';

const Logo = styled.img`
  width: 200px;
  height: 26px;
`;

const Content = ({ theme, toggleSideBar }) => {
  return (
    <VStack
      h="90%"
      spacing={4}
      py={10}
      justify="space-between"
      fontFamily="Rubik"
    >
      <Link to="/">
        <Logo src={LogoImg} alt="Gov Assist" />
      </Link>

      <HStack w="full" justify="space-between">
        <Link to={{ pathname: '/chat' }}>
          <Button
            bgColor={ElementColor.transparent}
            color={theme === 'dark' ? ElementColor.white : ElementColor.primary}
            border={`1px solid ${
              theme === 'dark' ? ElementColor.white : ElementColor.primary
            }`}
            height="min-content"
            py={3}
          >
            LIVE CHAT
          </Button>
        </Link>
      </HStack>
    </VStack>
  );
};

const Sidebar = ({ show, toggleSideBar, theme }) => {
  return (
    <Drawer isOpen={show} onClose={toggleSideBar} placement="left" size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody
          bgColor={
            theme === 'dark' ? ElementColor.primary : ElementColor.transparent
          }
        >
          <Content theme={theme} toggleSideBar={toggleSideBar} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
