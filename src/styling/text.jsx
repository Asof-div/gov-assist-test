import styled, { css } from 'styled-components';
import { TextColor } from '../constants/colors';
import { fontWeight } from '../constants/sizes';

const hoverState = css`
  filter: brightness(0.5);
`;

export const BlueText = styled.span`
  color: ${TextColor.blue};
  font-weight: ${(props) => (props.bold ? fontWeight.bold : fontWeight.normal)};
  transition: 0.4s all ease;

  &:hover {
    ${(props) => props.$isLink && hoverState}
  }
`;

export const RedText = styled.span`
  color: ${TextColor.red};
  font-weight: ${(props) => (props.bold ? fontWeight.bold : fontWeight.normal)};
  transition: 0.4s all ease;

  &:hover {
    ${(props) => props.$isLink && hoverState}
  }
`;

export const GreyText = styled.span`
  color: ${TextColor.label};
  font-weight: ${(props) => (props.bold ? fontWeight.bold : fontWeight.normal)};
`;

export const Bold = styled.span`
  font-weight: ${fontWeight.bold};
`;

export const Thick = styled.span`
  font-weight: ${fontWeight.thick};
`;

export const Medium = styled.span`
  font-weight: ${fontWeight.medium};
`;

export const Small = styled.small`
  font-size: 0.8rem;
  line-height: 10px;
  color: ${(props) => props.color || TextColor.label};
`;

export const OpenSan = styled.div`
  font: 400 16px 'Object Sans';
  line-height: 26px;
  color: ${(props) => props.color || "#686969"};
`;

export const Center = styled.div`
  text-align: center;
`;
