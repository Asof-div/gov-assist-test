import React from 'react';
import {
  Box,
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Center,
  AccordionIcon,
} from '@chakra-ui/react';
import { Heading } from '../../styling/heading';
import { ElementColor } from '../../constants/colors';

function Accordion({
  firstIndex,
  heading,
  fontSize,
  panel,
  bgColor,
  headerBg,
  color,
}) {
  return (
    <ChakraAccordion defaultIndex={firstIndex ? [0] : null} allowMultiple>
      <AccordionItem border="none">
        {({ isExpanded }) => (
          <Box
            mb={6}
            py={[1, 2, 4]}
            pl={[2, 6, 8]}
            pr={[2, 3]}
            bg={bgColor || '#F1F1F1'}
            borderRadius="40px"
          >
            <AccordionButton
              _hover={{ bgColor: 'none' }}
              borderBottom={'1px solid #170A61'}
              borderBottomWidth={isExpanded ? 0 : 1}
            >
              <Heading
                pr={4}
                fontSize={fontSize || ['18px', '18px', '22px']}
                color={color || ElementColor.grey}
                fontWeight={700}
              >
                {heading}
              </Heading>

              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              pb={8}
              pt={4}
              color={ElementColor.grey}
              w={{ lg: '95%' }}
            >
              {panel}
            </AccordionPanel>
          </Box>
        )}
      </AccordionItem>
    </ChakraAccordion>
  );
}

export default Accordion;
