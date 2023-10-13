import styled, { css } from "styled-components";

export const spaceBetweenAndCenter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftStyle = styled.div`
  ${spaceBetweenAndCenter};
  width: 20%;
`;

