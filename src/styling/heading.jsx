import styled from 'styled-components';
import breakpoints from '../constants/breakpoints';
import { DEFAULT_SIZE_UNIT, fontSize, fontWeight } from '../constants/sizes';
import { ElementColor } from '../constants/colors';
import { Text } from '@chakra-ui/react';

export const LargeHeading = styled.h1`
    font-size: ${fontSize.mobile.xl}${DEFAULT_SIZE_UNIT};
    font-weight: ${fontWeight.bold};
    width: 100%;

    @media screen and (min-width: ${breakpoints.md}px) {
        font-size: ${fontSize.desktop.xl}px;
        font-weight: ${fontWeight.thick};
    }
`;

export const BigHeading = styled.h2`
    font-size: ${fontSize.mobile.lg}${DEFAULT_SIZE_UNIT};
    font-weight: ${fontWeight.bold};
    width: 100%;

    @media screen and (min-width: ${breakpoints.md}px) {
        font-size: ${fontSize.desktop.lg}px;
    }
`;

export function Heading({ children, w, bold, size, color, ...props }) {
    return (
        <Text
            as='h3'
            w={w || 'full'}
            m={0}
            fontWeight={bold || 700}
            fontSize={[`${size || fontSize.default.md}px`, `${size ? Number(size) + 2 : fontSize.desktop.md}px`]}
            color={color || ElementColor.grey}
            textAlign='left'
            {...props}
        >
            {children}
        </Text>
    )
}
